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
        staggerChildren: 0.5,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      ease: "easeIn",
      when: "afterChildren",
      duration: 1,
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const Main = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.8,
        staggerChildren: 0.35,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeIn",
        when: "afterChildren",
        duration: 0.5,
        staggerChildren: 0.35,
        staggerDirection: -1,
      },
    },
  };

  const Child = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.nav>
      <div className="nav-center">
        <motion.a href="/">
          {" "}
          <img
            src={Logo}
            className="logo"
            alt="logo"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeIn",
              duration: 1,
              type: "spring",
            }}
            exit={{
              opacity: 0,
              y: -100,
              transition: {
                ease: "easeOut",
                delay: 0.5,
                duration: 0.8,
              },
            }}
          />
        </motion.a>
        <motion.ul
          className="nav-links"
          variants={Main}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.li variants={Child}>
            <NavLink
              exact
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/"
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li variants={Child}>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/latestworks"
            >
              Latest Works
            </NavLink>
          </motion.li>
          <motion.li variants={Child}>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/whatwedo"
            >
              What we do
            </NavLink>
          </motion.li>
          <motion.li variants={Child}>
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#ffa200" }}
              to="/about"
            >
              About
            </NavLink>
          </motion.li>
          <motion.li variants={Child}>
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
