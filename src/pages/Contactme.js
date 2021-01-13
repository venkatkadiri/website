import React from "react";
//import Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function ContactMe() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      Contact Me
    </motion.div>
  );
}

export default ContactMe;
