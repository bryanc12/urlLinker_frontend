import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/root.css";

import Homepage from "./pages/Homepage";
import Url from "./pages/Url";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/:url" element={<Url />} />
            </Routes>
        </Router>
    );
}

export default App;
