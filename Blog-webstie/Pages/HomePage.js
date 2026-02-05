import React from "react";
import { useNavigate } from "react-router-dom";
import Blogs from "./Blog";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1>Welcome to Blogify</h1>
      <p>Grab a cup of coffee and dive into stories that spark ideas.</p>
      {Blogs.map((blog) => (
        <div key={blog.id} className="Blogs">
          <h2>{blog.header}</h2>
          <p>{blog.author}</p>
          <p>{blog.body}</p>
          <button
            className="button"
            onClick={() => navigate(`/blogs/${blog.id}`)}
          >
            Read more
          </button>
        </div>
      ))}
    </div>
  );
}
export default HomePage;
