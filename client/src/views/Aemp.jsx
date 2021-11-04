import React, { Component,useEffect } from "react";

 import AempHead from "../components/AempHead";
 import AempBody from "../components/AempBody";

const Aemp =() => {
  useEffect(() => {
    document.title = "Mix With Vasudev | AEMP";
  }, []);
    return (
      <div>
       <AempHead /> 
       <AempBody />       
      </div>
    );
  }

export default Aemp;
