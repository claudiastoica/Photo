import React from "react";
import "./Hero.scss";

import Slider from "react-slick";

import SliderItem1 from "../../../assets/Homepage/slider-item-1.jpg";
import SliderItem2 from "../../../assets/Homepage/slider-item-2.jpg";
import SliderItem3 from "../../../assets/Homepage/slider-item-3.jpg";
import SliderItem4 from "../../../assets/Homepage/slider-item-4.jpg";
import SliderItem5 from "../../../assets/Homepage/slider-item-5.jpg";

export default function Hero() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="hero-section py-5">
      <div className="main-container">
        <div className="hero-slider">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={SliderItem1} alt="wedding1" className="m-auto h-100" />
            </div>
            <div className="slider-item">
              <img src={SliderItem2} alt="wedding1" className="m-auto h-100" />
            </div>
            <div className="slider-item">
              <img src={SliderItem3} alt="wedding1" className="m-auto h-100" />
            </div>
            <div className="slider-item">
              <img src={SliderItem4} alt="wedding1" className="m-auto h-100" />
            </div>
            <div className="slider-item">
              <img src={SliderItem5} alt="wedding1" className="m-auto h-100" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
