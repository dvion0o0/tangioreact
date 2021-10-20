import React from "react";
import Logo from "../Assets/tangio.png";
import { NavLink } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Navbar.css";
const Navbar = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        staggerChildren: 0.35,
        delay: 1,
        duration: 0.5,
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
    <motion.nav>
      <div className="nav-center" variants={container}>
        <motion.img
          src={Logo}
          className="logo"
          alt="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", delay: 1 }}
        />
        <motion.ul
          className="nav-links"
          // variants={container}
          // initial="hidden"
          // animate="show"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", staggerChildren: 0.5, duration: 1 }}
        >
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
          >
            <NavLink
              exact
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/"
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
          >
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/latestworks"
            >
              Latest Works
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
          >
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/whatwedo"
            >
              What we do
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
          >
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/about"
            >
              About
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
          >
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
