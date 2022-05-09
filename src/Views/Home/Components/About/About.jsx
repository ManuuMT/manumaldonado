import React from "react";
import "./About.scss";
import linkedin from "../../../../assets/img/social/linkedin.png";
import github from "../../../../assets/img/social/github.png";
import mail from "../../../../assets/img/social/mail.png";

const About = () => {
  return (
    <div className="container-fluid about-body pt-5" id="about">
      <div className="row text-center">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="row">
            <h3 className="name">About Me</h3>
          </div>
          <div className="row mt-2">
            <p className="body-content">
              My name is Emanuel Maldonado Tuero, but everyone calls me
              <b> Manu</b>.
              <br /> I am 26 years old. I was born in <b>Argentina</b> and I've
              been living in <b>Spain</b> since 2018. <br />I spent the last 11
              years working in customer service, but in 2021 I decided to quit
              my job and change my life, making programming my full time job.
            </p>
          </div>
          <div className="row mt-2">
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/emanuel-mt"
                rel="noreferrer"
                target="_blank"
              >
                <img className="social-icon" src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://www.github.com/ManuuMT"
                rel="noreferrer"
                target="_blank"
              >
                <img className="social-icon" src={github} alt="github" />
              </a>
              <a
                href="mailto:emtuero@hotmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <img className="social-icon" src={mail} alt="mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
};

export default About;
