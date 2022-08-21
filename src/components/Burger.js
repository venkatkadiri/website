import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import '../styles/app.style.scss';
import { useState } from 'react';
import BurgerContents from './BurgerContents';



function BurgerMenu() {
  
  const [clicked, setClicked] = useState(false); //burger clicked or not...
  const [selected,setSelected] = useState(false);  

  const burgerClickHandler = () =>{
    setSelected(!selected);
    setClicked(!clicked);

    
  }

  const itemClickHandler = () =>{
    setSelected(!selected);
    setClicked(!clicked);


  }
  return (
      <>
      <span className = {clicked ? 'background-open' : 'background'}></span>
      <StyledBurger>
        
      <h1>
        <Link id="Logo" to="/">
          Venkat
        </Link>
      </h1>
      <Burger onClick={burgerClickHandler} className={clicked ? 'b_menu' : ''}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </Burger>
      </StyledBurger>
      {(clicked && !selected)?(<BurgerContents selected = {itemClickHandler} />):(<></>)}
     </>
  )
}
const StyledBurger = styled.nav`
 display:flex;
 justify-content:space-between ;
  align-items: center;
  min-height: 10vh;
  padding: 1rem 1rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
a {
    color: white;
    text-decoration: none;
  }
#Logo {
    font-family: Lobster Two;
    font-size: 1.8rem;
    font-weight: lighter;
  }  
 
`;

const Burger = styled.ul `
cursor: pointer;

span{
    display:block;
    width:26px;
    height:2px;
    background-color:white;
    transition: all 300ms ease-in-out;
    transform-origin:left center ;
    color: white ;

    &:not(:last-child){
        margin-bottom: 3px;
    }
    
}
`;

export default BurgerMenu;
