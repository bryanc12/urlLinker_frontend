import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/root.css";

import Homepage from "./pages/Homepage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;
