import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";
import curriculum from "../../assets/pdf/Resume-Emanuel-Maldonado-Tuero.pdf";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const title = "<ManuDev />";

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-content">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            <h2 className="nav-logo">{title}</h2>
          </Link>
          <button
            className={isOpen ? "nav-toggle active" : "nav-toggle"}
            onClick={() =>
              isOpen === null ? setIsOpen(true) : setIsOpen(!isOpen)
            }
          >
            <span className="nav-top-span" />
            <span className="nav-middle-span" />
            <span className="nav-bottom-span" />
          </button>
        </div>
      </nav>
      <div className={isOpen ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-ul">
          <li className="nav-menu-item">
            <Link to="hero" spy={true} smooth={true} duration={500}>
              <div className="nav-link">Hello!</div>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <div className="nav-link">Skills</div>
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="about" spy={true} smooth={true} duration={500}>
              <div className="nav-link">About Me</div>
            </Link>
          </li>

          <li className="nav-menu-item">
            <a href={curriculum} target="_blank" rel="noreferrer">
              <button className="nav-link nav-button text-center">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
