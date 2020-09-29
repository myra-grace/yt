import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect, 
  useHistory,
} from 'react-router-dom';
import './Navbar.css';
import { Icon } from "react-icons-kit";
import { youtubePlay } from "react-icons-kit/fa/youtubePlay";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [mobile, setMobile] = useState(true);
  const settingsButtonRef = useRef();
  const history = useHistory();

  let vw = window.innerWidth;
  let vh = window.innerHeight;

//   useEffect(() => {
//     window.scrollTo(0,0);
// }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (vw >= vh) {
      document.getElementById("settings-button").style.display = "none";
      document.getElementById("desktop-nav").style.display = "flex";
      setMobile(false);
    } else {
      document.getElementById("desktop-nav").style.display = "none";
    }
  }, []);

  const handleToggle = () => {
    if (mobile) {
        const container = settingsButtonRef.current;
        container.classList.toggle("change");
        setToggle(!toggle);
    }
  };

  const handleHome = (event) => {
    event.preventDefault();
    history.push(`/`);
    scrollToTop();
  }
  const handleProducts = (event) => {
    event.preventDefault();
    history.push(`/`);
    handleToggle();
    scrollToTop();
  }

  const handleTools = (event) => {
    event.preventDefault();
    history.push(`/`);
    handleToggle();
    scrollToTop();
  }

  const handleGallery = (event) => {
    event.preventDefault();
    history.push(`/`);
    handleToggle();
    scrollToTop();
  }

  const handleAbout = (event) => {
    event.preventDefault();
    history.push(`/about`);
    handleToggle();
    scrollToTop();
  }

  useEffect(() => {
    if (toggle) {
      document.getElementById("mobile-nav").style.display = "flex";
    } else {
      document.getElementById("mobile-nav").style.display = "none";
    }
  }, [toggle]);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="home-button">
          <a
            className="yticon"
            href="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w"
          >
            <Icon size={"15px"} icon={youtubePlay} />
          </a>
          <button onClick={handleHome}>noodle_ship</button>
        </div>
        <div id="desktop-nav">
          {/* <a href="#overview">Overview</a> */}
          <button onClick={handleProducts}>Products</button>
          <button onClick={handleTools}>Tools</button>
          {/* <button onClick={handleGallery}>Gallery</button> */}
          <button onClick={handleAbout}>About</button>
        </div>
        <div
          ref={settingsButtonRef}
          id="settings-button"
          onClick={handleToggle}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div id="mobile-nav">
        {/* <a href="#overview">Overview</a> */}
        <button onClick={handleProducts}>Products</button>
        <button onClick={handleTools}>Tools</button>
        {/* <button onClick={handleGallery}>Gallery</button> */}
        <button onClick={handleAbout}>About</button>
      </div>
    </div>
  );
};

export default Navbar;