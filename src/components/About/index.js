import React from "react";

import profile from "./profile.jpg";
import "./About.css";

const About = () =>
  <div className="about-container">
    <h2 id="title">About Me</h2>
    <img src={profile} id="profile-pic" />
    <p className="text">
      Hi, I'm Alex! <br />
      <br />
      I'm a full-stack developer currently located in St. Louis, Missouri. I
      love making full-stack applications with javascript technologies in an
      organized and timely fashion. My goal is to obtain a developer position
      with emphasis on creation of applications geared towards presentation and
      analysis of biological phenomena. I'm a quick study and am open and more
      than willing to learn any new technology! I also like playing soccer and
      hiking... regarded the weather has no objections.
    </p>
  </div>;

export default About;
