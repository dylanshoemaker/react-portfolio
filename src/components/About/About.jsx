import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-me">
      <div className="section-light " id="about-me">
        <div className="container">
          <div className="column is-12 about-me white">
            <h1 className="title is-1 has-text-centered section-title">
              About Me
            </h1>
          </div>
          <div className="columns is-multiline">
            <div className="column is-6 right-image " data-aos="fade-right">
              <div className="is-rounded">
                <img
                  src={require("../../assets/images/profile-pic.jpg").default}
                  alt={"headshot"}
                  className="profile"
                />
              </div>
            </div>
            <div
              className="column is-6 has-vertically-aligned-content"
              data-aos="fade-left"
            >
              <p className="is-larger has-text-justified	">
                &emsp;&emsp;
                <strong>
                  Hello, my name is Dylan Shoemaker and I am a Full-stack web
                  developer with a background in Health Insurance Sales
                  (Medicare) and an appetite for continuous learning,
                  collaboration, and solving complex problems.
                </strong>
              </p>
              <br />
              <p className="has-text-justified	">
                I'm an Innovative problem-solver who is passionate about
                learning and growing as a person and as a developer. My core
                strengths are in creativity, teamwork, task management,
                researching efficiently, communication, management and
                debugging. I recently earned a certificate in Full Stack Web
                Development from the University of Utah Coding Boot Camp. I'm
                currently looking for any career opportunities with a company
                thats goal is to make a difference or to solve a problem.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
