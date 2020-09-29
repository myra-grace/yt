import React, { useEffect, useState, useRef } from "react";
import Banner from "../../banner/Banner";
import Overview from "../../overview/Overview";
import './About.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div className="about-container">
            <div id="banner-about">
                <Banner catch="Improve your playing" title="Lo-Fi Tutorials" linktotext="Go to YouTube channel" link="https://youtu.be/-I4kyYMQBLY"/>
            </div>
            <Overview />
        </div>
    )
}

export default About;