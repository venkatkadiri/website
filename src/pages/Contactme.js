import React from "react";
//import Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  slider,
  sliderContainer,
  titleAnim,
  lineAnim,
  fade,
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
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
          </Hide>
          <motion.div className="Line" variants={lineAnim}></motion.div>
        </Title>
        <Social variants={fade}>
          <motion.form
            name="contactform"
            method="POST"
            action="../contactform"
            initial="hide"
            animate="show"
            variants={fade}
          >
            <motion.input
              type="hidden"
              name="form-name"
              value="contactform"
              variants={fade}
            />
            <motion.label variants={fade}>
              Your Name:{" "}
              <motion.input required type="text" name="name" variants={fade} />
            </motion.label>
            <motion.label variants={fade}>
              Your Email: <motion.input required type="email" name="email" />
            </motion.label>
            <motion.label className="Message-box" variants={fade}>
              <motion.span variants={fade}>Message: </motion.span>
              <motion.textarea
                name="message"
                rows="4"
                cols="20"
                required
                variants={fade}
              ></motion.textarea>
            </motion.label>
            <motion.button type="submit" whileHover={{ scale: 1.1 }}>
              Send
            </motion.button>
          </motion.form>
        </Social>
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
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      color: black;
      margin-bottom: 3rem;
    }
    input {
      height: 2rem;
      border-width: thin;
      border-radius: 1rem;
      padding-bottom: 0rem;
      font-family: sans-serif;
    }
    .Message-box {
      display: flex;
      padding-bottom: 0rem;
      span {
        color: black;
        font-weight: normal;
      }
      textarea {
        margin-left: 0.5rem;
        border-radius: 1rem;
        font-family: sans-serif;
      }
    }
    button {
      height: 3rem;
      padding-bottom: 2rem;
      color: white;
      background: #23d997;
      border-radius: 3rem;
      margin-left: 3rem;
    }
  }
  h3 {
    margin: 2rem;
    color: black;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

export default ContactMe;
