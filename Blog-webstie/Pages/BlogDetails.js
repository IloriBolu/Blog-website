import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Blogs from "./Blog";
import HomePage from "../Pages/HomePage";
import { useNavigate } from "react-router-dom";

const Wrong = React.lazy(() => import("../Pages/Error404"));

function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const blog = Blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <Wrong />
      </Suspense>
    );
  }

  return (
    <div className="Blog-container">
      <h1>{blog.header}</h1>
      <p>{blog.author}</p>
      <p className="essay">{blog.essay}</p>
      <p className="Mbappe">
        You can aslo add your blog by joining the community
      </p>
      <button className="BackHome" onClick={() => navigate("/")}>
        Back Home
      </button>
    </div>
  );
}
export default BlogDetails;
