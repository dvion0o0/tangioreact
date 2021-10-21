import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Video from "../Assets/bg2.mp4";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.8 }}
    >
      <Navbar />
      <video autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="gradient"></div>

      <div className="container-center">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            x: "-100vw",
            transition: {
              ease: "easeOut",
              duration: 0.8,
            },
          }}
          transition={{
            ease: "easeIn",
            duration: 0.8,
            delay: 0.8,
          }}
        >
          We use <span>Communication Design</span> to help you reach
          <span> more people</span> effectively and efficiently
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Home;
