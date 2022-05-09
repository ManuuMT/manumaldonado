import React from "react";
import PropTypes from "prop-types";

const Tech = (props) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center align-items-center my-5">
      <div className="menu-content">
        <span className="span-icon">
          <img src={props.src} className="skill" alt={props.title}></img>
        </span>
        <span className="span-text">
          <h3>{props.title}</h3>
        </span>
      </div>
    </div>
  );
};

Tech.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};

export default Tech;
