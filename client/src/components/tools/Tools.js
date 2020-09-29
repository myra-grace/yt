import React, { useEffect, useState, useRef } from "react";
import './Tools.css';
import Slideshow from "../slideshow/Slideshow";
import tuning from '../../assets/tools/20200921_171623.jpg';
import findTabs from '../../assets/tools/PicsArt_03-12-07.55.47.jpg';
import transpose from '../../assets/tools/ukesunkissed.png';
import tabBook from '../../assets/tools/20200921_155358.jpg';

const Tools = (props) => {
    let toolsArr = [
        { alt: "Tuning", src: tuning, link: "https://ukutuner.com/", origin: "local", title: "UkuTuner", splurge: "I use this website to tune my ukulele." },
        { alt: "Find Tabs", src: findTabs, link: "https://ukutabs.com/", origin: "local", title: "UkuTabs", splurge: "I use a few sites to find tabs. Otherwise, I find it by ear! Click to visit my favourite :)"},
        { alt: "Transpose", src: transpose, link: "http://www.logue.net/xp/index.htm", origin: "local", title: "Logue Music Services", splurge: "I use this site to transpose music to suit my voice range or to change the chord set." },
        { alt: "Tab Book", src: tabBook, link: "", origin: "local", title: "Note Taking", splurge: "I make and use tab books to help me find out how to play songs by ear. More info coming soon!" },
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