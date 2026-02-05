import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "../Pages/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Suspense
      fallback={
        <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>
      }
    >
      <App />
    </Suspense>
  </ErrorBoundary>
);
