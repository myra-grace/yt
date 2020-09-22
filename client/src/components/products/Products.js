import React, { useEffect, useState, useRef } from "react";
import Slideshow from "../slideshow/Slideshow";
import "./Products.css";
import "../slideshow/Slideshow.css";
import ukulele from '../../assets/products/20200921_171526.jpg';
import strings from '../../assets/products/20200921_171750.jpg';

const Products = (props) => {
  let productsArr = [
    { alt: "My Ukulele", src: ukulele, link: "", origfitin: "local", title: "KA-TE by Kala", splurge: "This is a tenor ukulele. It used to have a regular high 'G' string but now it has a low 'G' string." },
    { alt: "My Strings", src: strings, link: "", origin: "local", title: "Aquila Reds", splurge: "I currently use Aquila Red Low 'G' strings" },
    { alt: "Neon Signs", src: "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_auto/c_limit,w_450/v1554401037/1554401037.jpg", link: "", origin: "net", title: "Title", splurge: "Splurge" },
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
