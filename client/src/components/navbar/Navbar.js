import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./Navbar.css";
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
      behavior: "smooth",
    });
  };

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
    if (toggle) {
      handleToggle();
    }
    history.push(`/`);
    scrollToTop();
  };
  const handleProducts = (event) => {
    event.preventDefault();
    history.push(`/products`);
    handleToggle();
    scrollToTop();
  };

  const handleTools = (event) => {
    event.preventDefault();
    history.push(`/tools`);
    handleToggle();
    scrollToTop();
  };

  const handleGallery = (event) => {
    event.preventDefault();
    history.push(`/`);
    handleToggle();
    scrollToTop();
  };

  const handleAbout = (event) => {
    event.preventDefault();
    history.push(`/about`);
    handleToggle();
    scrollToTop();
  };

  //  MOBILE NAV MENU APPEARANCE
  useEffect(() => {
    let menu = document.getElementById("mobile-nav");
    if (toggle) {
      menu.style.visibility = "visible";
      menu.style.opacity = "1";
      // menu.style.right = "0";
    } else {
      menu.style.visibility = "hidden";
      menu.style.opacity = "0";
      // menu.style.right = "-500px";
    }
  }, [toggle]);

  let preScroll = window.pageYOffset;

  window.onscroll = () => {
    let scroll = window.pageYOffset;
    if (preScroll > scroll) {
      document.querySelector("header").style.top = "0";
      if (toggle) {
        document.getElementById("mobile-nav").style.top = "50px";
      }
    } else {
      document.querySelector("header").style.top = "-200px";
      if (toggle) {
        document.getElementById("mobile-nav").style.top = "-200px";
      }
    }
    preScroll = scroll;
  };

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
