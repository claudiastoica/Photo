import React from "react";
import "./OferteCununie.scss";

import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import SliderItem1 from "../../../assets/Oferte/slider-oferte-1.jpg";
import SliderItem2 from "../../../assets/Oferte/slider-oferte-2.jpg";
import SliderItem3 from "../../../assets/Oferte/slider-oferte-3.jpg";
import SliderItem4 from "../../../assets/Oferte/slider-oferte-4.jpg";

const OfertaCununie = () => {
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
    <div className="oferta-cununie-page pb-5">
      <div className="main-container">
        <h2 className="font-size-56 custom-line-height py-4">Oferta Cununie</h2>
        <div className="pachete">
          <div className="pachet pachet-1 my-5">
            <Row className="w-100">
              <Col
                lg={7}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <ul>
                  <li>1 FOTOGRAF PRINCIPAL PE TOATĂ DURATA EVENIMENTULUI </li>
                  <li>SEDINTĂ FOTO ÎN ZIUA EVENIMENTULUI </li>
                  <li>1 VIDEOGRAF PE TOATĂ DURATA EVENIMENTULUI </li>
                  <li>1VIDEOCRAF PE TOATĂ DURATA EVENIMENTULUI </li>
                  <li>FILMULET REZUMAT DIN EVENIMENT (2-5 MINUTE) </li>
                  <li>
                    FOTOGRAFILE SE PREDAU EDITATE (LUMINĂ, CONTRAST, CULOARE)
                    PELINK ŞI STICK
                  </li>
                  <li>
                    FILMAREAFEPREDA EDITATA IN FORMAT FULL HD PE STICK
                    (DURATAFINALĂ 2 ORE)
                  </li>
                  <li>FOTOBOOK 20X20 CM - 30 PAGINI </li>
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

export default OfertaCununie;
