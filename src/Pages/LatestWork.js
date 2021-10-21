import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./LatestWork.css";
import Navbar from "../components/Navbar";
import Image1 from "../Assets/Group 31.png";
import Image2 from "../Assets/2.jpg";
import Image3 from "../Assets/3.jpg";
const LatestWork = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".projects-container");

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }, []);

  const Main = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      background: "transparent",
      transition: {
        ease: "easeIn",
        delay: 0.4,
        duration: 0.8,
        staggerChildren: 0.5,
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
    <motion.div
      className="container"
      variants={Main}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navbar />
      <main>
        <motion.div className="heading">
          <motion.h1 variants={Child}>Latest Work</motion.h1>
          <motion.p variants={Child}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            similique unde excepturi odit minus perferendis sint incidunt
            provident, quos vero.
          </motion.p>
          <motion.p variants={Child}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            repellat ad ratione officiis dolore nostrum itaque sapiente, minus
            porro necessitatibus.
          </motion.p>
        </motion.div>
        <motion.div className="projects-container" variants={Child}>
          <section>
            <img src={Image1} alt="" />
            <h3>
              <Link to="/latestworks/project1">Print</Link>
            </h3>
          </section>
          <section>
            <img src={Image2} alt="" />
            <h3>
              <Link to="/latestworks/project2">UI Design</Link>
            </h3>
          </section>
          <section>
            <img src={Image3} alt="" />
            <h3>
              {" "}
              <Link to="/latestworks/project3">Social Media</Link>
            </h3>
          </section>
          <section>
            <img src={Image1} alt="" />
            <h3>
              <Link to="/latestworks/project4">Films</Link>
            </h3>
          </section>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default LatestWork;
