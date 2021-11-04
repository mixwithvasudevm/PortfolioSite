import React, {useEffect } from "react";
import BlogBody from "../components/BlogBody";

const Blogs = () => {
  useEffect(() => {
    document.title = "Mix With Vasudev | Blogs";
  }, []);
  return (
    <div>
      <BlogBody/>
    </div>
  );
};


export default Blogs;
