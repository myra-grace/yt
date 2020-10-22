import React, { useEffect, useState, useRef } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect, 
    useHistory,
  } from 'react-router-dom';
import './ToolsPage.css';
import Building from '../../components/building/Building';
import GalleryBanner from "../../components/gallery-banner/GalleryBanner";

import tuning from '../../assets/tools/20200921_171623.jpg';
import findTabs from '../../assets/tools/PicsArt_03-12-07.55.47.jpg';
import transpose from '../../assets/tools/ukesunkissed.png';
import tabBook from '../../assets/tools/20200921_155358.jpg';


const ToolsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let toolsGalleryBanner = [
    { src: tuning, alt: "Tune Ukulele", link: "https://ukutuner.com/" },
    { src: findTabs, alt: "Find Tabs", link: "https://ukutabs.com/" },
    { src: transpose, alt: "Transpose Chords", link: "http://www.logue.net/xp/index.htm" },
    { src: tabBook, alt: "Tab Book", link: "" },
  ];

  return (
    <div className="tools-page-container">
      <GalleryBanner theArray={toolsGalleryBanner}/>
    </div>
  );
}

export default ToolsPage;
