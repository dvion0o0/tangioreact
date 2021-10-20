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

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.8 }}
    >
      <Navbar />
      <main>
        <div className="heading">
          <h1>Latest Work</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            similique unde excepturi odit minus perferendis sint incidunt
            provident, quos vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            repellat ad ratione officiis dolore nostrum itaque sapiente, minus
            porro necessitatibus.
          </p>
        </div>
        <div className="projects-container">
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
        </div>
      </main>
    </motion.div>
  );
};

export default LatestWork;