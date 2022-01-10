import React from "react";
import { Link } from "react-router-dom";
import "hamburgers";
import "./Header.css";
import Icon from "../../assets/images/icons/favicon-32x32.png"
const Header = () => {
  function hamburger() {
    let myElement = document.querySelector(".hamburger");
    if (myElement.classList.contains("is-active")) {
      document.getElementById("mySidebar").style.width = "0";
      document.querySelector(".hamburger").classList.toggle("is-active");
    } else {
      myElement.classList.toggle("is-active");
      document.getElementById("mySidebar").style.width = "250px";
    }
  }
  return (
    <section className="header">
      <div className="name">
      
        <Link to="/" className="title is-1 ">
        <img className="asdf" alt="/" src={Icon}/>
         Dylan Shoemaker
        </Link>
      </div>
      <button
        className="hamburger hamburger--emphatic"
        type="button"
        id="maint"
        onClick={hamburger}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div id="mySidebar" className="sidebar" onClick={hamburger}>
        <Link to="/" className="button is-link">
          Home
        </Link>
        <Link to="/about" className="button is-link">
          About
        </Link>
        <Link to="/portfolio" className="button is-link">
          Portfolio
        </Link>
        <Link to="/resume" className="button is-link">
          Resume
        </Link>
      </div>
    </section>
  );
};

export default Header;
