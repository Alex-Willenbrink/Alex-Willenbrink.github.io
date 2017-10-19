import React, { Component } from "react";
import ReactDOM from "react-dom";
import SvgIcon from "material-ui/SvgIcon";

import Scroll from "react-scroll";
import { scroller } from "react-scroll";

import "./App.css";
import Navbar from "../Navbar";
import Profile from "../Profile";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import About from "../About";

class App extends Component {
  state = {
    portfolioLocation: 0
  };

  scrollTo = async element => {
    await this.changeElementLocation(element);
    Scroll.animateScroll.scrollTo(this.state[`${element}Location`]);
  };

  changeElementLocation = refName => {
    this.setState({ [`${refName}Location`]: this.getElementLocation(refName) });
  };

  getElementLocation = refName => {
    return this.refs[refName].getLocation(refName);
  };

  render() {
    console.log("this.state: ", this.state);
    return (
      <div
        className="App"
        onClick={() => this.changeElementLocation("portfolio")}
      >
        <Navbar scrollTo={this.scrollTo} />
        <Profile />
        <Portfolio ref="portfolio" />
        <About ref="about" />
      </div>
    );
  }
}

export default App;
