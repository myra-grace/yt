import React, { useEffect, useState, useRef } from "react";
import Slideshow from "../slideshow/Slideshow";
import "./Products.css";
import "../slideshow/Slideshow.css";

const Products = (props) => {
  return (
    <div className="products-container">
        <h1>Products</h1>
        <div className="slideshow-container">
            <Slideshow vw={props.vw} vh={props.vh}/>
        </div>
    </div>
  );
};

export default Products;
