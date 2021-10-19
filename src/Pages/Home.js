import React from "react";
import "./Home.css";
import Video from "../Assets/bg2.mp4";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <video autoPlay muted loop id="myVideo" style={{ width: "100%" }}>
        <source src={Video} type="video/mp4" />
      </video>
      <div class="gradient"></div>

      <div className="container-center">
        <h1 className="hero-title">
          We use <span>Communication Design</span> to help you reach
          <span>more people</span> effectively and efficiently
        </h1>
      </div>
    </div>
  );
};

export default Home;
