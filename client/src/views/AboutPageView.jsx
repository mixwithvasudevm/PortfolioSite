import React, { Component,useEffect } from "react";


 import AboutPage from "../components/AboutPage";

const AboutPageView =()=>{
  
    useEffect(() => {
      document.title = "Mix With Vasudev | About";
    }, []);
    return (
      <div>
     <AboutPage/>     
      </div>
    );
}

export default AboutPageView;
