import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../../assets/css/navbar.css"

export function Navbar() {
    const location = useLocation().pathname;

    return (
        <div className="navbar">
            <Link to="/" className={location == "/" ? "navbar__link navbar__link--active" : "navbar__link"}>Home</Link>
            <Link to="/page-a" className={location == "/page-a" ? "navbar__link navbar__link--active" : "navbar__link"}>Page A</Link>
            <Link to="/page-b" className={location == "/page-b" ? "navbar__link navbar__link--active" : "navbar__link"}>Page B</Link>
        </div>
    )
}