import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnim, fade } from "../animation";
function ErrorPage() {
  return (
    <Error>
      <motion.div variants={titleAnim} initial="hidden" animate="show">
        <Hide>
          <motion.h2 variants={titleAnim} initial="hidden" animate="show">
            Sorry You have
          </motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>Landed on the</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>
            <span>Error Page.</span>
          </motion.h2>
        </Hide>
      </motion.div>
      <Redirecting>
        <motion.h3 variants={fade} initial="hide" animate="show">
          Please Return to the Home Page
        </motion.h3>
        <motion.form action="/">
          <motion.button variants={fade}>Home page</motion.button>
        </motion.form>
      </Redirecting>
    </Error>
  );
}
const Error = styled(motion.div)`
  background: #1b1b1b;
  overflow-x: hidden;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  font-family: sans-serif;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    align-items: center;
  }
  button {
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5sec ease;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
  h2 {
    font-weight: lighter;
    margin-top: 5rem;
    font-size: 4rem;
    color: #ccc;
  }

  span {
    color: #ff0000;
  }
  h3 {
    margin-top: 2rem;
    padding-top: 1rem;

    font-weight: lighter;
    color: #ccc;
    font-size: 2rem;
  }
`;
const Redirecting = styled(motion.div)`
  display: flex;
`;
const Hide = styled(motion.div)`
  overflow: hidden;
`;
export default ErrorPage;
