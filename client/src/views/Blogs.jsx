import React, {useEffect } from "react";
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
