import React, { useState } from "react";
import axios from "axios";

function HomePage() {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    title: "",
    content: "", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("https://myblogwebsite-r5eq.onrender.com/postBlog", formData);
      console.log(result);
      // if (result.status === 200) {
      //   // or whatever status indicates success
      //   setFormData({
      //     date: "",
      //     category: "",
      //     title: "",
      //     content: "",
      //   });
      // }
      // alert("Blog Posted Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="home">
        <h2>Start Writing Your Blog Here:</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
          />
          <input
            type="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Blog Category*"
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title*"
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="Blog content*"
          ></textarea>
          <button type="submit">PUBLISH</button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
