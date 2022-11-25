import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import curriculum from "../../assets/pdf/Emanuel-Maldonado-Resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const title = "< Manu />";

  return (
    <header className="header">
      <nav className="nav">
        <Link to="hero">
          <h3 className="logo">{title}</h3>
        </Link>
        <button
          className={isOpen ? "nav-toggle active" : "nav-toggle"}
          onClick={() =>
            isOpen === null ? setIsOpen(true) : setIsOpen(!isOpen)
          }
        >
          <span className="top-span" />
          <span className="middle-span" />
          <span className="bottom-span" />
        </button>
      </nav>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
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
            <button className="navbar-link nav-button text-center">
              Resume
            </button>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
