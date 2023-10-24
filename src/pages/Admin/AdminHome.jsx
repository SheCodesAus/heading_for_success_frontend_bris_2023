import React from 'react';
import { Link } from 'react-router-dom';
import UpdatedCartoon from '../../Images/UpdatedCartoon.svg'
import './AdminHome.css'
import Header from '../../components/Header/header.jsx';

function AdminHome() {
    return (
        <div>
            <Header />
        <div class="adminhome">
            <h1>Welcome, Administrator</h1>
        <img src={UpdatedCartoon} class="homeCartoon"></img>
            </div>
            </div>
    );
}
export default AdminHome;