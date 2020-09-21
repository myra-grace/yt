import React, { useEffect, useState, useRef } from "react";
import Slideshow from "../slideshow/Slideshow";
import './Gallery.css';

const Gallery = (props) => {
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="slideshow-container">
                <Slideshow vw={props.vw} vh={props.vh}/>
            </div>
        </div>
    )
}

export default Gallery;