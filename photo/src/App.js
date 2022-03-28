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

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/nunta" element={<Nunta />} />
        <Route path="/cununie-civila" element={<CununieCivila />} />
        <Route path="/botez" element={<Botez />} />
        <Route path="/sedinta-foto" element={<SedintaFoto />} />
        <Route path="/diverse" element={<Diverse />} />
        <Route path="/oferte" element={<Oferte />} />
      </Routes>
    </div>
  );
};

export default App;
