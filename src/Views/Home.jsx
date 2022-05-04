import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Home</h1> 
           
            <Link to="/contact">Ir a contacto</Link>
            
        </div>
        
    );
}

export default Home;