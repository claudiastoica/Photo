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
            <div className="text-center pb-4 border-bottom w-100">
              <h2 className="gotham-bold font-size-56">LET'S GET IN TOUCH!</h2>
              <p className="gotham-bold font-size-32">
                Abia aștept să aud o veste de la voi!
              </p>
              <p className="gotham-bold font-size-32">
                Hai să planificăm împreună detaliile pentru evenimentul vostru
                de vis.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
