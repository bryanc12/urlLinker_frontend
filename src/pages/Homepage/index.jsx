import React from "react";

import "../../assets/css/homepage.css"

import { Navbar } from "../../components/Navbar";
import { LogoSpin } from "../../components/LogoSpin";

export default function Homepage() {
    return (
        <>
            <Navbar />
            <div className="homepage">
                <div className="logoSpin"><LogoSpin /></div>
                <div className="title">A ReactJS boilerplate.</div>
                <div className="description">Written by <a className="descriptionLink" href="https://github.com/bryanc12/reactjs-boilerplate" target="_blank" rel="noopener noreferrer">Bryan</a></div>
            </div>
        </>
    )
}