import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import HeroTitle from "./Components/HeroTitle/HeroTitle.jsx";
import About from "./Components/About/About.jsx";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroTitle />
      <Skills />
      <About />
    </>
  );
};

export default Home;
