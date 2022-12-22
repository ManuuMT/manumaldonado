import React, { useEffect } from "react";
import "./Contact.scss";
import { Social } from "./Social";

const Contact = () => {
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
        rootMargin: "0px",
      }
    );
    observer.observe(document.querySelector(".contact-title"));
    observer.observe(document.querySelector(".contact-divider"));
    const socialIcons = document.querySelectorAll(".social-icon");
    socialIcons.forEach((icon) => observer.observe(icon));
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="contact-divider" />
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-social">
        <a href={Social.linkedinLink} rel="noreferrer" target="_blank">
          <img
            className="social-icon social-linkedin"
            src={Social.linkedinSrc}
            alt="linkedin"
          />
        </a>
        <a href={Social.githubLink} rel="noreferrer" target="_blank">
          <img
            className="social-icon social-github"
            src={Social.githubSrc}
            alt="github"
          />
        </a>
        <a href={Social.mailLink} rel="noreferrer" target="_blank">
          <img
            className="social-icon social-mail"
            src={Social.mailSrc}
            alt="mail"
          />
        </a>
      </div>
      <div className="contact-divider-bot" />
    </div>
  );
};

export default Contact;
