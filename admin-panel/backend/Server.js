require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const blogSchema = new mongoose.Schema({
  date: String,
  category: String,
  title: String,
  content: String
});

const blogModel = mongoose.model('createBlog', blogSchema);

const uri=process.env.MONGO_URI;

if (!uri) {
  throw new Error('MONGO_URI is not defined in .env file');
}

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Server Running - Admin Panel Backend");
});

app.post("/postBlog", async (req, res) => {
  try {
    const data = await blogModel.create(req.body);
    console.log(data);
    res.json(data);
    console.log(data);
  } catch (error) {
    res.status(400).json('Error:' + error);
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Listening on  port ${port}`);
});
