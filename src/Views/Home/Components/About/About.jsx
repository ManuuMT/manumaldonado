import React, { useEffect } from "react";
import "./About.scss";
import { Social } from "./Social.js";

const About = () => {
  // * Life Cycle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.toggle("show", entry.isIntersecting);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "0px 0px",
      }
    );
    observer.observe(document.querySelector(".about-description"));
    observer.observe(document.querySelector(".about-contact"));
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-description">
        <h2 className="about-title">About Me</h2>
        <div className="about-description-text">
          <p>
            My name is Emanuel Maldonado Tuero, but everyone calls me
            <strong> Manu</strong>. I am 27 years old. I was born in
            <strong> Argentina </strong>and I've been living in
            <strong> Spain </strong>since 2018. I spent over 10 years working in
            customer service, but in 2021 I decided to quit my job and change my
            life, making programming my full time job.
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
