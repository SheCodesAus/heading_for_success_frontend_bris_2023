import NavBar from '../NavBar/NavBar';
import React from 'react'
import '../../main.css'
import HomeIcon from "../../Images/HomeIcon.svg"
import "./header.css"
import "../../main.jsx"
import { Link } from 'react-router-dom';
import HeroImg from "../../Images/TxsApplyHeroimg.svg"
import OPIcon from "../../Images/OPIcon.svg"
// import Humaans1 from "../../Images/Humaans1"


function Headeradmin() {
    return (
        <>
            <div className="heroheaderadmin">
                <h1>Managing the <span>FUN</span>ds in female education and empowerment in the tech industry.</h1>
                {/* <img src={Humaans1} alt="Your image alt text" /> */}
            </div>
        </>
    );
}

export default Headeradmin;