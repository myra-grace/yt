import React, { useEffect, useState, useRef } from "react";
import Slideshow from "../slideshow/Slideshow";
import './Gallery.css';

const Gallery = (props) => {
    let photosArr = [
        { alt: "Outrun palette", src: "https://i.redd.it/aepphltiqy911.png", link: "https://i.redd.it/aepphltiqy911.png", origin: "net", title: "Title", splurge: "Splurge" },
        { alt: "Outrun code", src: "https://i.redd.it/jfr0ixsgm9v21.jpg", link: "https://i.redd.it/jfr0ixsgm9v21.jpg", origin: "net", title: "Title", splurge: "Splurge" },
        { alt: "Neon signs", src: "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_auto/c_limit,w_450/v1554401037/1554401037.jpg", link: "https://i.redd.it/jfr0ixsgm9v21.jpg", origin: "net", title: "Title", splurge: "Splurge" },
    ];

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="slideshow-container">
                <Slideshow vw={props.vw} vh={props.vh} theArray={photosArr} pageLink="" keyWord="Photos" />
            </div>
        </div>
    )
}

export default Gallery;