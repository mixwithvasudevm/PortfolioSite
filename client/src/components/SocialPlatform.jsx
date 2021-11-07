import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

class Platform extends Component {
  render() {
    return (
      <div className="audio-platform">
        <div className="spotify  d-flex align-items-center justify-content-center">
         <a href=" https://twitter.com/MixWithVasudev?s=20" className="text-white"><FaTwitter /></a>
        </div>
        <div className="itune  d-flex align-items-center justify-content-center">
         <a href=" https://instagram.com/mixwithvasudev?utm_medium=copy_link" className="text-white"><FaInstagram /></a>
        </div>
        <div className="youtube  d-flex align-items-center justify-content-center">
          <a href=" https://youtube.com/c/MixWithVasudev" className="text-white"><FaYoutube /></a>
        </div>
        <div className="soundcloud  d-flex align-items-center justify-content-center">
         <a href=" https://www.linkedin.com/in/mix-with-vasudev" className="text-white"><FaLinkedin /></a>
        </div>
      </div>
    );
  }
}

export default Platform;
