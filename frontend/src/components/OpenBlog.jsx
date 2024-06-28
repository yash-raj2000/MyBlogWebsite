import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function OpenBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/getBlogs/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const jsonData = await response.json();
        setBlog(jsonData); // Assuming the first item in the array is the blog data
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div>
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading Blog Please Wait...
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="showBlog">
        <div className="dateCat">
          <div className="left-d">
            Date Posted:{" "}
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="right-d">Blog Category: {blog.category}</div>
        </div>
        <div className="titleCont">
          <h1>{blog.title}</h1>
          <p style={{ whiteSpace: "pre-wrap" }}>{blog.content}</p>
        </div>
      </div>
    </>
  );
}

export default OpenBlog;
