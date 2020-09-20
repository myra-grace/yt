import React, { useEffect, useState, useRef } from "react";
import { Icon } from 'react-icons-kit'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <h1>Percussive Ukulele Tutorials</h1>
            <div className="socials">
                <div className='ytlink'>
                    <a className="yticon" href="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w"><Icon size={'100%'} icon={youtubePlay}/></a>
                </div>
            </div>
            <h1>noodle_ ship</h1>
        </div>
    )
}

export default Footer;