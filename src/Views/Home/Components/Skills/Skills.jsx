import React from "react";
import "./Skills.scss";
import Tech from "./Tech.jsx";
import { Sources } from "./Sources.js";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
          <div className="text d-flex justify-content-center align-items-center ">
            <h3>SKILLS</h3>
          </div>
        </div>
        <div className="col"></div>
      </div>

      <div className="row menu">
        <Tech title="HTML5" src={Sources.html5} />
        <Tech title="CSS3" src={Sources.css} />
        <Tech title="Javascript" src={Sources.javascript} />
      </div>
      <div className="row menu">
        <Tech title="Bootstrap" src={Sources.bootstrap} />
        <Tech title="SASS" src={Sources.sass} />
        <Tech title="Jest" src={Sources.jest} />
      </div>
      <div className="row menu">
        <Tech title="React" src={Sources.react} />
        <Tech title="Python" src={Sources.python} />
        <Tech title="Flask" src={Sources.flask} />
      </div>
      <div className="row menu">
        <Tech title="Typescript" src={Sources.typescript} />
        <Tech title="Git" src={Sources.git} />
        <Tech title="SQL" src={Sources.sql} />
      </div>
    </div>
  );
};

export default About;
