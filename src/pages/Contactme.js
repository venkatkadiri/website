import React from "react";
//import Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  slider,
  sliderContainer,
  titleAnim,
  lineAnim,
} from "../animation";
import styled from "styled-components";

function ContactMe() {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title variants={titleAnim} animate="show" initial="hidden">
        <Hide>
          <motion.h2>Get In Touch</motion.h2>
        </Hide>
        <motion.div variants={lineAnim} className="Line"></motion.div>
        <Social>
          <h3>
            Email:
            <a href="venkatkadiri@hotmail.com">venkatkadiri@hotmail.com</a>
          </h3>
          <h3>
            Github:
            <a href="https://github.com/venkatkadiri">
              github.com/venkatkadiri
            </a>
          </h3>
          <h3>
            LinkedIn:
            <a href="https://www.linkedin.com/in/venkat-kadiri-15799b137/">
              linkedin.com/in/venkat-kadiri
            </a>
          </h3>
        </Social>
      </Title>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
    </ContactStyle>
  );
}
//frame animations

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8ebf;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  overflow: hidden;

  .Line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    z-index: 3;
  }
  h2 {
    color: black;
    font-family: sans-serif;
  }
`;
const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled(motion.div)`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  color: black;
  display: flex;
  align-items: center;

  h3 {
    margin: 2rem;
    color: black;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

export default ContactMe;
