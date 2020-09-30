import React, { useEffect, useState, useRef } from "react";
import { Icon } from 'react-icons-kit'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
import { FaDiscord } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>Percussive Ukulele Tutorials</p>
            <div className="socials">
                <div className='ytlink'>
                    <a className="yticon" href="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w"><Icon size={'100%'} icon={youtubePlay}/></a>
                </div>
                <div className='dislink'>
                    <a className="disicon" href="https://discord.gg/qNEUqf"><FaDiscord size={'100%'}/></a>
                </div>
            </div>
            <p>noodle_ship</p>
        </div>
    )
}

export default Footer;