import React, { Component } from "react";
import AudioPlayer from "./Audio";
import i1 from "./img/main.jpg";

class Landing extends Component {
  render() {
    return (
      <div className="landing mt-5">
        <img src={i1} />
        <AudioPlayer />
      </div>
    );
  }
}

export default Landing;
