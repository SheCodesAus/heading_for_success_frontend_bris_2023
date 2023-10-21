import React from 'react';
import { Link } from 'react-router-dom';
import homeCartoon from '../../Images/HomePage-1-Cartoon.svg'
import './AdminHome.css'

function AdminHome() {
    return (
        <div>
            <h1>Welcome, Administrator</h1>
        <img src={homeCartoon} class="homeCartoon"></img>
            </div>
    );
}
export default AdminHome;
