import React from "react";
import "./Reviews.scss";

import Slider from "react-slick";

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    arrows: false,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="reviews-section py-5">
      <div className="reviews-overlay"></div>
      <div className="main-container">
        <div className="reviews-slider">
          <Slider {...settings}>
            <div className="slider-item py-4">
              <h4 className="font-size-32 gotham-bold white-color mb-3">
                Ana Ioana
              </h4>
              <p className="font-size-24 gotham-medium white-color">
                Cu siguranta il recomand pe Razvan Rizea, un fotograf
                profesionist, a surprins momente unice in decursul botezului,
                datorita lui avem niste amintiri valoroase din aceasta zi
                speciala a micutei noastre!
              </p>
            </div>
            <div className="slider-item py-4">
              <h4 className="font-size-32 gotham-bold mb-3 white-color">
                Ana Ioana
              </h4>
              <p className="font-size-24 gotham-medium white-color">
                Cu siguranta il recomand pe Razvan Rizea, un fotograf
                profesionist, a surprins momente unice in decursul botezului,
                datorita lui avem niste amintiri valoroase din aceasta zi
                speciala a micutei noastre!
              </p>
            </div>
            <div className="slider-item py-4">
              <h4 className="font-size-32 gotham-bold mb-3 white-color">
                Ana Ioana
              </h4>
              <p className="font-size-24 gotham-medium white-color">
                Cu siguranta il recomand pe Razvan Rizea, un fotograf
                profesionist, a surprins momente unice in decursul botezului,
                datorita lui avem niste amintiri valoroase din aceasta zi
                speciala a micutei noastre!
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
