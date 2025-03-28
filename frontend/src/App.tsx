import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Teams from "./Pages/Teams";
import Events from "./Pages/Events";
import Help from "./Pages/Help";
import Registration from "./Pages/Registration";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-black">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/help" element={<Help />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
    
  );
}

export default App;
