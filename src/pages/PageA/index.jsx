import React from "react";

import "../../assets/css/pageA.css"

import { Navbar } from "../../components/Navbar";
import { Meow1 } from "../../assets/img";

export default function PageA() {
    return (
        <>
            <Navbar />
            <div className="page">
                <div className="meowTitle">Page A</div>
                <img className="meowImg" src={Meow1} alt="Meow" />
                <div className="meowText">This is a meow Page A.</div>
            </div>
        </>
    )
}