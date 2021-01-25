import React from "react";
import java from "../img/java.svg";
import javascript from "../img/javascript-4.svg";
import bootstrap from "../img/bootstrap.svg";
import css from "../img/css-3.svg";
import reactjs from "../img/react.svg";
import html from "../img/html5.svg";
import spring from "../img/spring-3.svg";
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
              Expert in class-based animations with transitions,resposive
              website design, expieianced with CSS pre compilers such as SCSS
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
                <li>Axios</li>
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
              <img src={java} alt="java"></img>
              <h3>
                <span>Java</span>
              </h3>
            </div>
            <p>
              My Primary and most Skillfull language and know all the key
              concepts.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={spring} alt="spring"></img>
              <h3>
                <span>Spring</span>
              </h3>
            </div>
            <p>
              In Spring I am familiar with MVC Architecture and I have ample
              experience with writing the Bussiness logic using Design patterns
              like singleton pattern, DAO pattern POJO classes, etc
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
