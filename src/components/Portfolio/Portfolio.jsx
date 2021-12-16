import React from "react";
import Project from "../Project";
import "./Portfolio.css";
const Portfolio = (props) => {
  return (
    <section className="project">
      <div className="section-light my-work" id="my-work">
        <div className="container">
          <div className="column is-12 project">
            <h1 className="title has-text-centered section-title">My Work</h1>
          </div>
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <Project />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
