import React from "react";
import "./About.css";


const About = () => {
  document.title = "About";

  return (
    <section className="about-me">
      <div className="section-light " id="about-me">
        <div className="container">
          <div className="column is-12 about-me">
            <h1 className="title is-1 has-text-centered section-title">About Me</h1>
          </div>
          <div className="columns is-multiline">
          <div className="column is-6 left-image " data-aos="fade-right">
              <div className="is-rounded">
                <img
                  src={require("../../assets/images/profile-final.jpg").default}
                  alt={"headshot"}
                />
              </div>
            </div>
            <div
              className="column is-6 has-vertically-aligned-content"
              data-aos="fade-left"
            >
              <p className="is-larger">
                &emsp;&emsp;
                <strong>
                  Hello, thank you for taking the time to look at my portfolio!
                  My name is Dylan Shoemaker and I love solving puzzles. I've
                  always wanted to know how something works, how it can be
                  broken down into individual pieces and how it can be put back
                  together.
                </strong>
              </p>
              <br />
              <p>
                I’m an avid fan of technology and software and my goal in life
                is to learn as much as I can about the technology that fuels how
                we interact with the world around us. I've recently obtained a
                Certificate in Full Stack Web Development from the University of
                Utah and I'm currently looking for any career opportunities with
                a company thats goal is to make a difference or to solve a
                problem.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
