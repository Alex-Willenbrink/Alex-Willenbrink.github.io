import React, { Component } from "react";
import Contact from "../Contact";

import SvgIcon from "material-ui/SvgIcon";

import "./App.css";
import Navbar from "../Navbar";
import About from "../About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
