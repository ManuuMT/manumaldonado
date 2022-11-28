import React from "react";
import "./About.scss";
import linkedinIcon from "../../../../assets/img/social/linkedin.png";
import githubIcon from "../../../../assets/img/social/github.png";
import mailIcon from "../../../../assets/img/social/mail.png";

const linkedin = "https://www.linkedin.com/in/emanuel-mt";
const github = "https://www.github.com/ManuuMT";
const mail = "mailto:emtuero@hotmail.com";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-description">
        <h2 className="about-title">About Me</h2>
        <div className="about-description-text">
          <p>
            My name is Emanuel Maldonado Tuero, but everyone calls me
            <strong> Manu</strong>. I am 27 years old. I was born in
            <strong> Argentina</strong> and I've been living in
            <strong> Spain</strong> since 2018. I spent the last 11 years
            working in customer service, but in 2021 I decided to quit my job
            and change my life, making programming my full time job.
          </p>
        </div>
      </div>
      <div className="about-contact">
        <h2 className="about-title">Contact Me</h2>
        <div className="social-media">
          <a href={linkedin} rel="noreferrer" target="_blank">
            <img className="social-icon" src={linkedinIcon} alt="linkedin" />
          </a>
          <a href={github} rel="noreferrer" target="_blank">
            <img className="social-icon" src={githubIcon} alt="github" />
          </a>
          <a href={mail} rel="noreferrer" target="_blank">
            <img className="social-icon" src={mailIcon} alt="mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
