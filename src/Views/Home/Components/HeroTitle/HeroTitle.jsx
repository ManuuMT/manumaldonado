import React from "react";
import profileSource from "../../../../assets/img/profile-rounded.png";
import "./HeroTitle.scss";

const HeroTitle = () => {
  return (
    <div className="container-fluid main" id="hero">
      <div className="row main-row">
        <div className="col-md-2 col-lg-3"></div>

        <div className="col-md-8 col-lg-6">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-12 text-center">
              <img
                src={profileSource}
                alt="manu-maldonado"
                className="main-pic"
              />
            </div>
            <div className="col-md-8 col-sm-12 py-5">
              <div className="main-message text-center">
                <h3>Hello!</h3>
                <h1 className="name">
                  <strong>I am Emanuel</strong>
                </h1>
                <h2 className="title">- Full Stack Developer -</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-lg-3"></div>
      </div>
    </div>
  );
};

export default HeroTitle;
