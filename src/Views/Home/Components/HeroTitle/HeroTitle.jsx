import React from "react";
import profileSource from "../../../../assets/img/profile-rounded.png";
import "./HeroTitle.css";


const HeroTitle = () => {
    return(
        <main className="main" >
            <div className="row main-title">
                <div className="col-lg-3 col-md-12"></div>

                <div className="col-lg-6 col-md-10">
                    <div className="row content">
                        <div className="col-lg-4 col-md-12">
                            <img src={profileSource} className="main-pic"/>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="main-message text-center">
                                <h3>Hello!</h3>
                                <h1>I am Emanuel</h1>
                                <h2>- Full Stack Developer -</h2>
                            </div>
                        </div>
                    </div>
                   
                </div>      
                <div className="col-lg-3 col-md-2"></div>
            </div>
            <img src="https://i.imgur.com/4oHOotx.gif" className="background-img" alt="Loading..." />
            {/*<img src={imageSource} className="background-img"/>*/}
        </main>
    );
}

export default HeroTitle;