import React, { useEffect, useState, useRef } from "react";
import './Tools.css';
import Slideshow from "../slideshow/Slideshow";
import tuning from '../../assets/tools/20200921_171623.jpg';
import tabBook from '../../assets/tools/20200921_155358.jpg';
import strings from '../../assets/tools/20200921_171750.jpg';

const Tools = (props) => {
    let toolsArr = [
        { alt: "Tuning", src: tuning, link: "", origin: "local" },
        { alt: "Tab book", src: tabBook, link: "", origin: "local" },
        { alt: "Strings", src: strings, link: "", origin: "local" },
      ];
    
      return (
        <div className="tools-container">
          <h1>Tools</h1>
          <div className="slideshow-container">
              <Slideshow vw={props.vw} vh={props.vh} theArray={toolsArr} pageLink="" keyWord="Tools" />
          </div>
        </div>
      );
}

export default Tools;