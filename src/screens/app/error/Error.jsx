import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>

      <h2 className="error-title">Oops! Page Not Found</h2>

      <p className="error-text">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" className="error-btn">
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;