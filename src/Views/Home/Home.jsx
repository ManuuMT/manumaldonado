import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import HeroTitle from "./Components/HeroTitle/HeroTitle.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroTitle />
      <Skills />
      <About />
      <Footer />
    </>
  );
};

export default Home;
