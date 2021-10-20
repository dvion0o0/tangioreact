import React, { useEffect } from "react";
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
    <div className="container">
      <Navbar />
      <main>
        <div className="heading">
          <h1>What We Do</h1>
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
            <h3>Print</h3>
          </section>
          <section>
            <img src={Image2} alt="" />
            <h3>UI Design</h3>
          </section>
          <section>
            <img src={Image3} alt="" />
            <h3>Social Media</h3>
          </section>
          <section>
            <img src={Image1} alt="" />
            <h3>Films</h3>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LatestWork;
