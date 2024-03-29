import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";
import ErrorPage from "./ErrorPage";

//importing animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function MovieDetalis() {
  const history = useHistory();
  const url = history.location.pathname;
  const [Movies, setMovies] = useState(MovieState);
  const [Movie, setMovie] = useState(null);
  //UseEffect
  useEffect(() => {
    const currentMovie = Movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    console.log(currentMovie);
  }, [Movies, url]);
  return (
    <>
      {Movie === null ? (
        <ErrorPage />
      ) : (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{Movie.title}</h2>
            <img src={Movie.mainImg} alt="img" />
          </Headline>
          <AboutSection>
            <h3>Type</h3>
            <div className="Line"></div>
            <p>{Movie.about.type}</p>
            <h3>Technologies</h3>
            <div className="Line"></div>
            <p>{Movie.about.technologies}</p>
            <h3>Duration</h3>
            <div className="Line"></div>
            <p>{Movie.about.timePeriod}</p>
            <h3>Description</h3>
            <div className="Line"></div>
            <p>{Movie.about.description}</p>
            <h3>GitHub</h3>
            <div className="Line"></div>
            <a href={Movie.about.git_link}>{Movie.about.git_link}</a>
          </AboutSection>
        </Details>
      )}
    </>
  );
}
const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 50%;
    min-height: 70vh;
    object-fit: contain;
    padding-top: 2rem;
    margin: 5rem 22rem;

    @media (max-width: 1300px) {
      width: 100%;
      margin: 2rem 2rem;
    }
  }
`;
const AboutSection = styled.div`
  min-height: 80vh;
  margin: 5rem 10rem;
  align-items: center;
  p {
    padding: 0rem;
    margin-bottom: 2rem;
  }
  .Line {
    width: 5%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
    @media (max-width: 1300px) {
      width: 13%;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
const SmallDetails = styled.div`
  display: flex;
`;

export default MovieDetalis;
