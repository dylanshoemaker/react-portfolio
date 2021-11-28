import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <strong>Dylan Shoemaker</strong>
      </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/portfolio" className="navbar-item">
            Portfolio
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact Me
          </Link>
          <Link to="/resume" className="navbar-item">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
