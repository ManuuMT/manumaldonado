import React, { useEffect } from "react";
import "./About.scss";
import profile from "../../../../assets/img/me-attlos.png";

const About = () => {
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
        threshold: 0.5,
        rootMargin: "0px",
      }
    );
    observer.observe(document.querySelector(".about-description"));
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-profile">
        <div className="about-profile-container">
          <img src={profile} className="about-profile-img" alt="Manu" />
        </div>
      </div>
      <div className="about-description">
        <h2 className="about-title">About Me</h2>
        <div className="about-description-text">
          <p>My name is Emanuel Maldonado Tuero,</p>
          <p>
            but everyone calls me<strong> Manu</strong>.
          </p>
          <br />
          <p>I'm 27 years old.</p>
          <p>I consider myself a web design enthusiast</p>
          <p>and a philosophy lover 🤯</p>
          <br />
          <p>I've spent over 10 years working in customer service,</p>
          <p>but in 2021 I decided to quit my job and change my life,</p>
          <p>making programming my full time job 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default About;
