import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//importing images
import final_2048 from "../img/2048.png";
import music_app_library from "../img/music-app-library.png";
import pig from "../img/pig-total_image.png";
import tetris_final from "../img/tetris-final.png";

function MyProjects() {
  return (
    <Project>
      <Movie>
        <h2>2048</h2>
        <div className="Line"></div>
        <Link>
          <img src={final_2048} alt="2048" />
        </Link>
      </Movie>
      <Movie>
        <h2>Tetris</h2>
        <div className="Line"></div>
        <Link>
          <img src={tetris_final} alt="Tetris" />
        </Link>
      </Movie>
      <Movie>
        <h2>Dice Game</h2>
        <div className="Line"></div>
        <Link>
          <img src={pig} alt="Dice" />
        </Link>
      </Movie>
      <Movie>
        <h2>Wave Music App</h2>
        <div className="Line"></div>
        <Link>
          <img src={music_app_library} alt="Wave Music" />
        </Link>
      </Movie>
    </Project>
  );
}
const Project = styled.div`
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
