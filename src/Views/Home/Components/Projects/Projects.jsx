import React from "react";
import "./Projects.scss";
import guardian from "../../../../assets/img/projects/project-guardian.png";
import weather from "../../../../assets/img/projects/project-weather-2.png";
import weatherPreview from "../../../../assets/img/projects/project-weather-preview.png";

const Projects = () => {
  // * Methods
  const Redirect = (location) => {
    if (location === "weatherLive") {
      const url = "https://world-weather-now.netlify.app/";
      window.open(url, "_blank");
    }
    if (location === "weatherGit") {
      const url = "https://github.com/ManuuMT/weather-now";
      window.open(url, "_blank");
    }
  };

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-card-container">
        <div className="projects-card">
          <img src={guardian} className="projects-card-img" alt="Guardian" />
        </div>
        <div className="projects-card">
          <img src={weather} className="projects-card-img" alt="Weather" />
          <img
            src={weatherPreview}
            className="projects-card-img-prev"
            alt="Weather"
          />
          <button
            className="projects-button-live"
            onClick={() => Redirect("weatherLive")}
          >
            View Live
          </button>
          <button
            className="projects-button-git"
            onClick={() => Redirect("weatherGit")}
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
