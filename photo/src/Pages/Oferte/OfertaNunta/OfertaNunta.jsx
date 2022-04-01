import React from "react";
import "./OfertaNunta.scss";

import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import SliderItem1 from "../../../assets/Oferte/slider-oferte-1.jpg";
import SliderItem2 from "../../../assets/Oferte/slider-oferte-2.jpg";
import SliderItem3 from "../../../assets/Oferte/slider-oferte-3.jpg";
import SliderItem4 from "../../../assets/Oferte/slider-oferte-4.jpg";

const OfertaNunta = () => {
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
    <div className="oferta-nunta-page pb-5">
      <div className="main-container">
        <h2 className="font-size-56 custom-line-height py-4">Oferte Nunta</h2>
        <div className="pachete">
          <div className="pachet pachet-1 my-5">
            <Row className="w-100">
              <Col
                lg={7}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <ul>
                  <li>FOTOGRAF PRINCIPAL PE TOATĂ DURATA EVENIMENTULUI </li>
                  <li>SEDINTA FOTO ÎN ZIUA EVENIMENTULUI </li>
                  <li>1 VIDEOGRAF PE TOATĂ DURATA EVENIMENTULUI </li>
                  <li>SEDINȚĂ VIDEO ÎN ZIUA EVENIMENTULUI </li>
                  <li>FIEMULET REZUMAT DIN EVENIMENT (3-5 MINUTE) </li>
                  <li>
                    FOTOGRAFIILE SE PREDAU EDITATE (LUMINĀ, CONTRAST, CULOARE)
                    PE LINK ȘI STICK{" "}
                  </li>
                  <li>
                    FILMAREA SE PREDA EDITATA ÎN FORMAT FULL HD PE STICK (DURATA
                    FINALĂ 3-4 ORE){" "}
                  </li>
                  <li>CUTIE DIN PLASTIC PERSONALIZATĂ PENTRU STICK </li>
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
          <div className="pachet pachet-2 my-5">
            <Row className="w-100">
              <Col lg={5} className="ps-0">
                <Slider {...settings}>
                  <div className="slider-oferte-item">
                    <img src={SliderItem1} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem2} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem3} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem4} alt="wedding1" className="h-100" />
                  </div>
                </Slider>
              </Col>
              <Col
                lg={7}
                className="d-flex flex-column justify-content-center align-items-center pe-4"
              >
                <ul>
                  <li>1 FOTOGRAF PRINCIPAL PE TOATĂ DURATA EVENIMENTULUI </li>
                  <li>ŞEDINȚĂ FOTO ÎN ZIUA EVENIMENTULUI </li>
                  <li>1 VIDEOGRAF PE TOATĂ DURATA EVENIMENTULUI </li>
                  <li>
                    ŞEDINȚĂ VIDEO ÎN ZIUA EVENIMENTULUI FILMULET REZUMAT DIN
                    EVENIMENT (3-5 MINUTE){" "}
                  </li>
                  <li>FIEMULET REZUMAT DIN EVENIMENT (3-5 MINUTE) </li>
                  <li>
                    FOTOGRAFIILE SE PREDAU EDITATE (LUMINĂ, CONTRAST, CULOARE)
                    PE LINK ŞI STICK FILMAREA SE PREDĂ EDITATĂ ÎN FORMAT FULL HD
                    PE STICK (DURATA FINALĂ 3-4 ORE)
                  </li>
                  <li>COPIE STICK</li>
                  <li>
                    PARTICIPAREA ECHIPEI LA CUNUNIA CIVILĂ (PRIMĀRIE + ŞEDINȚA{" "}
                  </li>
                  <li>CUTIE DIN PLASTIC PERSONALIZATĂ PENTRU STICK </li>
                  <li>FOTOBOOK 30x30 CM-40 PACINI(APROX. 1o0 DE FOTOGRAFI) </li>
                  <li>COPIE FOTOBOOK 10X10 CM</li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="pachet pachet-3 my-5">
            <Row className="w-100">
              <Col
                lg={7}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <ul>
                  <li>1 FOTOGRAF PRINCIPAL PE TOATĂ DURATA EVENIMENTULUI </li>
                  <li>
                    ŞEDINȚĂ FOTO ÎN ZIUA EVENIMENTULUI A VIDEOGRAF PE TOATĂ
                    DURATA EVENIMENTULUI{" "}
                  </li>
                  <li>
                    ŞEDINȚĂ VIDEO ÎN ZIUA EVENIMENTULUI FILMULET REZZUMAT DIN
                    EVENIMENT (3-5 MİNUTE){" "}
                  </li>
                  <li>
                    FOTOGRAFIILE SE PREDAU EDITATE (LUMINĂ, CONTRAST, CU LOARE)
                    PE LINK ŞI STICK- FILMAREA SE PREDĂ EDITATĂ IN FORMAT FULL
                    HD PE STICK (DURATA FINALĂ 3-4 ORE){" "}
                  </li>
                  <li>CADRE CU DRONA </li>
                  <li>COPIE STICK</li>
                  <li>
                    PARTICIPAREA ECHIPELLA CUNUNIA CIVILA (PRIMARIE ŞE FOTO +
                    PETRECERE
                  </li>
                  <li>CUTIE DIN PLASTIC PERSONALIZATA PENTRU STICK </li>
                  <li>FOTOBOOK 3OX30 CM - 40 PAGINI (APROX. 100 DE FOTO)</li>
                  <li>FOTOBOOK 20X20 CM - 30 PAGINI </li>
                  <li>2X FOTOBOOK 10X10 CM (COPIE LA CEL 30X30 CM) </li>
                </ul>
              </Col>
              <Col lg={5} className="pe-0">
                <Slider {...settings}>
                  <div className="slider-oferte-item">
                    <img src={SliderItem4} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem1} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem3} alt="wedding1" className="h-100" />
                  </div>
                  <div className="slider-oferte-item">
                    <img src={SliderItem2} alt="wedding1" className="h-100" />
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

export default OfertaNunta;
