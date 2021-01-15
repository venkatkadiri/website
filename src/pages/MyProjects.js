import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//importing images
import final_2048 from "../img/2048.png";
import music_app_library from "../img/music-app-library.png";
import pig from "../img/pig-total_image.png";
import tetris_final from "../img/tetris-final.png";

//importing animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnim,
  fade,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

// importing scroll to top

import ScrollTop from "../components/scrollTop";

function MyProjects() {
  return (
    <Project
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>2048</motion.h2>
        <motion.div variants={lineAnim} className="Line"></motion.div>
        <Link to="/projects/2048">
          <Hide>
            <motion.img variants={photoAnim} src={final_2048} alt="2048" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Tetris</motion.h2>
        <motion.div variants={lineAnim} className="Line"></motion.div>
        <Link to="/projects/Tetris">
          <Hide>
            <motion.img variants={photoAnim} src={tetris_final} alt="Tetris" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Dice Game</motion.h2>
        <motion.div variants={lineAnim} className="Line"></motion.div>
        <Link to="/projects/Dice-game">
          <Hide>
            <motion.img variants={photoAnim} src={pig} alt="Dice" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Wave Music App</motion.h2>
        <motion.div variants={lineAnim} className="Line"></motion.div>
        <Link to="/projects/Music-Player">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={music_app_library}
              alt="Wave Music"
            />
          </Hide>
        </Link>
      </Movie>
    </Project>
  );
}
const Project = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .Line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  h2 {
    color: black;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

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

export default MyProjects;
