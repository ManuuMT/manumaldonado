import React from "react";
import "./About.css";
import sass from "../../../../assets/img/tech/sass.png";

const About = () => {
    return(
    
    <div className="container about">
        <div className="card d-flex justify-content-center align-items-center">
            <div className="text">
                <h3>SKILLS</h3>
            </div>
        </div>
        <img src={sass} className="skill" alt="sass"></img>
    </div>
    
        
    );
}

export default About;