import NavBar from '../NavBar/NavBar';
import React from 'react'
import '../../main.css'
import HomeIcon from "../../Images/HomeIcon.svg"
import "./header.css"
import "../../main.jsx"
import { Link } from 'react-router-dom';
import HeroImg from "../../Images/TxsApplyHeroimg.svg"
import OPIcon from "../../Images/OPIcon.svg"


function Header() {
    return (
        <>
            <div class="heroheader">
                {/* <h1>Putting the <span>FUN</span>ds in female education and empowerment in the tech industry.</h1>
                <img id src="src/assets/Humaaans - Standing (3).svg"/> */}
                <img id src="src/assets/image white background (1).svg"/>
            </div>     
        </>
    );
}

export default Header;