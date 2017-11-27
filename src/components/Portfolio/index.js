import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Divider from "material-ui/Divider";

import portfolioInfo from "./portfolio_info";
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
    const portfolioSliderComponent = portfolioInfo.map(portfolioObj =>
      <div className="image-container" key={`${portfolioObj.classId}`}>
        <div id={portfolioObj.classId} className="portfolio-image">
          <div className="portfolio-info-container info">
            <h3 className="portfolio-info info">
              {portfolioObj.title}
            </h3>
            <p className="portfolio-info info">
              {portfolioObj.description}
            </p>
            <a
              className="portfolio-info info"
              target="_blank"
              href={portfolioObj.githubLink}
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
            {portfolioObj.techArray.map(tech =>
              <p
                className="portfolio-info tech"
                key={`${tech}${portfolioObj.classId}`}
              >
                {tech}
              </p>
            )}
          </div>
        </div>
      </div>
    );
    return (
      <div className="portfolio-container" ref="portfolio">
        <div className="portfolio-header-container">
          <h2 className="portfolio-title">PORTFOLIO</h2>
          <Divider className="divider portfolio-text" />
        </div>
        <br />
        <br />
        <Slider {...settings} className="carousel">
          {portfolioSliderComponent}
        </Slider>

        <div className="portfolio-title-container" />
      </div>
    );
  }
}
