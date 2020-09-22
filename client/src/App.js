import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect, 
  useHistory,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Icon } from 'react-icons-kit'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay';
import Landing from "./components/landing/Landing";
import Products from "./components/products/Products";
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import Tools from "./components/tools/Tools";
import News from "./components/news/News";
import Overview from "./components/overview/Overview";
import About from './components/pages/about/About';

function App() {
  const [toggle, setToggle] = useState(false);
  const settingsButtonRef = useRef();
  const history = useHistory();

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

  const handleAbout = () => {
    history.push(`/about`);
  }

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
        <div className="home"><a className="yticon" href="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w"><Icon size={'15px'} icon={youtubePlay}/></a><a href="#landing">noodle_ship</a></div>
        <div id="desktop-nav">
          {/* <a href="#overview">Overview</a> */}
          <a href="#products">Products</a>
          <a href="#tools">Tools</a>
          <a href="#gallery">Gallery</a>
          <button onClick={handleAbout} href="#about">About</button>
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
        <a href="#products">Products</a>
        <a href="#tools">Tools</a>
        <a href="#gallery">Gallery</a>
        <button onClick={handleAbout} href="#about">About</button>
      </div>

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
        <Products vw={vw} vh={vh}/>
      </div>
      <div id="tools">
        <Tools vw={vw} vh={vh} />
      </div>
      {/* <div id="gallery">
        <Gallery vw={vw} vh={vh}/>
      </div> */}
      <div id="about">
        {/* <Features /> */}
      </div>
      <div id="footer">
        <Footer/>
      </div>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route path="/*" render={() => <div><h1>Nothing here...</h1> <img style={{borderRadius: "20%"}} src="https://i.gifer.com/3lL0.gif" /> </div>} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
