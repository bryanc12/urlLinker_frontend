import React from "react";

import "../../assets/css/logoSpin.css";

import { Logo } from "../../assets/img";


export function LogoSpin() {
    return (
        <img className="logoImg" src={Logo} alt="logo" />
    )
}