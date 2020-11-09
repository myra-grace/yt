import React, { useEffect, useState, useRef } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    useHistory,
  } from "react-router-dom";
import { Icon } from 'react-icons-kit'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
import { FaDiscord } from "react-icons/fa";
import {mail} from 'react-icons-kit/ikons/mail'
import './Footer.css';

const Footer = () => {
    const history = useHistory();

    const handleContact = () => {
        history.push(`/contact`);
    }
    
    return (
        <div className="footer-container">
            <p>Percussive Ukulele Tutorials</p>
            <div className="socials">
                <div className='ytlink'>
                    <a className="yticon" href="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w" target="_blank"><Icon size={'100%'} icon={youtubePlay}/></a>
                </div>
                <div className='dislink'>
                    <a className="disicon" href="https://discord.gg/9UNEPKCGnK" target="_blank"><FaDiscord size={'100%'}/></a>
                </div>
                <div className="email">
                    <button className="emailicon" onClick={handleContact}><Icon size="100%" icon={mail} /></button>
                </div>
            </div>
            <p>noodle_ship</p>
        </div>
    )
}

export default Footer;