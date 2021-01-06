import React from "react";
import java from "../img/java.svg";
import javascript from "../img/javascript-4.svg";
import bootstrap from "../img/bootstrap.svg";
import css from "../img/css-3.svg";
import reactjs from "../img/react.svg";
import html from "../img/html5.svg";
import spring from "../img/spring-3.svg";
import sql from "../img/mysql-7.svg";
//importing Styles
import { Layout, Description } from "../Styles";
import styled from "styled-components";

function Skills() {
  return (
    <MySkills>
      <Description>
        <h2>
          My <span>Skills</span>
        </h2>
        <Cards>
          <div className="card">
            <div className="icon">
              <img src={html} alt="html" width="5%"></img>
              <h3>
                <span>HTML</span>
              </h3>
            </div>
            <p>
              Just keep in mind, the usage of style attribute overrides any
              style set globally. It will override any style set in the HTML tag
              or external style sheet.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={css} alt="css" width="5%"></img>
              <h3>
                <span>CSS</span>
              </h3>
            </div>
            <p>
              Just keep in mind, the usage of style attribute overrides any
              style set globally. It will override any style set in the HTML tag
              or external style sheet.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={bootstrap} alt="bootstrap" width="5%"></img>
              <h3>
                <span>Bootstrap</span>
              </h3>
            </div>
            <p>
              Just keep in mind, the usage of style attribute overrides any
              style set globally. It will override any style set in the HTML tag
              or external style sheet.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={javascript} alt="javascript" width="5%"></img>
              <h3>
                <span>Javascript</span>
              </h3>
            </div>
            <p>
              Just keep in mind, the usage of style attribute overrides any
              style set globally. It will override any style set in the HTML tag
              or external style sheet.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={reactjs} alt="Reactjs" width="5%"></img>
              <h3>
                <span>Reactjs</span>
              </h3>
            </div>
            <p>
              Just keep in mind, the usage of style attribute overrides any
              style set globally. It will override any style set in the HTML tag
              or external style sheet.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={java} alt="java" width="5%"></img>
              <h3>
                <span>Java</span>
              </h3>
            </div>
            <p>
              Just keep in mind, the usage of style attribute overrides any
              style set globally. It will override any style set in the HTML tag
              or external style sheet.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={spring} alt="spring" width="5%"></img>
              <h3>
                <span>Spring</span>
              </h3>
            </div>
            <p>
              Just keep in mind, the usage of style attribute overrides any
              style set globally. It will override any style set in the HTML tag
              or external style sheet.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={sql} alt="sql" width="5%"></img>
              <h3>
                <span>MySql</span>
              </h3>
            </div>
            <p>
              Just keep in mind, the usage of style attribute overrides any
              style set globally. It will override any style set in the HTML tag
              or external style sheet.
            </p>
          </div>
        </Cards>
      </Description>
    </MySkills>
  );
}
const MySkills = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default Skills;
