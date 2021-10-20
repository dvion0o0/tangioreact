import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Video from "../Assets/bg2.mp4";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: "-100vh", scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: "-100vh", scale: 0.3 }}
      transition={{
        ease: "easeOut",
        duration: 0.5,
        delay: 0.3,
        staggerChildren: 0.5,
      }}
    >
      <Navbar />
      <video autoPlay muted loop id="myVideo" style={{ width: "100%" }}>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="gradient"></div>

      <div className="container-center">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            ease: "easeOut",
            duration: 0.3,
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
