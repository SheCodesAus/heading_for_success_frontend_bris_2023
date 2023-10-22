import NavBar from '../NavBar/NavBar';
import React from 'react'
import '../../main.css'
// import AdminLoginPink from "../../Images/AdminLoginPink.svg"
import HomeIcon from "../../Images/HomeIcon.svg"
import "./header.css"
import "../../main.jsx"
import { Link } from 'react-router-dom';
import Shefunds from "../../Images/Shefunds.svg"

function Header() {
    return (
        <>
        <div class="heroheader">
            <div>
             <Link to= "/"> 
            <img src={HomeIcon} class="HomeIcon"/>
                    </Link>
                </div>
                <div class="headerlogo" >
                <Link to= "/"> 
                        <img id src={Shefunds} />
                    </Link>
                    </div>
                    <div>
                    {/* <NavBar /> */}
                    <div class="adminhero">
                    <Link to= "/login"> 
                        {/* <img src={AdminLoginPink} /> */}
                        </Link>
                        </div>
            </div>
            </div>
            </>
    );
}

export default Header;