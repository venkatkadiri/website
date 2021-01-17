import React from "react";
import { useEffect } from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Faq from "../components/Faq";
//import Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//scroll to top
import ScrollTop from "../components/scrollTop";

function AboutMe() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <About />
      <Skills />
      <Faq />
    </motion.div>
  );
}

export default AboutMe;
