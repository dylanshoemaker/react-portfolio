import React from "react";
import projectData from "../../data/projectData";

const Project = () => {
  return (
    <>
      {projectData.map((project, i) => (
        <div className="column is-4">
          <div className="acontent">
            <div className="acontent-overlay"></div>
            <img
              className="acontent-image is-rounded"
              key={i}
              alt={project.name}
              src={project.screenShot}
            />
            <div className="acontent-details fadeIn-bottom ">
              <h3>{project.name}</h3>
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href={project.gitHubLink}
              >
                View Project
              </a>{" "}
              <br />
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href={project.liveLink}
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
