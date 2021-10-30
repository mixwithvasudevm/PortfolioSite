import React, { Component } from "react";
import About from "../components/About";
import "../components/css/home.css";
import Guest from "../components/Guest";
import Landing from "../components/Landing";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Landing />
        <About />
        <Guest />
      </div>
    );
  }
}

export default Home;
