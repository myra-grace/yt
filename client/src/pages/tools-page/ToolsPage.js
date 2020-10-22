import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./ToolsPage.css";
import ImageGallery from "react-image-gallery";
import Overview from "../../components/overview/Overview";
import tuning from "../../assets/tools/20200921_171623.jpg";
import findTabs from "../../assets/tools/PicsArt_03-12-07.55.47.jpg";
import transpose from "../../assets/tools/ukesunkissed.png";
import tabBook from "../../assets/tools/20200921_155358.jpg";

const ToolsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    {
      original: tuning,
      description: "Tune Ukulele",
      originalClass: "imgclass",
    },
    {
      original: findTabs,
      description: "Find Tabs",
      originalClass: "imgclass",
    },
    {
      original: transpose,
      description: "Transpose Chords",
      originalClass: "imgclass",
    },
    {
      original: tabBook,
      description: "Tab book",
      originalClass: "imgclass",
    },
  ];

  return (
    <div className="tools-page-container">
      <ImageGallery
        items={images}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        infinite={true}
      />
      <Overview
        title="Tune Ukulele"
        text="I use this website to tune my ukulele."
        link="https://ukutuner.com/"
        linktotext="ukutuner.com"
      />
      <div className="splurge-container">
        <p>
          It's great to tune by ear. Usually, I'll tune by ear; and I found that
          over the years, the ear will remember the pitch more closely! I've no
          perfect pitch, but with lots of practice, we can achive pretty great
          relative pitch.
        </p>
      </div>
      <Overview
        title="Find Tabs"
        text="I use a few sites to find tabs. Otherwise, I find it by ear! Come visit my favourite :)"
        link="https://ukutabs.com/"
        linktotext="ukutabs.com"
      />
      <div className="splurge-container">
        <p>
          There are many sources to find music! Other than{" "}
          <a href="https://ukutabs.com">Ukutabs</a>, I also use{" "}
          <a href="https://ultimate-guitar.com">Ultimate Guitar</a> and an app called{" "}
          <a href="https://play.google.com/store/apps/details?id=com.ukuleletabs&hl=en_CA&gl=US">
            Ukulele Tabs
          </a>
          .
        </p>
        <p>
          When all else fails, find music by ear! Some of the best places to
          suppliment finding music by ear '(aka widowing music)' are from
          sheets, videos, and midis from other instruments. My personal
          favourite is piano midis on YouTube. The piano is like a grid with
          clear notes. Watching and listening to a piano rendition of what
          you're trying to do on ukulele I a fantastic place to look. You can
          then transfer the knowlege note for note. Or use your ear to spice
          things up.
        </p>
      </div>
      <Overview
        title="Transpose Chords"
        text="I use this site to transpose music to suit my voice range or to change the chord set."
        link="https://logue.net/xp/index.htm"
        linktotext="Logue Music Services"
      />
      <div className="splurge-container">
        <p>
          Transposing music is great for two things. Transposing music basically
          means you're changing the pitch. Primarily, this is great for matching
          a song to your voice range. Secondarily, it's also great for changing
          the chordset ... for perhaps playing with a chordset that's easier to
          do. #hacks
        </p>
      </div>
      <Overview
        title="Tab Book"
        text="I make and use tab books to help me find out how to play songs by ear. More info coming soon!"
        link="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w"
        linktotext="My YouTube Channel"
      />
      <div className="splurge-container">
        <p>
          I make tab books to help me remember music. When I find music by ear,
          I will probably forget it if I don't record it somehow. One of my
          hobbies is book-binding. So in this way, I get to engage in to hobbies
          in one!
        </p>
        <p>
          My friends really like some of the music books I've made for them. I'd
          like to share them with y'all, But I don't know how to at the moment.
          We'll see if this goes anywhere.
        </p>
      </div>
    </div>
  );
};

export default ToolsPage;
