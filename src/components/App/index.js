import React, { Component } from "react";
import ReactDOM from "react-dom";
import SvgIcon from "material-ui/SvgIcon";

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

  showLocation = element => {
    console.log(element.getBoundingClientRect());
    const { x, y, width, height, top } = element.getBoundingClientRect();
    this.setState({ portfolioLocation: y });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App" onClick={this.handleTest}>
        <Navbar portfolioLocation={this.state.portfolioLocation} />
        <Profile />
        <Portfolio showLocation={this.showLocation} />
        <About />
      </div>
    );
  }
}

export default App;
