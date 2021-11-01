import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogsMain, { infoData } from "../components/BlogBody";
import BlogPage from "./BlogPage";
import BlogBody from "../components/BlogBody";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs-Mix With Vasudev";
  }, []);
  return (
    <div>
      <BlogBody/>
    </div>
  );
};


export default Blogs;
