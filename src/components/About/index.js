import React from "react";
import Divider from "material-ui/Divider";

import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <p className="intro-about-text">Hi, I'm Alex!</p>
      <p className="about-text">
        I'm a full-stack developer currently located in St. Louis, Missouri. I
        love making full-stack applications with javascript technologies in an
        organized and timely fashion. My goal is to obtain a developer position
        with emphasis on creation of applications geared towards presentation
        and analysis of biological phenomena.
        <br />
        <br />
        I'm a quick study and am open and more than willing to learn any new
        technology! I also enjoy soccer and hiking... regarded the weather has
        no objections.
      </p>
      <br />
      <Divider className="divider" />

      <h2 className="about-title">About</h2>
    </div>
  );
};

export default About;
