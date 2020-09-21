import React, { useEffect, useState, useRef } from "react";
import Slideshow from "../slideshow/Slideshow";
import "./Products.css";
import "../slideshow/Slideshow.css";
import ukulele from '../../assets/products/20200921_171526.jpg';

const Products = (props) => {
  let productsArr = [
    { alt: "My ukulele", src: ukulele, link: "", origin: "local" },
    { alt: "Outrun code", src: "https://i.redd.it/jfr0ixsgm9v21.jpg", link: "https://i.redd.it/jfr0ixsgm9v21.jpg", origin: "net" },
    { alt: "Neon signs", src: "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_auto/c_limit,w_450/v1554401037/1554401037.jpg", link: "", origin: "net" },
  ];

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="slideshow-container">
          <Slideshow vw={props.vw} vh={props.vh} theArray={productsArr} pageLink="" keyWord="Products" />
      </div>
    </div>
  );
};

export default Products;
