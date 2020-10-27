import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./ProductsPage.css";
import ImageGallery from "react-image-gallery";
import Building from "../../components/building/Building";

import ukulele from "../../assets/products/20200921_171526.jpg";
import strings from "../../assets/products/20200921_171750.jpg";
import Overview from "../../components/overview/Overview";

const ProductsPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productsGallery = [
    {
      original: ukulele,
      description: "My Ukulele",
      originalClass: "imgclass",
    },
    {
      original: strings,
      description: "My Strings",
      originalClass: "imgclass",
    },
  ];
  return (
    <div className="products-page-container">
      <ImageGallery
        items={productsGallery}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        infinite={true}
      />
      <Overview
        title="My Ukulele"
        text="I use a tenor ukulele: KA-TE by Kala."
        link="https://kalabrand.com/products/ka-te?_pos=6&_sid=dd0867635&_ss=r"
        linktotext="YouTube Channel"
      />
      <div className="splurge-container">
        <p>
          This is a tenor ukulele. It used to have a regular high 'G' string but
          now it has a low 'G' string.
        </p>
      </div>
      <Overview
        title="My Strings"
        text="I currently use Aquila Red Low 'G' strings."
        link="https://aquilacorde.com/en/shop/modern-instrument-string-sets/ukulele-banjouke-en/red-series/"
        linktotext="YouTube Channel"
      />
      <div className="splurge-container">
        <p>
          I love the regular tuning with the high 'G' string, but I wanted to
          try something new. What I really like about the low 'G' is that
          there's more bass, range, and it's louder.
        </p>
      </div>
    </div>
  );
};

export default ProductsPage;
