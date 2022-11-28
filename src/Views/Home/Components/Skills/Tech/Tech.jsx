import React from "react";
import PropTypes from "prop-types";
import "./Tech.scss";

const Tech = (props) => {
  return (
    <div className="tech">
      <div className="tech-img-container">
        <img src={props.src} className="tech-img" alt={props.title}></img>
      </div>
      <div className="tech-text">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

Tech.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};

export default Tech;
