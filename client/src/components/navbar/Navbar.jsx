import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Javier Lopez</h1>
            <h2>Full-Stack Software Engineer</h2>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;