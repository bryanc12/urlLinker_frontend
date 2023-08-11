import React from "react";

import "../../assets/css/pageA.css"

import { Navbar } from "../../components/Navbar";
import { Meow2 } from "../../assets/img";

export default function PageA() {
    return (
        <>
            <Navbar />
            <div className="page">
                <div className="meowTitle">Page B</div>
                <img className="meowImg" src={Meow2} alt="Meow" />
                <div className="meowText">This is a meow Page B.</div>
            </div>
        </>
    )
}