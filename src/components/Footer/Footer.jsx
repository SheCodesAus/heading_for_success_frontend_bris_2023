import "./Footer.css"
import React from 'react'
import '../../main.css'
import Shefunds from "../../Images/Shefunds.svg"

function Footer() {
    return (
        <h1>Powered by <img id="footerImage" src={Shefunds} /> </h1>
    );
}

export default Footer;
