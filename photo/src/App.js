import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
