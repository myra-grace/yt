import React, { useEffect, useState, useRef } from "react";
import './Banner.css';

//  DON'T FORGET TO SET THE BACKGROUND-IMAGE OF THIS BANNER'S CONTAINER
const Banner = (props) => {
    return (
        <div className="banner-container">
            <p>{props.catch}</p>
            <h1>{props.title}</h1>
            <p><a className="ytalink" href={props.link}>{props.linktotext}</a></p>
        </div>
    )
}

export default Banner;