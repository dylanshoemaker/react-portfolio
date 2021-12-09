import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  // document.addEventListener('DOMContentLoaded', () => {})

  // // Get all "navbar-burger" elements
  // const $navbarBurgers = Array.prototype.slice.call(document.getElementsByClassName('navbar-burger'), 0);

  // // Check if there are any navbar burgers
  // if ($navbarBurgers.length > 0) {

  //   // Add a click event on each of them
  //   $navbarBurgers.forEach( el => {
  //     el.addEventListener('onclick', () => {

  //       // Get the target from the "data-target" attribute
  //       const target = el.dataset.target;
  //       const $target = document.getElementById(target);

  //       // Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
  //       el.classList.toggle('is-active');
  //       $target.classList.toggle('is-active');

  //     });
  //   });
  // }
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }
  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
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
    </div>
  );
};

export default Header;
