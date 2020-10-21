import React, { useEffect, useState, useRef } from "react";
import Banner from "../../components/banner/Banner";
import Overview from "../../components/overview/Overview";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">
      <div id="banner-about">
        <Banner
          catch="Improve your playing"
          title="Lo-Fi Tutorials"
          linktotext="Go to YouTube channel"
          link="https://youtu.be/-I4kyYMQBLY"
        />
      </div>
      <div id="overview-about">
        <Overview
          title="your favourite songs"
          text="Lo-fi percussive ukulele tutorials. Play the melodie and the beat at the same time!"
          link="https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w"
          linktotext="Go to YouTube channel"
        />
      </div>
      <div className="about-text">
        <p>
          I started playing ukulele around 2008. Before that, I played guitar, a
          little bit of piano, and then bass. The great thing about playing
          multiple instruments is that the knowledge is transferable 🧠 It's a
          real thing! Search up "transferable skills."
        </p>

        <p>
          How I started my YouTube channel was a mistake. I couldn't always find
          the tabs or chords of songs I wanted to play. So I started finding
          them by ear and recording them by memory or through audio recording.
          One day, I decided to arrange a mini tutorial for a tune from a movie
          which seemed impossible to find! And to my surprise, it got lots of
          views 👀
        </p>

        <p>
          I continued to record mini tutorials. Record both for my future self
          ... since I couldn't remember all these songs anymore, and also for
          anyone curious about percussive playing! What really brought a ton of
          viewers was a request from a friend. "In Your Arms." From there, you
          guys came along and showed much love 💜
        </p>
        <p>
          I remember when I started experimenting with percussive playing. I
          wished there was a place I could go to learn and talk about it. Well,
          turns out I'm not the only one. So here we are! Welcome aboard the noodle_ship 🚢
        </p>
      </div>
    </div>
  );
};

export default About;
