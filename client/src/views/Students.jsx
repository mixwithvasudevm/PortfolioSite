import React, { Component,useEffect } from "react";

 import StudentBody from "../components/StudentBody";
//  import AempBody from "../components/AempBody";

const Students=()=>{
  useEffect(() => {
    document.title = "Mix With Vasudev | Student Work";
  }, []);
    return (
      <div>
     <StudentBody/>     
      </div>
    );
  }

export default Students;
