import React from "react";
import home1 from "../img/home1.png";
import { Layout, Description, Image, Hide } from "../Styles";

function About() {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h2>I am</h2>
          </Hide>
          <Hide>
            <h2>
              an <span>Aspiring</span> Web
            </h2>
          </Hide>
          <Hide>
            <h2>Developer.</h2>
          </Hide>
        </div>
        <p>Contact me for any free-lancing work in react Frount End Design. </p>
        <button>Contact</button>
      </Description>

      <Image>
        <img src={home1} alt="guy with a camera"></img>
      </Image>
    </Layout>
  );
}

export default About;
