import React from "react";
import NavBar from "../NavBar/NavBar.jsx"
import About from "./Components/About/About.jsx";
import HeroTitle from "./Components/HeroTitle/HeroTitle.jsx";

const Home = () => {
    return(
        <>
            <NavBar/>
            <HeroTitle/>
            <About/>
        </>
        
    );
}

export default Home;