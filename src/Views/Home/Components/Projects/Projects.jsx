import React from "react";
import "./Projects.scss";
import { projectUrl, projectImages } from "./ProjectSources";

const Projects = () => {
  // * Methods
  const Redirect = (location) => {
    const url = projectUrl[location];
    window.open(url, "_blank");
  };

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-card-container">
        <div className="projects-card">
          <img
            src={projectImages.guardianCover}
            className="projects-card-cover"
            alt="Guardian"
          />
          <img
            src={projectImages.guardian}
            className="projects-card-img"
            onClick={() => Redirect("guardianLive")}
            alt="Guardian"
          />
          <img
            src={projectImages.github}
            alt="github"
            onClick={() => Redirect("guardianGit")}
            className="projects-button-git git-logo-1"
          />
        </div>
        <div className="projects-card">
          <img
            src={projectImages.weatherCover}
            className="projects-card-cover"
            alt="Weather"
          />
          <img
            src={projectImages.weather}
            className="projects-card-img"
            onClick={() => Redirect("weatherLive")}
            alt="Weather"
          />
          <img
            src={projectImages.github}
            alt="github"
            className="projects-button-git git-logo-2"
            onClick={() => Redirect("weatherGit")}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
