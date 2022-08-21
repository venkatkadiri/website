import { useState,useEffect } from "react";


export default function Resize() {
   const [size,setSize] = useState([window.innerHeight,window.innerWidth]);
  useEffect(()=>{
    function handleSize(){
     setSize([window.innerHeight,window.innerWidth]);
    }
    window.addEventListener('resize',handleSize);
  },[window.innerHeight,window.innerWidth]);
  
  return size;
}
