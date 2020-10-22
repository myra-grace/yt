import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./GalleryBanner.css";

const GalleryBanner = (props) => {
  const [theArray, setTheArray] = useState(props.theArray);
  const [scrollHolder, setScrollHolder] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  const [forward, setForward] = useState(true);

  const scroller = () => {
    let sw = document.querySelector(".gallery-banner-container").scrollWidth;
    let bannerSize = document.querySelector(".gallery-banner-container-photo")
      .clientWidth;
    if (
      scrollCount === theArray.length &&
      forward === true &&
      scrollHolder >= sw - bannerSize
    ) {
      setForward(false);
      setScrollCount(scrollCount - 1);
      setScrollHolder(scrollHolder - bannerSize);
    } else if (scrollCount <= 0 && forward === false && scrollHolder <= 0) {
      setForward(true);
      setScrollCount(scrollCount + 1);
      setScrollHolder(scrollHolder + bannerSize);
    } else if (scrollCount < theArray.length) {
      setForward(true);
      setScrollCount(scrollCount + 1);
      setScrollHolder(scrollHolder + bannerSize);
    } else {
      setForward(false);
      setScrollCount(scrollCount - 1);
      setScrollHolder(scrollHolder - bannerSize);
    }
    console.log("scrollHolder: ", scrollHolder);
    console.log("scrollCount: ", scrollCount);
  };

  const bannerScroller = setInterval(() => {
    scroller();
    document
      .querySelector(".gallery-banner-container")
      .scrollTo(scrollHolder, 0);
  }, 4000);
  clearInterval(bannerScroller);

  return (
    <div className="gallery-banner-container">
      {!theArray
        ? null
        : theArray.map((obj) => {
            return (
              <div
                className="gallery-banner-container-photo"
                style={{
                  background: `url("${obj.src}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <a href={obj.link} href={obj.link}>
                  <h1>{obj.alt}</h1>
                </a>
              </div>
            );
          })}
    </div>
  );

  //   return (
  //     <div className="gallery-banner-container">
  //       <a href={props.link}>
  //         <h1>{props.alt}</h1>
  //         <img src={props.image} alt={props.alt} />
  //       </a>
  //     </div>
  //   );
};

export default GalleryBanner;
