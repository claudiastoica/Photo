import React from "react";
import "./Touch.scss";

import { Row, Col } from "react-bootstrap";

import Razva1 from "../../../assets/Homepage/razvan-1.jpg";

export default function Touch() {
  return (
    <section className="touch-section py-5">
      <div className="main-container">
        <Row>
          <Col lg={6}>
            <div className="text-center">
              <img src={Razva1} alt="razvan1" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-4 h-100 d-flex flex-column justify-content-center align-items-start">
              <div className=" pb-4 border-bottom w-100">
                <h2 className="gotham-bold font-size-56">
                  LET'S GET IN TOUCH!
                </h2>
                <p className="font-size-32">
                  Abia aștept să aud o veste de la voi!
                </p>
                <p className="font-size-24">
                  Hai să planificăm împreună detaliile pentru evenimentul vostru
                  de vis.
                </p>
              </div>
              <div className="contact-details pt-4">
                <p className="font-size-32">DETALII DE CONTACT</p>
                <p className="font-size-24 mb-0">contact@razvan.ro</p>
                <p className="font-size-24 mb-0">+4 0735 872 995</p>
                <p className="font-size-24 mb-0">București, România</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
