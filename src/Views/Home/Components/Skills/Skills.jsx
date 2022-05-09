import React from "react";
import "./Skills.scss";
import Tech from "./Tech.jsx";
import { Sources } from "./Sources.js";

const Skills = () => {
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

      <div className="row">
        <Tech title="HTML5" src={Sources.html5} />
        <Tech title="CSS3" src={Sources.css} />
        <Tech title="Javascript" src={Sources.javascript} />
        <Tech title="React" src={Sources.react} />
        <Tech title="Bootstrap" src={Sources.bootstrap} />
        <Tech title="SASS" src={Sources.sass} />
      </div>

      <div className="row">
        <Tech title="Python" src={Sources.python} />
        <Tech title="Flask" src={Sources.flask} />
        <Tech title="Typescript" src={Sources.typescript} />
        <Tech title="Git" src={Sources.git} />
        <Tech title="SQL" src={Sources.sql} />
        <Tech title="Jest" src={Sources.jest} />
      </div>

      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
          <div className="text d-flex justify-content-center align-items-center ">
            <h3>TOOLS</h3>
          </div>
        </div>
        <div className="col"></div>
      </div>

      <div className="row">
        <Tech title="Adobe Photoshop" src={Sources.adobePS} />
        <Tech title="Adobe XD" src={Sources.adobeXD} />
        <Tech title="Figma" src={Sources.figma} />
        <Tech title="Postman" src={Sources.postman} />
        <Tech title="Mockoon" src={Sources.mockoon} />
        <Tech title="Notion" src={Sources.notion} />
      </div>
    </div>
  );
};

export default Skills;
