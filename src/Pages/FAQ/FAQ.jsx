import React from "react";
import "./FAQ.scss";

export default function FAQ() {
  return (
    <div className="faq-page">
      <section className="description-section py-5">
        <div className="main-container">
          <div className="faq-title text-center">
            <h2 className="font-size-64 gotham-bold custom-line-height py-4">
              Intrebari frecvente
            </h2>
            <p className="font-size-24 custom-line-height pb-5">
              Răspund mai jos celor mai frecvente întrebări care mi se adresează
              referitor la serviciile mele.
            </p>
          </div>
          <div className="faq-container">
            <p className="font-size-22 font-bold mb-0">
              1. Ce fel de servicii oferiți?
            </p>
            <p className="font-size-22 pb-4">
              În principal, ma axez pe tot ce insemna eveniment,fotografie de
              eveniment.
            </p>
            <p className="font-size-22 font-bold mb-0">
              2. Care este oferta de preț?
            </p>
            <p className="font-size-22 pb-4">
              Oferta de preț cuprinde manopera la care se adaugă opțional
              albume, fotograf suplimentar, sesiuni foto suplimentare. Pentru a
              primi oferta vă rog sa ma contactati prin una din metodele expuse,
              iar în cel mai scurt timp posibil vă voi răspunde. Prețul primit
              pentru serviciile fotografice nu include cheltuielile cu
              deplasarea (transport și cazare dacă este cazul) sau alte
              cheltuieli ce pot apărea.
            </p>
            <p className="font-size-22 font-bold mb-0">
              3. Trebuie să semnăm un contract și să achităm un avans?
            </p>
            <p className="font-size-22 pb-4">
              Da, vom semna un contract în prealabil iar la semnarea lui se va
              achita un avans.
            </p>
            <p className="font-size-22 font-bold mb-0">
              4. Cine face editarea fotografiilor și albumul?
            </p>
            <p className="font-size-22 pb-4">
              În cazul meu eu mă ocup personal de fotografiere, retușare și
              design-ul albumelor. Producția efectivă a albumului o las în grija
              unor laboratoare specializate, atent selectate pentru a se potrivi
              cu nivelul meu de așteptări.
            </p>
            <p className="font-size-22 font-bold mb-0">
              5. Credeți că este necesar să ne întâlnim față în față?
            </p>
            <p className="font-size-22 pb-4">
              Deși există argumente pentru o întâlnire fată în faţă înainte de
              contract putem să ne cunoaştem personal nu este neapărat nevoie să
              o facem. Dacă sunteți hotărâți să colaborăm, atunci cred că nu ar
              fi rău să ne întâlnim înainte de nuntă.
            </p>
            <p className="font-size-22 font-bold mb-0">
              6. Câte fotografii vom primi?
            </p>
            <p className="font-size-22 pb-4">
              Toate fotografiile capturate trec printr-un proces de selecţie şi
              procesare, clientul final primind doar fotografiile care întrunesc
              anumite criterii personale. Aceasta este o condiţie esenţială în
              colaborarea dintre noi. Nu discutăm niciodată despre o cantitate
              de fotografii, ci de fotografii bune care să ilustreze toate
              momentele evenimentului Dumneavoastră.
            </p>
            <p className="font-size-22 font-bold mb-0">
              7. Voi primi fotografii needitate/pot primi toate fotografiile,
              inclusiv cele needitate?
            </p>
            <p className="font-size-22 pb-4">
              Imaginile mele reprezintă viziunea mea asupra evenimentului vostru
              şi pentru că tehnologia modernă difuzează imaginile în mediul
              virtual cu o viteză uimitoare, nu livrez NICIODATĂ (şi fără
              supărare) fotografii neprocesate. E ca şi cum v-aş servi o supă
              neterminată dar vă povestesc eu ce bună este după ce o
              condimentez.
            </p>
            <p className="font-size-22 font-bold mb-0">
              8. Cum se procedează legat de predarea fotografiilor?
            </p>
            <p className="font-size-22 pb-4">
              Termenul de predare al fotografiilor este de 60 zile lucrătoare.
              În funcție de cât este de aglomerat sezonul, acest termen se poate
              modifica (în ambele sensuri) dar rămâne să comunicăm și să cădem
              de acord. Livrarea se face fizic si/sau printr-un transfer de
              fișiere mari (transfer.ro, wetransfer.com, mab.to, etc.)
            </p>
            <p className="font-size-22 font-bold mb-0">
              9. Care este procedura legată de album?
            </p>
            <p className="font-size-22 pb-4">
              Procedura e simplă: la câteva zile după predarea fotografiilor eu
              vă propun colajele în funcție de momentele evenimentului şi de
              viziunea personală. După ce primesc acceptul în scris pe e-mail
              asupra colajelor finale, în aproximativ 2 săptămâni veți primi
              albumul. Albumul vi se va înmâna personal.
            </p>
            <p className="font-size-22 font-bold mb-0">
              10. Noi nu suntem modele profesioniste. Ce ar trebui să facem noi
              în cadrul sesiunilor foto sau ziua nunții?
            </p>
            <p className="font-size-22 ">
              Voi aveți foarte puține lucruri de făcut: să fiți voi înșivă, iar
              în cadrul sesiunilor foto să respectați anumite sugestii pe care
              vi le dă fotograful legat de postură și orientare față de sursele
              de lumină.
            </p>
            <p className="font-size-22 text-center font-bold pt-5">
              Pentru orice alte întrebări, vă rog să nu ezitați să mă
              contactați.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
