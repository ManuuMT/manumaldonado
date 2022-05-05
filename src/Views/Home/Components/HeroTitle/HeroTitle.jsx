import React from "react";
import imageSource from "../../../../assets/img/background.jpg";
import "./HeroTitle.css";
import profileSource from "../../../../assets/img/profile-rounded.png";

const HeroTitle = () => {
    return(
        <main className="main" >
            <div className="row main-title">
                <div className="col-3">
                
                </div>

                <div className="col-3">
                    <img src={profileSource} className="main-pic"/>
                </div>
                <div className="col-4">
                    <div className="main-message text-center">
                            <h3>Hello!</h3>
                            <h1>I'm Manu Maldonado</h1>
                            <h2>- Full Stack Developer -</h2>
                    </div>
                </div>
                <div className="col-2">
                
                </div>
            </div>
            <img src={imageSource} className="background-img"/>
        </main>
    );
}

export default HeroTitle;