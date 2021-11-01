import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogsMain, { infoData } from "../components/BlogBody";

const Blogs= () => {
  useEffect(() => {
    document.title = "Blogs-Mix With Vasudev";
  }, []);
  return (
    <div className="ShowBlogs">
      <BlogsMain />
    </div>
  );
};


export default Blogs;
