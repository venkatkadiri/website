import React from "react";
import styled from "styled-components";
import { Layout } from "../Styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

function Faq() {
  return (
    <FaqStyle>
      <h2>
        <span>FAQ</span> About Me.
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is My Education ?">
          <div className="Answer">
            <h3>I Completed My B-tech at GITAM University Vizag.</h3>
          </div>
        </Toggle>
        <Toggle title="What is My Profession ?">
          <div className="Answer">
            <h3>I am A Full Stack Developer.</h3>
          </div>
        </Toggle>
        <Toggle title="Which Company do I Work For ?">
          <div className="Answer">
            <h3>
              I Work For Tech Integra Erp Banjarahills as a Front End Developer.
            </h3>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqStyle>
  );
}
const FaqStyle = styled(Layout)`
  display: block;
  h3 {
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .Question {
    padding-top: 2rem;
  }
  .Answer {
    padding-top: 1rem;
  }
`;

export default Faq;
