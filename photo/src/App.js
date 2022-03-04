// import { routes } from "./Utils/routes";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
