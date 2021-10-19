import React, { useEffect } from "react";
import "./LatestWork.css";
import Navbar from "../components/Navbar";

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
          <h1>What We do</h1>
        </div>
        <div className="projects-container">
          <section style={{ background: "red" }}>
            <h1>Beep</h1>
          </section>
          <section>
            <h1>Boop</h1>
          </section>
          <section style={{ background: "red" }}>
            <h1>Boooom</h1>
          </section>
          <section>
            <h1>The End</h1>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LatestWork;
