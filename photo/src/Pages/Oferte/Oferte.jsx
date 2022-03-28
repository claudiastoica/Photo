import React from "react";
import "./Oferte.scss";

import Nunta from "../../assets/Nunta/Nunta.jpg";
import Cununie from "../../assets/Oferte/Cununie.jpg";
import Botez from "../../assets/Oferte/Botez.jpg";
import SedintaFoto from "../../assets/Homepage/review-1.jpg";
import Suplimentar from "../../assets/Oferte/Suplimentar.jpeg";

const Oferte = () => {
  return (
    <div className="oferta-page pb-5">
      <div className="main-container">
        <div className="oferta-page-description">
          <h2 className="font-size-64 gotham-bold custom-line-height py-4">
            Oferte
          </h2>
          <p className="font-size-24 custom-line-height gotham-bold">
            <span className="gotham-light">„</span> „Daca nu are poza, nu
            s-a-ntamplat !”
          </p>
          <p className="font-size-24 custom-line-height">
            Există momente care nu trebuiesc uitate, iar pentru că memoria
            noastra tinde să fie selectivă, avem nevoie de fotografi pentru a
            păstra sentimente, pentru a proteja clipe prețioase din vetile
            noastre, fie ele un eveniment special, o zi frumoasă sau o simplă
            emoție. Pentru acest lucru este nevoie de un profesionist, care
            folosind talentul si tehnica imortalizează corect esența clipei,
            păstrând starea și gândurile ”de atunci”
          </p>
          <p className="font-size-24 custom-line-height">
            Dacă nu are poză, nu s-a-ntâmplat !"
          </p>
          <p className="font-size-24 custom-line-height">
            Impreuna cu colegii mei videografi va ofer servicii foto si/sau
            foto-video pentru evenimentele importante din viata voastra.
          </p>
          <p className="font-size-24 custom-line-height">
            Mai jos regasiti detalii despre pachetele foto-video corespunzatoare
            evenimentului dumneavoastra. Pachetele vor suferi usoare modificari
            in functie de preferintele clientului. ”
          </p>
        </div>
        <div className="cards-oferte">
          <div className="cards-oferte-row">
            <div className="card-oferta">
              <div className="card-oferta-title pt-4 font-size-24 gotham-bold">
                Nunta
              </div>
              <div>
                <img src={Nunta} alt="nunta" className="img-fluid" />
              </div>
              <div>
                <button
                  onClick={() => window.open("/oferta-nunta", "_self")}
                  className="oferte-btn"
                >
                  Selectati
                </button>
              </div>
            </div>
            <div className="card-oferta">
              <div className="card-oferta-title pt-4 font-size-24 gotham-bold">
                Botez
              </div>
              <div>
                <img src={Botez} alt="botez" className="img-fluid" />
              </div>
              <div>
                <button
                  onClick={() => window.open("/oferta-botez", "_self")}
                  className="oferte-btn"
                >
                  Selectati
                </button>
              </div>
            </div>
            <div className="card-oferta">
              <div className="card-oferta-title pt-4 font-size-24 gotham-bold">
                Cununie civila
              </div>
              <div>
                <img src={Cununie} alt="cununie-civila" className="img-fluid" />
              </div>
              <div>
                <button
                  onClick={() => window.open("/oferta-cununie", "_self")}
                  className="oferte-btn"
                >
                  Selectati
                </button>
              </div>
            </div>
          </div>
          <div className="cards-oferte-row">
            <div className="card-oferta">
              <div className="card-oferta-title pt-4 font-size-24 gotham-bold">
                Sedinta foto
              </div>
              <div>
                <img
                  src={SedintaFoto}
                  alt="sedinta-foto"
                  className="img-fluid"
                />
              </div>
              <div>
                <button
                  onClick={() => window.open("/oferta-sedinta-foto", "_self")}
                  className="oferte-btn"
                >
                  Selectati
                </button>
              </div>
            </div>
            <div className="card-oferta">
              <div className="card-oferta-title pt-4 font-size-24 gotham-bold">
                Suplimentar
              </div>
              <div>
                <img
                  src={Suplimentar}
                  alt="suplimentar"
                  className="img-fluid"
                />
              </div>
              <div>
                <button
                  onClick={() => window.open("/oferta-suplimentar", "_self")}
                  className="oferte-btn"
                >
                  Selectati
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferte;
