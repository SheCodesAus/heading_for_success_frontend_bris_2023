import NavBar from '../NavBar/NavBar';
import React from 'react'
import '../../main.css'
import HomeIcon from "../../Images/HomeIcon.svg"
import "./header.css"
import "../../main.jsx"
import Shefunds from "../../Images/Shefunds.svg"
import HeroImg from "../../Images/TxsApplyHeroimg.svg"

function Header() {
    return (
        <div class="heroheader">
            <h1>Putting the <span>FUN</span>ds in female education and empowerment in the tech industry.</h1>
            <img id src={HeroImg}/>
        </div>
    );
}

export default Header;