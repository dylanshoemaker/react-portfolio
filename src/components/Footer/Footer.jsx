import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer pt-6 pb-6">
      <div className="content has-text-centered pt-2">
        <div className="is-divider"></div>
        <div className="columns about-links">
          <div className="column">
            <p className="heading is-size-5">
              <strong>Give me a ring</strong>
            </p>
            <p className="subheading is-size-5">702-416-6673</p>
          </div>
          <div className="column">
            <p className="heading is-size-5">
              <strong>Email Me</strong>
            </p>
            <p className="subheading is-size-5">
              <a href="mailto:PleaseHireMe@DylanShoemaker.com">
                PleaseHireMe@DylanShoemaker.com
              </a>
            </p>
          </div>
          <div className="column">
            <p className="heading is-size-5">
              <strong>Download my resume</strong>
            </p>
            <p className="subheading is-size-5">
              {" "}
              <Link target="_blank" to="/resume/resume_dylan_shoemaker.pdf">
                Download
              </Link>
            </p>
          </div>
        </div>

        <div className="column">
          <a
            href="https://github.com/dylanshoemaker"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="font-awesome"
            ></FontAwesomeIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/dylan-shoemaker/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="font-awesome"
            ></FontAwesomeIcon>
          </a>

          <a
            href="https://www.instagram.com/they_call_me_shoe/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="font-awesome"
            ></FontAwesomeIcon>
          </a>

          <p className="is-size-6 mt-5">
            &copy; Copyright 2021 All Content, Dylan Shoemaker | All rights
            reserved
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
