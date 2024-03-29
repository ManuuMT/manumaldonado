import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import HeroTitle from "./Components/HeroTitle/HeroTitle.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./Home.scss";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
const title = "<ManuDev />";

const Home = () => {
  // * States
  const [loading, setLoading] = useState(true);

  // * Methods
  const Intro = () => (
    <div className="intro">
      <div className="intro-left-window" />
      <h1 className="intro-logo">{title}</h1>
      <div className="intro-skip" onClick={() => setLoading(false)}>
        Skip intro
      </div>
      <div className="intro-right-window" />
    </div>
  );

  // * Life Cycle
  useEffect(() => {
    document.addEventListener("animationend", (event) => {
      if (event.animationName === "closeToRight") setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        Intro()
      ) : (
        <>
          <NavBar />
          <HeroTitle />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
