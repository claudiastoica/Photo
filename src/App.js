import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Navigation from "./components/navbar/Navigation";

import "./App.scss";
import Nunta from "./Pages/Nunta/Nunta";
import CununieCivila from "./Pages/CununieCivila/CununieCivila";
import Botez from "./Pages/Botez/Botez";
import SedintaFoto from "./Pages/SedintaFoto/SedintaFoto";
import Diverse from "./Pages/Diverse/Diverse";
import Oferte from "./Pages/Oferte/Oferte";
import FAQ from "./Pages/FAQ/FAQ";
import Contact from "./Pages/Contact/Contact";
import OfertaNunta from "./Pages/Oferte/OfertaNunta/OfertaNunta";
import OfertaBotez from "./Pages/Oferte/OferteBotez/OferteBotez";
import OfertaCununie from "./Pages/Oferte/OferteCununie/OferteCununie";
import OfertaSedinteFoto from "./Pages/Oferte/OferteSedinteFoto/OferteSedinteFoto";
import OfertaSuplimentar from "./Pages/Oferte/OferteSuplimentar/OferteSuplimentar";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/nunta" element={<Nunta />} />
        <Route path="/cununie-civila" element={<CununieCivila />} />
        <Route path="/botez" element={<Botez />} />
        <Route path="/sedinta-foto" element={<SedintaFoto />} />
        <Route path="/diverse" element={<Diverse />} />
        <Route path="/oferte" element={<Oferte />} />
        {/* oferte */}
      {/* <Route path="/oferta-nunta" element={<OfertaNunta />} />
        <Route path="/oferta-botez" element={<OfertaBotez />} />
        <Route path="/oferta-cununie" element={<OfertaCununie />} />
        <Route path="/oferta-sedinta-foto" element={<OfertaSedinteFoto />} />
        <Route path="/oferta-suplimentar" element={<OfertaSuplimentar />} /> */}
      {/*end oferte */}
      {/* <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>  */}
    </div>
  );
};

export default App;
