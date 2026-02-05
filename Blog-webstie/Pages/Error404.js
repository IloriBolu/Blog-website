import React from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  return (
    <div className="Error">
      <p>Blog not found.</p>
      <p>Please return back to the Home page</p>
      <button className="button" onClick={() => navigate("/")}>
        Back Home
      </button>
    </div>
  );
}

export default Error404;
