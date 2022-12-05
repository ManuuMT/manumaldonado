import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import HeroTitle from "./Components/HeroTitle/HeroTitle.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./Home.scss";
const title = "<ManuDev />";

const Home = () => {
  // * States
  const [loading, setLoading] = useState(true);

  // * Methods
  const Intro = () => (
    <div className="intro">
      <div className="intro-left-window" />
      <h1 className="intro-logo">{title}</h1>
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
          <Skills />
          <About />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
