import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductsPage from "./pages/products-page/ProductsPage";
import ToolsPage from "./pages/tools-page/ToolsPage";
import ContactPage from "./pages/contact-page/ContactPage";

function App() {
  let vw = window.innerWidth;
  let vh = window.innerHeight;

  return (
    <div className="App">
      <Router>
        <header className="header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" render={() => <Home vw={vw} vh={vh} />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/tools" component={ToolsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            path="/*"
            render={() => (
              <div>
                <h1>Nothing here...</h1>{" "}
                <img
                  style={{ borderRadius: "20%" }}
                  src="https://i.gifer.com/3lL0.gif"
                />{" "}
              </div>
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
