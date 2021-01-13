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
import { pageAnimation } from "../animation";

function MyProjects() {
  return (
    <Project
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Movie>
        <h2>2048</h2>
        <div className="Line"></div>
        <Link to="/projects/2048">
          <img src={final_2048} alt="2048" />
        </Link>
      </Movie>
      <Movie>
        <h2>Tetris</h2>
        <div className="Line"></div>
        <Link to="/projects/Tetris">
          <img src={tetris_final} alt="Tetris" />
        </Link>
      </Movie>
      <Movie>
        <h2>Dice Game</h2>
        <div className="Line"></div>
        <Link to="/projects/Dice-game">
          <img src={pig} alt="Dice" />
        </Link>
      </Movie>
      <Movie>
        <h2>Wave Music App</h2>
        <div className="Line"></div>
        <Link to="/projects/Music-Player">
          <img src={music_app_library} alt="Wave Music" />
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
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default MyProjects;
