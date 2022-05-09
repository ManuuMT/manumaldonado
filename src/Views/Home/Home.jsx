import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import HeroTitle from "./Components/HeroTitle/HeroTitle.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroTitle />
      <Skills />
      <About />
      <Footer />
    </>
  );
};

export default Home;
