import React from "react";
import { Link } from "react-router-dom";
import '../styles/app.style.scss';
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";



function BurgerContents({selected}) {
    const selectedHandler = selected;
    console.log(selectedHandler);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
     className="burger_contents">
      <ul>
        <li>
          <Link to="/" onClick={selectedHandler}>About Me</Link>
        </li>
        <li>
          <Link to="/projects" onClick={selectedHandler}>My Projects</Link>
        </li>
        <li>
          <Link to="/blog" onClick={selectedHandler} >My Blog</Link>
        </li>
        <li>
          <Link to="/contact" onClick={selectedHandler} >Contact Me</Link>
        </li>
      </ul>
    </motion.div>
  )
}



export default BurgerContents

