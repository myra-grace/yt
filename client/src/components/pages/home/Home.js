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
import Landing from "../../landing/Landing";
import Products from "../../products/Products";
import Gallery from '../../gallery/Gallery';
import Footer from '../../footer/Footer';
import Tools from "../../tools/Tools";
import News from "../../news/News";
import Overview from "../../overview/Overview";
import About from '../../pages/about/About';

const Home = (props) => {
  return (
    <div className="home-container">

      {/* <div id="landing">
        <Landing />
      </div>
      <div id="overview">
        <Overview />
      </div> */}
      <div id="news">
        <News />
      </div>
      <div id="products">
        <Products vw={props.vw} vh={props.vh}/>
      </div>
      <div id="tools">
        <Tools vw={props.vw} vh={props.vh} />
      </div>
      {/* <div id="gallery">
        <Gallery vw={props.vw} vh={props.vh}/>
      </div> */}
      <div id="about">
        {/* <Features /> */}
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
