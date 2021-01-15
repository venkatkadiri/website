import { createGlobalStyle } from "styled-components";
const Globalstyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
body
{
    
    background:#1b1b1b;
    overflow-x:hidden;

}
button
{
    font-weight:bold;
    font-size:1.1rem;
    cursor:pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    background:transparent;
    color:white;
    transition: all 0.5sec ease;
    &:hover
    {
     background-color:#23d997;
     color:white;
    }
}
h2
{
font-weight: lighter;
font-size:4rem;
color:#ccc;

}
h3
{
color:white;
}
p
{
padding:3rem 0rem;
color:#ccc;
font-size:1.4rem;
line-height:150%;
}
span
{
    font-weight:bold;
    color:#23d997;
    text-align:center;
}


`;
export default Globalstyle;
