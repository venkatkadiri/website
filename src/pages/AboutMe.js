import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Faq from "../components/Faq";
//import Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function AboutMe() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
      <Skills />
      <Faq />
    </motion.div>
  );
}

export default AboutMe;
