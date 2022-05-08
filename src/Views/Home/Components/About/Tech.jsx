import React from "react";
import PropTypes from "prop-types";

const Tech = prop => {
    return(
            <div className="menu-content d-flex justify-content-center align-items-center">
                <span className="span-icon">
                    <img src={prop.src} className="skill" alt={prop.title}></img>
                </span>
                <span className="span-text"><h3>{prop.title}</h3></span>
            </div>
    );
}

Tech.propTypes = {
	title: PropTypes.string,
    src: PropTypes.string,
};

export default Tech;