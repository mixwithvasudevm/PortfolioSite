import React, { Component ,useEffect} from "react";
import BlogBody from "../components/BlogBody";
import BlogPage from "../components/BlogPage";
import ShowBlogs from "../components/ShowBlogs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { infoData } from "../components/BlogBody";

const Blogs =() =>{
    useEffect(() => {
      document.title = "Blogs-Mix With Vasudev";
    }, []);
    return (
      <div className="ShowBlogs">
        <ShowBlogs />
        <BlogBody/>
      </div>
    );
  }


  const BlogsMain = () => {
  return (
    <Router>
       <Route exact path="/blogs" component={Blogs} />
      <Route
        path={`/blogs/id`}
        component={(props) => (
          <BlogPage infoData={infoData[parseInt(props.match.params.eventId)]} />
        )}
      />
    </Router>
  );
};

export default BlogsMain;
