import React, { useEffect, useState, useRef } from "react";
import Slideshow from "../slideshow/Slideshow";
import "./Products.css";
import "../slideshow/Slideshow.css";

const Products = (props) => {
  let productsArr = [
    { alt: "Outrun palette", src: "https://i.redd.it/aepphltiqy911.png", link: "https://i.redd.it/aepphltiqy911.png" },
    { alt: "Outrun code", src: "https://i.redd.it/jfr0ixsgm9v21.jpg", link: "https://i.redd.it/jfr0ixsgm9v21.jpg" },
  ];

  // const slideLoader = (arr) => {
  //   arr.forEach(obj => {
  //     console.log(obj);
  //   });
  // };

  // slideLoader(productsArr);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="slideshow-container">
        {productsArr.forEach(obj => {
          console.log(obj);
          let palt = obj.alt;
          let psrc = obj.src;
          let plink = obj.link;
          return (
            <Slideshow vw={props.vw} vh={props.vh} palt={palt} psrc={psrc} plink={plink} />
          )
        })}
      </div>
    </div>
  );
};

export default Products;
