import React from "react";
import "./About.scss";
import { Social } from "./Social.js";

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
          <a href={Social.linkedinLink} rel="noreferrer" target="_blank">
            <img
              className="social-icon"
              src={Social.linkedinSrc}
              alt="linkedin"
            />
          </a>
          <a href={Social.githubLink} rel="noreferrer" target="_blank">
            <img className="social-icon" src={Social.githubSrc} alt="github" />
          </a>
          <a href={Social.mailLink} rel="noreferrer" target="_blank">
            <img className="social-icon" src={Social.mailSrc} alt="mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
