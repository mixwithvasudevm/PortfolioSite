import React, { Component } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import "../components/css/home.css";
import Guest from "../components/Guest";
import Landing from "../components/Landing";
import YouTube from "../components/Youtube";
import Album from "../components/Album";
import Ytext from "../components/Ytext";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Landing />
        <Album />
        <Ytext />
        <About />
        <YouTube />
        <Guest />
        <Contact />
      </div>
    );
  }
}

export default Home;
