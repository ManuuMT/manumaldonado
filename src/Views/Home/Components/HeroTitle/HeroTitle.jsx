import React from "react";
import profileSource from "../../../../assets/img/profile-rounded.png";
import "./HeroTitle.scss";

const HeroTitle = () => {
  return (
    <div className="main" id="hero">
      <div className="main-content">
        <div className="main-profile">
          <img
            src={profileSource}
            alt="manu-maldonado"
            className="main-profile-pic"
          />
        </div>
        <div className="main-message-container">
          <div className="main-message">
            <h2>Hello!</h2>
            <h1 className="main-name">I am Emanuel</h1>
            <h2 className="main-message-shadow">- Full Stack Developer -</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
