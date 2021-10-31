import React, { Component } from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { SiItunes } from "react-icons/si";
import { FaSoundcloud } from "react-icons/fa";

class Platform extends Component {
  render() {
    return (
      <div className="audio-platform">
        <div className="spotify  d-flex align-items-center justify-content-center">
          <BsSpotify />
        </div>
        <div className="itune  d-flex align-items-center justify-content-center">
          <SiItunes />
        </div>
        <div className="youtube  d-flex align-items-center justify-content-center">
          <BsYoutube />
        </div>
        <div className="soundcloud  d-flex align-items-center justify-content-center">
          <FaSoundcloud />
        </div>
      </div>
    );
  }
}

export default Platform;
