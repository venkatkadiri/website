import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";

function MovieDetalis() {
  const history = useHistory();
  const url = history.location.pathname;
  const [Movies, setMovies] = useState(MovieState);
  const [Movie, setMovie] = useState(null);
  //UseEffect
  useEffect(() => {
    const currentMovie = Movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [Movies, url]);
  return (
    <>
      {Movie && (
        <Details>
          <Headline>
            <h2>{Movie.title}</h2>
            <img src={Movie.mainImg} alt="img" />
          </Headline>
          <AboutSection>
            <h2>Title:{Movie.title}</h2>
          </AboutSection>
        </Details>
      )}
    </>
  );
}
const Details = styled.div`
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
    width: 100%;
    min-height: 70vh;
    object-fit: cover;
    padding-top: 2rem;
  }
`;
const AboutSection = styled.div``;

export default MovieDetalis;
