import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "./styles.css";
const BlogDetails = React.lazy(() => import("../Pages/BlogDetails"));
const HomePage = React.lazy(() => import("../Pages/HomePage"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense className="Suspense" fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
