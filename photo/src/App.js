import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Navbar from "./components/navbar/Navbar";

import "./App.scss";
import Nunta from "./Pages/Nunta/Nunta";
import CununieCivila from "./Pages/CununieCivila/CununieCivila";
import Botez from "./Pages/Botez/Botez";
import SedintaFoto from "./Pages/SedintaFoto/SedintaFoto";
import Diverse from "./Pages/Diverse/Diverse";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/nunta" element={<Nunta />} />
        <Route path="/cununie-civila" element={<CununieCivila />} />
        <Route path="/botez" element={<Botez />} />
        <Route path="/sedinta-foto" element={<SedintaFoto />} />
        <Route path="/diverse" element={<Diverse />} />
      </Routes>
    </div>
  );
};

export default App;
