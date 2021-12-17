import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }
  return (
    <section className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <strong>Dylan Shoemaker</strong>
        </Link>
        <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      
      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-end">
          <Link to="/about" className="navbar-item" onClick={toggleBurgerMenu}>About</Link>
          <Link to="/portfolio" className="navbar-item" onClick={toggleBurgerMenu}>Portfolio</Link>
          <Link to="/resume" className="navbar-item" onClick={toggleBurgerMenu}>Resume</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
