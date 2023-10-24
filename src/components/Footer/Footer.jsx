import "./Footer.css"
import React from 'react'
import '../../main.css'
import Shefunds from "../../Images/Shefunds.svg"

function Footer() {
    return (
        <div id="footer">
        <p>Powered by</p><img src={Shefunds} /><p>© Heading for Success 2023</p>
        </div>
        );
}

export default Footer;
