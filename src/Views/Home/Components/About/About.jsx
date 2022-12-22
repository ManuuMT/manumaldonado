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
          <p>
            My name is Emanuel Maldonado Tuero, <br /> but everyone calls me
            <strong> Manu</strong>. <br />
            <br />I am 27 years old. I was born in
            <strong>
              <span className="about-blue"> Arg</span>ent
              <span className="about-blue">ina</span>
            </strong>
            <br />
            and I've been living in
            <strong>
              <span className="about-red"> S</span>
              <span className="about-yellow">pai</span>
              <span className="about-red">n </span>
            </strong>
            since 2018. <br />
            <br />I spent over 10 years working in customer service, <br />
            but in 2021 I decided to quit my job and change my life, <br />
            making programming my full time job
            <span className="about-red"> ❤ </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
