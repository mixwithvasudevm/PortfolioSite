import React, { Component } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

class Platform extends Component {
  render() {
    return (
      <div className="audio-platform">
        <div className="spotify  d-flex align-items-center justify-content-center">
          <FaFacebookF />
        </div>
        <div className="itune  d-flex align-items-center justify-content-center">
          <FaInstagram />
        </div>
        <div className="youtube  d-flex align-items-center justify-content-center">
          <FaYoutube />
        </div>
        <div className="soundcloud  d-flex align-items-center justify-content-center">
          <FaLinkedin />
        </div>
      </div>
    );
  }
}

export default Platform;
