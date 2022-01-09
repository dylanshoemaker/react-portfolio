import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
      <section className="hero is-medium" id="hero">
          <div className="container hero-body has-text-centered">
            <h1 className="subtitle profession is-size-4-mobile">Hello there, I'm</h1>
            <h2 className="title is-size-4-mobile">Dylan</h2>
            <h1 className="title is-size-4-mobile learner">
              A lifelong learner who likes to code
            </h1>
            <div className="full">
              <Link to="/about">
                <button
                  className="button is-outlined is-medium mx-5"
                  data-aos="fade-up"
                >
                  About
                </button>
              </Link>
              <Link to="/portfolio">
                <button
                  className="button is-outlined is-medium mx-5"
                  data-aos="fade-down"
                >
                  Portfolio
                </button>
              </Link>
              <Link to="/resume">
                <button
                  className="button is-outlined is-medium mx-5"
                  data-aos="fade-up"
                >
                  Resume
                </button>
              </Link>
            </div>
						<div className="is-mobile">
              <Link to="/about">
                <button
                  className="button is-outlined is-normal mx-2"
                  data-aos="fade-up"
                >
                  About
                </button>
              </Link>
              <Link to="/portfolio">
                <button
                  className="button is-outlined is-normal mx-2"
                  data-aos="fade-down"
                >
                  Portfolio
                </button>
              </Link>
              <Link to="/resume">
                <button
                  className="button is-outlined is-normal mx-2"
                  data-aos="fade-up"
                >
                  Resume
                </button>
              </Link>
            </div>
          </div>
     
      </section>
  );
}

export default Hero;
