import React from "react";
import Logo from "../Assets/tangio.png";
import { NavLink } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Navbar.css";
const Navbar = () => {
  const container = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 1,
      transition: {
        staggerChildren: 0.35,
        // delay: 0.5,
        duration: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <motion.nav variants={container}>
      <div className="nav-center">
        <motion.img
          src={Logo}
          className="logo"
          alt="logo"
          variants={container}
          initial="hidden"
          animate="show"
        />
        <motion.ul
          className="nav-links"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={item}>
            <NavLink
              exact
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/"
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/latestworks"
            >
              Latest Works
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/whatwedo"
            >
              What we do
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/about"
            >
              About
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/contact"
            >
              Contact
            </NavLink>
          </motion.li>
        </motion.ul>
        <AiOutlineAlignRight className="toggle" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
