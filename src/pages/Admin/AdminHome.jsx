import React from 'react';
import { Link } from 'react-router-dom';
// import './AdminHome.css'

function AdminHome() {
    return (
        <>
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
