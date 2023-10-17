import React from 'react';
// import PurpleLogo from /images/PurpleLogo.png;
import { Link } from 'react-router-dom';

function AdminHome() {
    return (
        <>
            <div id="purple-logo">
                <img src={PurpleLogo} alt="Purple Cupcake Logo" />
            </div>
        <div id="admin-home">
            <Link to="/program">
                <button type="submit">
                    Programs
                </button>
            </Link>
            <Link to="/applicant">
                <button type="submit">
                    Applications
                </button>
            </Link>
            <Link to="/user">
                <button type="submit">
                    Create Admin
                </button>
            </Link>
            <Link to="/scholarship">
                <button type="submit">
                    Scholarships
                </button>
            </Link>
        </div>
        </>
    );
}
export default AdminHome;


