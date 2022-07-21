import React from "react";
import dotnet from "../img/NET_Core_Logo.svg";
import javascript from "../img/javascript-4.svg";
import bootstrap from "../img/bootstrap.svg";
import css from "../img/css-3.svg";
import reactjs from "../img/react.svg";
import html from "../img/html5.svg";
import node from "../img/Node.js_logo.svg";
import sql from "../img/mysql-7.svg";
import photoshop from "../img/photoshop-cc.svg";
//importing Styles
import { Layout, Description } from "../Styles";
import styled from "styled-components";

//bug fixes
import ScrollTop from "./scrollTop";

function Skills() {
  return (
    <MySkills>
      <ScrollTop />
      <Description>
        <h2>
          My <span>Skills</span>
        </h2>
        <Cards>
          <div className="card">
            <div className="icon">
              <img src={html} alt="html"></img>
              <h3>
                <span>HTML 5</span>
              </h3>
            </div>
            <p>
              Having worked with HTML for quite a while now I am familiar with
              Advanced HTML features like canvas, drag and drop, SCO
              optimization, and search engine page indexing.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={css} alt="css"></img>
              <h3>
                <span>CSS 3</span>
              </h3>
            </div>
            <p>
             Expert in class-based animations with transitions,responsive
             website design, experienced with CSS pre compilers such as SCSS
             and React supported CSS Libraries such as Styled Components, etc.

            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={bootstrap} alt="bootstrap"></img>
              <h3>
                <span>Bootstrap</span>
              </h3>
            </div>
            <p>
              I use both the vanilla CSS supported Bootstrap and the react
              supported React-strap.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={javascript} alt="javascript"></img>
              <h3>
                <span>Javascript</span>
              </h3>
            </div>
            <p>
              Apart from the basics,well acquainted with ES6 standard syntax
              like ES6 classes, Ajax, REST API, etc.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={reactjs} alt="Reactjs"></img>
              <h3>
                <span>Reactjs</span>
              </h3>
            </div>
            <p>
              Proficiant With React Library and I am well acquainted with the
              fallowing libraries
              <ul>
                <li>Redux</li>
                <li>React Router DOM</li>
                <li>Context API</li>
                <li>Styled Components</li>
                <li>Framer Motion</li>
              </ul>
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={photoshop} alt="photoshop"></img>
              <h3>
                <span>Photoshop</span>
              </h3>
            </div>
            <p>
              Aspire to become professional at Photoshop and adding it to my
              design skills.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={node} alt="java"></img>
              <h3>
                <span>Node</span>
              </h3>
            </div>
            <p>
              Coming from the front end world i am quite femilar with javaScript. So node felt very natural to me!
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={dotnet} alt="spring"></img>
              <h3>
                <span>ASP Dotnet Core</span>
              </h3>
            </div>
            <p>
              I am currently picking up on concepts related to the development of middleware API's in c# and dotnet.
              with all the prior development experience I am currently holding my own with c# and dotnet
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={sql} alt="sql"></img>
              <h3>
                <span>MySQL</span>
              </h3>
            </div>
            <p>
              Very good experience with SQL queries and handling CRUD
              operations, also well versed in writing complex queries and using
              Advanced clauses.
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
  img {
    width: 5%;
    @media (max-width: 1300px) {
      width: 10%;
    }
  }
`;

export default Skills;
