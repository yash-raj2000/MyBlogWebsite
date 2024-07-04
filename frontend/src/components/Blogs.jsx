import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
   const [loading, setLoading] = useState(false);

  const getBlogs = async () => {
        setLoading(true);
    try {
      const response = await fetch("https://myblogwebsite-backend.onrender.com/getBlogs");
      const jsonData = await response.json();
      // Sort blogs by date in descending order
      jsonData.sort((a, b) => new Date(b.date) - new Date(a.date));
      setBlogs(jsonData);
    } catch (error) {
      console.error(error.message);
    }finally {
      setLoading(false);
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
          {loading && <div className="loading-popup">I am using render's free instance for my backend so it may take around 40-50 secs to load the blogs ...</div>}
          {blogs.map((blogItem) => (
            <div className="blog" key={blogItem._id} id={blogItem._id}>
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
              <Link to={`/getBlogs/${blogItem._id}`} className="blog-btn">
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
