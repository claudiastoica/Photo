import React from "react";
import "./Memories.scss";

import Photo1 from "../../../assets/Homepage/homepage-photos-1.jpg";
import Photo2 from "../../../assets/Nunta/Nunta23.jpg";
import Photo3 from "../../../assets/Nunta/Nunta20.jpg";

export default function Memories() {
  return (
    <section className="memories-section py-5">
      <div className="main-container">
        <div className="text-center pb-4 border-bottom w-100">
          <h2 className="gotham-bold font-size-56">
            Today's moments are tomorrow's memories
          </h2>
          <h4 className="gotham-medium font-size-24">
            Sunt Razvan Rizea si abia astept sa traspun emotia voastra prin
            lentila mea.
          </h4>
        </div>
        <div className="text-center">
          <div className="homepage-photos d-flex justify-content-center align-items-center py-4">
            <img src={Photo1} alt="wedding1" className="h-100" />
            <img src={Photo2} alt="wedding1" className="h-100" />
            <img src={Photo3} alt="wedding1" className="h-100" />
            <img src={Photo1} alt="wedding1" className="h-100" />
            <img src={Photo2} alt="wedding1" className="h-100" />
            <img src={Photo3} alt="wedding1" className="h-100" />
            <img src={Photo1} alt="wedding1" className="h-100" />
          </div>
          <button className="fotografii-btn">Vezi mai multe fotografii</button>
        </div>
      </div>
    </section>
  );
}
