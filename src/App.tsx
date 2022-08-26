import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/AboutMe" element={<AboutMe/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
