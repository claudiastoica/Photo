import React from "react";
import "./OferteSuplimentar.scss";

import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import SliderItem1 from "../../../assets/Oferte/slider-oferte-1.jpg";
import SliderItem2 from "../../../assets/Oferte/slider-oferte-2.jpg";
import SliderItem3 from "../../../assets/Oferte/slider-oferte-3.jpg";
import SliderItem4 from "../../../assets/Oferte/slider-oferte-4.jpg";

const OfertaSuplimentar = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="oferta-suplimentar-page pb-5">
      <div className="main-container">
        <h2 className="font-size-56 custom-line-height py-4">
          Oferta Suplimentar
        </h2>
        <div className="pachete">
          <div className="pachet pachet-1 my-5">
            <Row className="w-100">
              <Col
                lg={7}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <ul>
                  <li>FOTOBOOK 20 X 20 CM 30 PAGINI - 350 LEI </li>
                  <li>FOTOBOOK 30 X 30 CM -40 PAGINI - 450 LEI </li>
                  <li>
                    COSTUMASE, COŞULET, PĂTURA 200 LEI COPIE STICK - 150 LEI{" "}
                  </li>
                </ul>
              </Col>
              <Col lg={5} className="pe-0">
                <Slider {...settings}>
                  <div className="slider-oferte-item">
                    <img src={SliderItem2} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem1} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem4} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem3} alt="wedding1" className="h-100" />
                  </div>
                </Slider>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertaSuplimentar;
