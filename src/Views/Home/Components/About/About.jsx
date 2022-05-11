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
    <div
      className="container-fluid about-body d-flex align-items-center justify-content-center"
      id="about"
    >
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="row text-center">
            <h3 className="name">About Me</h3>
          </div>
          <div className="row mt-2">
            <p className="body-content text-center">
              My name is Emanuel Maldonado Tuero, but everyone calls me
              <b> Manu</b>.
              <br /> I am 26 years old. I was born in <b>Argentina</b> and I've
              been living in <b>Spain</b> since 2018. <br />I spent the last 11
              years working in customer service, but in 2021 I decided to quit
              my job and change my life, making programming my full time job.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row contact-row text-center">
            <h3 className="name">Contact Me</h3>
          </div>
          <div className="row mt-2">
            <div className="social-media">
              <a href={linkedin} rel="noreferrer" target="_blank">
                <img
                  className="social-icon"
                  src={linkedinIcon}
                  alt="linkedin"
                />
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
      </div>
    </div>
  );
};

export default About;
