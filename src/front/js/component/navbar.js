import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="nav-container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1"><img src="img.project-localStorage.png"></img></span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Log In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
