import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await fetch(
        "https://yashraj-blogs.onrender.com/getBlogs"
      );
      const jsonData = await response.json();
      const blogsData = jsonData.rows; // Extract blog data from the "rows" property

      // Sort blogs by date in descending order
      blogsData.sort((a, b) => new Date(b.date) - new Date(a.date));

      setBlogs(blogsData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="body">
        <Navbar />
        <Home />
        <div className="blogs-container">
          {blogs.map((blogItem) => (
            <div className="blog" key={blogItem.id} id={blogItem.id}>
              <p className="date">
                {new Date(blogItem.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                <span style={{ float: "right" }}>
                  Category: {blogItem.category}
                </span>
              </p>
              <h1 className="blog-title">{blogItem.title.slice(0, 45)}... </h1>
              <p className="blog-content" style={{ whiteSpace: "pre-wrap" }}>
                {blogItem.content.slice(0, 200)}...{" "}
              </p>
              <Link to={`/getBlogs/${blogItem.id}`} className="blog-btn">
                Read More...
              </Link>
              <hr
                style={{
                  marginTop: "2rem",
                  height: "1px",
                  backgroundColor: "black",
                }}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blogs;
