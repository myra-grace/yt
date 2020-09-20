import React, { useEffect, useState, useRef } from "react";
// import logo from './logo.svg';
import './App.css';
import { Icon } from 'react-icons-kit'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay';
import Overview from "./components/overview/Overview";
import Products from "./components/products/Products";
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';

function App() {
  const [toggle, setToggle] = useState(false);
  const settingsButtonRef = useRef();

  let vw = window.innerWidth;
  let vh = window.innerHeight;

  useEffect(() => {
    if (vw >= vh) {
      document.getElementById("settings-button").style.display = "none";
      document.getElementById("desktop-nav").style.display = "flex";
    } else {
      document.getElementById("desktop-nav").style.display = "none";
    }
  }, []);

  const handleToggle = () => {
    const container = settingsButtonRef.current;
    container.classList.toggle("change");
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.getElementById("mobile-nav").style.display = "flex";
    } else {
      document.getElementById("mobile-nav").style.display = "none";
    }
  }, [toggle]);

  return (
    <div className="App">
      <div className="navbar">
        <div className="home"><a className="yticon" href="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w"><Icon size={'15px'} icon={youtubePlay}/></a><a href="#overview">noodle_ship</a></div>
        <div id="desktop-nav">
          <a href="#overview">Overview</a>
          <a href="#products">Products</a>
          <a href="#tools">Tools</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
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
        <a href="#overview">Overview</a>
        <a href="#products">Products</a>
        <a href="#tools">Tools</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
      </div>

      <div id="overview">
        <Overview />
      </div>
      <div id="products">
        <Products vw={vw} vh={vh}/>
      </div>
      <div id="tools">
        {/* <Features /> */}
      </div>
      <div id="gallery">
        {/* <h1>Gallery</h1> */}
        <Gallery vw={vw} vh={vh}/>
      </div>
      <div id="about">
        {/* <Features /> */}
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
