import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

function About() {
  return (
    <AboutMe>
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
    </AboutMe>
  );
}

const AboutMe = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default About;
