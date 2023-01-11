import React from "react";
import "./Header.css";
import logoHeader from "../../assets/images/Logo.png";
import Navbar from "../Navbar/Navbar";

function Header() {
    return(
        <header>
            <img src={logoHeader} className="img-header" alt="Logo"/>
            <Navbar />
        </header>
    );
}

export default Header;