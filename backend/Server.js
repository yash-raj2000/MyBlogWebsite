const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const blogSchema = new mongoose.Schema({
  date: String,
  category: String,
  title: String,
  content: String
});

const blogModel = mongoose.model('createBlog', blogSchema);

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error('MONGO_URI is not defined in .env file');
}

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Server Running - Backend");
});

app.get("/getBlogs", async (req, res) => {
  try {
    const result = await db.createBlog.find();
    res.json(result);
  } catch (error) {
    console.error("Error Fetching Blogs", error);
  }
});

app.get(`/getBlogs/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM blogadata WHERE id = $1`, [
      id,
    ]);
    res.json(result.rows);
  } catch (error) {
    console.error("Error Fetching Blogs", error);
  }
});


app.listen(port, () => {
  console.log(`Listening on  port ${port}`);
});
