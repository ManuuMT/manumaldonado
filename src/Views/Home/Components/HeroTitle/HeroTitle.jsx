import React from "react";
import profileSource from "../../../../assets/img/profile-rounded.png";
import "./HeroTitle.css";
//  d-flex justify-content-center align-items-center

const HeroTitle = () => {
    return(<>
        <div className="container-fluid main" >
            <div className="row main-row">
                <div className="col-md-2 col-lg-3"></div>

                <div className="col-md-8 col-lg-6">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src={profileSource} alt="manu-maldonado" className="main-pic"/>
                        </div>
                        <div className="col-md-6 col-sm-12 py-5">
                            <div className="main-message text-center">
                                <h3>Hello!</h3>
                                <h1>I am Emanuel</h1>
                                <h2>- Full Stack Developer -</h2>
                            </div>
                        </div>
                    </div> 
                </div>     

                <div className="col-md-2 col-lg-3"></div>
            </div>
            {/*<img src="https://i.imgur.com/4oHOotx.gif" className="background-img" alt="Loading..." />*/}
            {/*<img src={imageSource} className="background-img"/>*/}
        </div>
        <div className="cuadrado"></div>
        </>
    );
}

export default HeroTitle;