import React from "react";
import styled from "styled-components";
import { Layout } from "../Styles";

function Faq() {
  return (
    <FaqStyle>
      <h2>
        <span>FAQ</span> About Me.
      </h2>
      <div className="Question">
        <p>What is My Education ?</p>
        <div className="Answer">
          <h3>I Completed My B-tech at GITAM University Vizag.</h3>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="Question">
        <p>What is My Profession ?</p>
        <div className="Answer">
          <h3>I am A Full Stack Developer.</h3>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="Question">
        <p>Which Company do I Work For ?</p>
        <div className="Answer">
          <h3>
            I Work For Tech Integra Erp Banjarahills as a Front End Developer.
          </h3>
        </div>
        <div className="faq-line"></div>
      </div>
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
`;

export default Faq;
