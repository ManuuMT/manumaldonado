import React from "react";
import "./Skills.scss";
import Tech from "./Tech/Tech.jsx";
import { SkillSet, Tools } from "./Sources.js";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-title">
        <h2>SKILLS</h2>
      </div>
      <div className="skills-logos-container">
        <div className="skills-logos">
          {SkillSet.map((skill) => (
            <Tech key={skill.title} title={skill.title} src={skill.src} />
          ))}
        </div>
      </div>
      <div className="skills-title">
        <h2>TOOLS</h2>
      </div>
      <div className="skills-logos-container">
        <div className="skills-logos">
          {Tools.map((tools) => (
            <Tech key={tools.title} title={tools.title} src={tools.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
