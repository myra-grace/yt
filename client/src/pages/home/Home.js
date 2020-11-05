import React, { useEffect, useState, useRef } from "react";
// import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect, 
    useHistory,
  } from 'react-router-dom';
import './Home.css';
import { Icon } from 'react-icons-kit'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay';
import Products from "../../components/products/Products";
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import Tools from "../../components/tools/Tools";
import Overview from "../../components/overview/Overview";
import About from '../../pages/about/About';
import Banner from "../../components/banner/Banner";

const Home = (props) => {
  return (
    <div className="home-container">
      <div id="news">
        <Banner catch="To be continued meme" title="Yes - Roundabout" linktotext="Watch Here" link="https://youtu.be/kTP0pUkcnrE"/>
      </div>
      <div id="overview-home-moon-ride">
        <Overview title="MoonRide Game" text="Play a simple game I made!" link="https://moon-ride-game.web.app/" linktotext="Play Game" />
      </div>
      {/* <div id="products">
        <Products vw={props.vw} vh={props.vh}/>
      </div>
      <div id="tools">
        <Tools vw={props.vw} vh={props.vh} />
      </div> */}
      {/* <div id="gallery">
        <Gallery vw={props.vw} vh={props.vh}/>
      </div> */}
      {/* <div id="about">
        <Features />
      </div> */}
    </div>
  );
}

export default Home;
