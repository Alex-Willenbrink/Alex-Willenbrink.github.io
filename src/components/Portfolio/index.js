import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Divider from "material-ui/Divider";

import "./Portfolio.css";
import CurrencyConverterImage from "./currency_converter_display_image.png";
import DynamicUrlImage from "./dynamic_url_shortener_display_image.png";
import SuperPeopleImage from "./super_people_display_image.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2
};
export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  getLocation = refName => {
    return ReactDOM.findDOMNode(this.refs[refName]).getBoundingClientRect().top;
  };

  render() {
    return (
      <div className="portfolio-container" ref="portfolio">
        <Slider {...settings} className="carousel">
          <div className="image-center">
            <a href="https://rate-super-people.herokuapp.com/" target="_blank">
              <img src={SuperPeopleImage} className="portfolio-image" />
            </a>
          </div>
          <div className="image-center">
            <a
              href="https://currency-exchange-rates-react.herokuapp.com/"
              target="_blank"
            >
              <img src={CurrencyConverterImage} className="portfolio-image" />
            </a>
          </div>
          <div className="image-center">
            <a
              href="https://dynamic-url-shortener.herokuapp.com/"
              target="_blank"
            >
              <img src={DynamicUrlImage} className="portfolio-image" />
            </a>
          </div>
        </Slider>

        <div className="portfolio-info-container">
          <br />
          <br />
          <br />
          <Divider className="divider portfolio-text" />
          <h2 className="portfolio-title">PORTFOLIO</h2>
        </div>
      </div>
    );
  }
}
