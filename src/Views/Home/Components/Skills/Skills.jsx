import "./Skills.scss";
import Tech from "./Tech/Tech.jsx";
import { SkillSet, Tools } from "./Sources.js";
import React, { useEffect } from "react";

const Skills = () => {
  // * Life Cycle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 1,
        rootMargin: "-50px 0px",
      }
    );

    const techs = document.querySelectorAll(".tech");
    const titles = document.querySelectorAll(".skills-title");
    techs.forEach((tech) => observer.observe(tech));
    titles.forEach((title) => observer.observe(title));
  }, []);

  return (
    <div className="skills" id="skills">
      <div className="skills-title">
        <h2>My Skill Set</h2>
      </div>
      <div className="skills-logos-container">
        <div className="skills-logos">
          {SkillSet.map((skill) => (
            <Tech key={skill.title} title={skill.title} src={skill.src} />
          ))}
        </div>
      </div>
      <div className="skills-title">
        <h2>My Tool Kit</h2>
      </div>
      <div className="skills-logos-container">
        <div className="skills-tools-logos">
          {Tools.map((tools) => (
            <Tech key={tools.title} title={tools.title} src={tools.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
