import React from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnim, fadeError } from "../animation";
import { AnimateSharedLayout } from "framer-motion";
import { pageAnimation } from "../animation";
import { useState } from 'react';
import { Blog } from '../BlogState';
import { Layout } from "../Styles";
import Toggle from "../components/Toggle";

function BlogPage() {
  const [blogs,setBlogs] = useState(Blog);
  return (
    <BlogStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
     {
      blogs.map((blog)=>{
       return (
       <BlogElementStyle>  
      <AnimateSharedLayout>
        <Toggle title={`${blog.title}   |  ${blog.date}`}>
          <div className="Answer">
            <p>{blog.description}</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      </BlogElementStyle>
        );
      })
     }
    </BlogStyle>
  )
}


const BlogStyle = styled(motion.div)`
  background: #1b1b1b;
  overflow-x: hidden;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  font-family: sans-serif;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    align-items: center;
  }
  button {
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5sec ease;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
  h2 {
    font-weight: lighter;
    margin-top: 5rem;
    font-size: 4rem;
    color: #ccc;
  }

  span {
    color: #ff0000;
  }
  h3 {
    margin-top: 2rem;
    padding-top: 1rem;

    font-weight: lighter;
    color: #ccc;
    font-size: 2rem;
  }
`;

const BlogElementStyle = styled(Layout)`
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

export default BlogPage;