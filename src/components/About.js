import React from "react";
import home1 from "../img/home1.png";
import { Layout, Description, Image, Hide } from "../Styles";
import Wave from "./wave";

//importing frmamer motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";

function About() {
  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>I am</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>a professional</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Web Developer.</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Passionate about responsive and feature-rich websites.
        </motion.p>
        <motion.button variants={fade}>Contact</motion.button>
      </Description>

      <Wave />
    </Layout>
  );
}

export default About;
