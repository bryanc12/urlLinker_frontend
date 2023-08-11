import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./assets/css/root.css"

import Homepage from './pages/Homepage';
import PageA from './pages/PageA';
import PageB from './pages/PageB';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/page-a" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
      </Routes>
    </Router>
  );
}

export default App;
