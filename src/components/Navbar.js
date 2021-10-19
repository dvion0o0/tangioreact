import React from "react";
import Logo from "../Assets/tangio.png";
import { NavLink } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <img src={Logo} className="logo" alt="logo" />
        <ul className="nav-links">
          <li>
            <NavLink
              exact
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/whatwedo"
            >
              What we do
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <AiOutlineAlignRight className="toggle" />
      </div>
    </nav>
  );
};

export default Navbar;
