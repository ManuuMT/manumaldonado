import React from "react";
import "./About.scss";
import Tech from "./Tech.jsx";
import { Sources } from "./Sources.js";

const About = () => {
    return(
    
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-4">
                <div className="text d-flex justify-content-center align-items-center">
                    <h3>ABOUT ME</h3>
                </div>
            </div>

            <div className="col-8">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <div className="text d-flex justify-content-center align-items-center ">
                                <h3>SKILLS</h3>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    
            
                    <div className="menu"> 
                        <div className="row">
                                    <Tech title="HTML5" src={Sources.html5}/>   
                                    <Tech title="CSS3" src={Sources.css}/>
                                    <Tech title="Javascript" src={Sources.javascript}/>
                                    <Tech title="HTML5" src={Sources.html5}/>   
                                    <Tech title="CSS3" src={Sources.css}/>
                                    <Tech title="Javascript" src={Sources.javascript}/>
                        </div> 
                        
                    </div>     
                
            </div>
        </div>        
    </div>
    
        
    );
}

export default About;