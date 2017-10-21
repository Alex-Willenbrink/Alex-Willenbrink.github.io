import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Divider from "material-ui/Divider";

import "./Portfolio.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2
};
export default class Portfolio extends Component {
  getLocation = refName => {
    return ReactDOM.findDOMNode(this.refs[refName]).getBoundingClientRect().top;
  };

  render() {
    return (
      <div className="portfolio-container" ref="portfolio">
        <Slider {...settings} className="carousel">
          <div className="image-container">
            <div id="super-people" className="portfolio-image">
              <div className="portfolio-info-container info">
                <h3 className="portfolio-info info">Rate Super People</h3>
                <p className="portfolio-info info">
                  A website where users can rate their favorite super powered
                  people and view the cumulative super ratings by the community
                </p>
                <a
                  className="portfolio-info info"
                  target="_blank"
                  href="https://github.com/Alex-Willenbrink/rate_super_people"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
              </div>
              <div className="portfolio-info-container">
                <h4 className="portfolio-info tech">
                  <strong>Technologies</strong>
                </h4>
                <Divider className="portfolio-info-divider tech" />
                {[
                  "Node.js",
                  "Express.js",
                  "Passport.js",
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                  "Handlebars.js",
                  "Marvel API",
                  "D3.js",
                  "MongoDB",
                  "Mongoose"
                ].map(tech =>
                  <p
                    className="portfolio-info tech"
                    key={`${tech}super-people`}
                  >
                    {tech}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="image-container">
            <div id="dinnerbell" className="portfolio-image">
              <div className="portfolio-info-container info">
                <h3 className="portfolio-info info">Dinnerbell</h3>
                <p className="portfolio-info info">
                  The hottest social mealtime application on the market! Users
                  have options to find recipes and assemble meals with their
                  friends from a large collection of well- established recipes
                </p>
                <a
                  className="portfolio-info info"
                  target="_blank"
                  href="https://github.com/Alex-Willenbrink/project_dinnerbell"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
              </div>
              <div className="portfolio-info-container">
                <h4 className="portfolio-info tech">
                  <strong>Technologies</strong>
                </h4>
                <Divider className="portfolio-info-divider tech" />
                {[
                  "Node.js",
                  "Express.js",
                  "Passport.js",
                  "Facebook OAuth",
                  "Google OAuth",
                  "React.js",
                  "Redux.js",
                  "HTML5",
                  "CSS3",
                  "MongoDB",
                  "Mongoose",
                  "Edamam API"
                ].map(tech =>
                  <p className="portfolio-info tech" key={`${tech}dinnerbell`}>
                    {tech}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="image-container">
            <div id="currency-exchange-rates" className="portfolio-image">
              <div className="portfolio-info-container info">
                <h3 className="portfolio-info info">Currency Exchange Rates</h3>
                <p className="portfolio-info info">
                  A react application for tracking and displaying historical
                  currency exchange rates
                </p>
                <a
                  className="portfolio-info info"
                  target="_blank"
                  href="https://github.com/Alex-Willenbrink/currency_exchange_rates_react"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
              </div>
              <div className="portfolio-info-container">
                <h4 className="portfolio-info tech">
                  <strong>Technologies</strong>
                </h4>
                <Divider className="portfolio-info-divider tech" />
                {["React.js"].map(tech =>
                  <p className="portfolio-info tech" key={`${tech}currency`}>
                    {tech}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Slider>

        <div className="portfolio-title-container">
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
