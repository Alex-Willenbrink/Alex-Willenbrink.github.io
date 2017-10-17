import React, { Component } from "react";
import SvgIcon from "material-ui/SvgIcon";

import "./App.css";
import Navbar from "../Navbar";
import Profile from "../Profile";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import About from "../About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Profile />
        <Portfolio />
        <About />
      </div>
    );
  }
}

export default App;
