import React from "react";
import PropTypes from "prop-types";
import "./Tech.scss";

const Tech = (props) => {
  return (
    <div className="menu-content">
      <span className="span-icon">
        <img src={props.src} className="skill" alt={props.title}></img>
      </span>
      <span className="span-text">
        <h3>{props.title}</h3>
      </span>
    </div>
  );
};

Tech.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};

export default Tech;
