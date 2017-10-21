import React, { Component } from "react";
import ReactDOM from "react-dom";
import Divider from "material-ui/Divider";

import "./About.css";

export default class About extends Component {
  getLocation = refName => {
    return ReactDOM.findDOMNode(this.refs[refName]).getBoundingClientRect().top;
  };

  render() {
    return (
      <div className="about-container" ref="about">
        <p className="intro-about-text">Hi, I'm Alex!</p>
        <p className="about-text">
          I'm a full-stack developer currently located in St. Louis, Missouri. I
          love making full-stack applications with a particular affinity towards
          the mean stack. I have a passion for creation of applications geared
          towards presentation and analysis of biological phenomena.
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
  }
}
