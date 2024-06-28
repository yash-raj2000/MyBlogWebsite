const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('MONGO_URI is not defined in .env file');
}

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const blogSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  category: String,
  title: String,
  content: String
});

const createblog = mongoose.model('createblog', blogSchema);

app.get("/", (req, res) => {
  res.send("Server Running - Backend");
});

app.get("/getBlogs", async (req, res) => {
  try {
    const result = await createblog.find();
    res.json(result);
  } catch (error) {
    console.error("Error Fetching Blogs:", error.message);
    res.status(500).json({ error: "An error occurred while fetching blogs." });
  }
});


app.get('/getBlogs/:id', async (req, res) => {
  try {
    const blogId = req.params.id;
    const result = await createblog.findById(blogId);
    res.json(result);
  } catch (error) {
    console.error("Error Fetching Blogs", error);
  }
});


app.listen(port, () => {
  console.log(`Listening on  port ${port}`);
});
