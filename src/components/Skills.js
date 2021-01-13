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
              Having worked with HTML for quite a while now I am familiar with
              quite a bit of Advanced HTML features like canvas, drag and drop,
              SCO optimization, and search engine page indexing.
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
              I can do CSS class-based animations with transitions,resposive
              website design,familiar with CSS pre compilers such as SCSS and
              React supported CSS Libraries such as Styled Components, etc.
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
              I use both the vanilla CSS supported Bootstrap and the react
              supported React-strap.
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
              In javascript, I am very much familiar with ES6 standard syntax
              like ES6 classes,arrow-functions, Ajax, REST API.
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
              I have Worked on React Library both Professionally and personally
              and as such, I am well acquainted with Libraries such as
              <ui>
                <li>Redux</li>
                <li>React Router DOM</li>
                <li>Context API</li>
                <li>Styled Components</li>
                <li>Framer Motion</li>
                <li>Axios</li>
              </ui>
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
              I started Learning back-end development and coding, in general,
              using Java so I can Proficiently write Algorithms and I am
              familiar with all the key concepts like classes, inheritance,
              polymorphism, Multi-threading, etc.
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
              In Spring I am familiar with MVC Architecture and I have ample
              experience with writing the Bussiness logic using Design patterns
              like singleton pattern, DAO pattern POJO classes, etc
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={sql} alt="sql" width="5%"></img>
              <h3>
                <span>MySQL</span>
              </h3>
            </div>
            <p>
              I have very good experience with SQL queries and handling all the
              CRUD operations on hundreds of table I am also well versed in
              writing complex queries like nested queries and using Advanced
              clauses.
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
