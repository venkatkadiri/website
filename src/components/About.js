import React from "react";
import home1 from "../img/home1.png";
import { Layout, Description, Image, Hide } from "../Styles";
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
            <motion.h2 variants={titleAnim}>
              an <span>Aspiring</span> Web
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Developer.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any free-lancing work in react Frount End Design.
        </motion.p>
        <motion.button variants={fade}>Contact</motion.button>
      </Description>

      <Image>
        <img src={home1} alt="guy with a camera"></img>
      </Image>
    </Layout>
  );
}

export default About;
