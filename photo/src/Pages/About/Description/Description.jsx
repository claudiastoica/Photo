import React from "react";
import "./Description.scss";

import Razva2 from "../../../assets/About/razvan-2.jpg";

export default function Description() {
  return (
    <section className="description-section py-5">
      <div className="main-container">
        <div className="img-container text-center pb-5">
          <img src={Razva2} alt="razvan" className="about-razvan" />
        </div>
        <div className="description-container">
          <p className="font-size-22">
            ”Călătoria mea ca și fotograf a început în urmă cu 10 ani, pe vremea
            cand ii eram ”ucenic” tatalui meu. O data cu emotiile ficarui
            eveniment mi am dezvoltat pasiunea pentru fotografie.
          </p>
          <p className="font-size-22">
            Îmi place să fotografiez toate formele de dragoste (Fotografie de
            nuntă, botez, ședințe foto de cuplu, familie și portret). Îmi plac
            emotiile, detaliile, îmi place să surprind momente reale, momente cu
            incarcatura emotionala, pline de zambete si entuziasm.
          </p>
          <p className="font-size-22">
            Cuvintele ce ma definesc si in care cred cu tarie sunt: respect si
            seriozitate.
          </p>
          <p className="font-size-22">
            Stiu cat de importante sunt momentele unice din viata ta, stiu sa ma
            bucur de ele si cel mai important, stiu sa le surprind intr-un mod
            original. Imi place seriozitatea si organizarea, iar un eveniment
            reusit are nevoie de acestea din ambele parti, atat din partea mea,
            cat si din partea clientului.
          </p>
          <p className="font-size-22">
            Fie ca esti la primul copil sau vrei sa faci un pas mare alaturi de
            perechea ta, ca vrei doar un shooting, sau sa imortalizezi mici
            evenimentele din viata sunt aici pentru tine, pentru a iesi totul ca
            la carte. In 10 ani am invatat cum sta treaba, asa ca am cativa asi
            in maneca.
          </p>
          <p className="font-size-22">
            Abia astept sa te intalnesc si sa iti transpun povestea prin lentila
            mea.”
          </p>
          <p className="caligraphy-txt text-center w-100">Razvan Rizea</p>
        </div>
      </div>
    </section>
  );
}
