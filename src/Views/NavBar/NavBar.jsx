import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";
import curriculum from "../../assets/pdf/CV-Emanuel-Maldonado.pdf";

const NavBar = () => {
  const [state, setState] = useState("off");
  const title = "< Manu />";

  const HandleClick = () => {
    state === "off" ? setState("") : setState("off");
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="hero">
          <h3 className="logo">{title}</h3>
        </Link>
        <button className="nav-toggle" onClick={() => HandleClick()}>
          <i className={state === "off" ? "fas fa-bars" : "fa-solid fa-x"}></i>
        </button>
        <div className={state}>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="hero">
                <div className="navbar-link">Hello!</div>
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="skills" offset={-100}>
                <div className="navbar-link">Skills</div>
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="about">
                <div className="navbar-link">About Me</div>
              </Link>
            </li>

            <li className="nav-menu-item">
              <a href={curriculum} target="_blank" rel="noreferrer">
                <button className="navbar-link nav-button">Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
