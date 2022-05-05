import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [state, setState] = useState("off");
    const title = "< Manu />";

    const HandleClick = () => {
        state=="off" ? setState("") : setState("off");
      };

    return(
        <header className="header">
            <nav className="nav">
                
                <Link to="/">
                    <div className="logo">{title}</div>
                </Link>

                <button className="nav-toggle" onClick={() => HandleClick()}>
                    <i className="fas fa-bars"></i>
                </button>

                <div className={state}>
                    <ul className="nav-menu">
                        
                        <li className="nav-menu-item">  
                                <Link to="/">
                                    <div className="navbar-link">Home</div>
                                </Link>
                        </li>

                        <li className="nav-menu-item">
                                <Link to="/about">
                                    <div className="navbar-link">About</div>
                                </Link>
                        </li>

                        <li className="nav-menu-item">
                                <Link to="/contact">
                                    <div className="navbar-link">Contact</div>
                                </Link>
                        </li>

                        <li className="nav-menu-item">
                                <Link to="/idontknow">
                                    <button className="navbar-link nav-button">Enviar</button>
                                </Link>
                        </li>
                    </ul>
                </div>
            </nav> 
        </header>
    );
}

export default NavBar;