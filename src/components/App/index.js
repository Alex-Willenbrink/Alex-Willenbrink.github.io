import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import swal from "sweetalert2/dist/sweetalert2.all.min.js";

import Scroll from "react-scroll";

import "./App.css";
import Navbar from "../Navbar";
import Profile from "../Profile";

import Portfolio from "../Portfolio";
import About from "../About";
import Footer from "../Footer";

class App extends Component {
  state = {
    portfolioLocation: 0
  };

  componentDidMount() {
    const { email } = queryString.parse(this.props.location.search);
    if (email === "success") {
      swal({
        type: "success",
        title: "Success!",
        text: "Message Sent",
        timer: 2000
      });
    }
    this.props.history.push("/");
  }

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
    return (
      <div className="App">
        <Navbar scrollTo={this.scrollTo} />
        <Profile />
        <Portfolio ref="portfolio" />
        <About ref="about" />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
