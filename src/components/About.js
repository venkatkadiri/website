import React from "react";
import home1 from "../img/home1.png";

function About() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work</h2>
          </div>
          <div className="hide">
            <h2>
              make your <span>Dreams</span> Come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
          <button>Contact</button>
          <div className="image">
            <img src={home1} alt="guy with a camera"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
