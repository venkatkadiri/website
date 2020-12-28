import React from "react";
import java from "../img/java.svg";
import javascript from "../img/javascript-4.svg";
import bootstrap from "../img/bootstrap.svg";
import css from "../img/css-3.svg";
import reactjs from "../img/react.svg";
import html from "../img/html5.svg";
import spring from "../img/spring-3.svg";
import sql from "../img/mysql-7.svg";

function Skills() {
  return (
    <div className="description">
      <h2>Skills</h2>
      <div className="cards">
        <div className="card">
          <div className="icon">
          <img src={html} alt="html" width="5%"></img>
          <h3>HTML</h3>
          </div>
          <p>lorem</p>
        </div>
        <div className="card">
          <div className="icon">
          <img src={css} alt="css" width="5%"></img>
          <h3>CSS</h3>
          </div>
          <p>lorem</p>
        </div>
        <div className="card">
          <div className="icon">
          <img src={bootstrap} alt="bootstrap" width="5%"></img>
          <h3>bootstrap</h3>
          </div>
          <p>lorem</p>
        </div>
        <div className="card">
          <div className="icon">
          <img src={javascript} alt="javascript" width="5%"></img>
          <h3>Javascript</h3>
          </div>
          <p>lorem</p>
        </div>
        <div className="card">
          <div className="icon">
          <img src={reactjs} alt="Reactjs" width="5%"></img>
          <h3>Reactjs</h3>
          </div>
          <p>lorem</p>
        </div>
        <div className="card">
          <div className="icon">
          <img src={java} alt="java" width="5%"></img>
          <h3>java</h3>
          </div>
          <p>lorem</p>
        </div>
        <div className="card">
          <div className="icon">
          <img src={spring} alt="spring" width="5%"></img>
          <h3>Spring</h3>
          </div>
          <p>lorem</p>
        </div>
        <div className="card">
          <div className="icon">
          <img src={sql} alt="sql" width="5%"></img>
          <h3>MySql</h3>
          </div>
          <p>lorem</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
