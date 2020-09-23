import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect, 
  useHistory,
} from 'react-router-dom';
import './App.css';
import { Icon } from 'react-icons-kit'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay';
import Home from './components/pages/home/Home';
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

  const handleHome = (event) => {
    event.preventDefault();
    history.push(`/`);
  }

  const handleAbout = (event) => {
    event.preventDefault();
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
        <div className="home-button"><a className="yticon" href="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w"><Icon size={'15px'} icon={youtubePlay}/></a><button onClick={handleHome}>noodle_ship</button></div>
        <div id="desktop-nav">
          {/* <a href="#overview">Overview</a> */}
          <a href="#products">Products</a>
          <a href="#tools">Tools</a>
          <a href="#gallery">Gallery</a>
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
        <a href="#products">Products</a>
        <a href="#tools">Tools</a>
        <a href="#gallery">Gallery</a>
        <button onClick={handleAbout}>About</button>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => (<Home vw={vw} vh={vh}/>)} />
          <Route exact path="/about" component={About} />
          <Route path="/*" render={() => <div><h1>Nothing here...</h1> <img style={{borderRadius: "20%"}} src="https://i.gifer.com/3lL0.gif" /> </div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
