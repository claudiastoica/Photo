import React from "react";
import "./Hero.scss";

import Slider from "react-slick";

import Wedding1 from "../../../assets/Homepage/wedding1.jpg";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="hero-section">
      <div className="main-container">
        <div className="hero-slider">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={Wedding1} alt="wedding1" className="m-auto h-100" />
            </div>
            <div className="slider-item">
              <img src={Wedding1} alt="wedding1" className="m-auto h-100" />
            </div>
            <div className="slider-item">
              <img src={Wedding1} alt="wedding1" className="m-auto h-100" />
            </div>
            <div className="slider-item">
              <img src={Wedding1} alt="wedding1" className="m-auto h-100" />
            </div>
            <div className="slider-item">
              <img src={Wedding1} alt="wedding1" className="m-auto h-100" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
