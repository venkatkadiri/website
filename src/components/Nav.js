import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <a id="Logo" href="#">
          Venkat
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">My Projects</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </StyledNav>
  );
}
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;

  #Logo {
    font-family: Lobster Two;
    font-size: 1.8rem;
    font-weight: lighter;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
