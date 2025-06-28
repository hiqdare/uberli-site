import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Platzhalter für Tools */}
        <Route path="/qr" element={<div>QR Tool</div>} />
        <Route path="/password-share" element={<div>Passwort-Tool</div>} />
        <Route path="/edu-data" element={<div>Analyse-Tool</div>} />
      </Routes>
    </Router>
  );
}
