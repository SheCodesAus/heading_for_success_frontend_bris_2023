import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipsIcon from '../../Images/Scholarships-Icon.svg'
import ApplicantsIcon from '../../Images/Applicants-Icon.svg'

function AdminHome() {
    return (
        <>
            <div id="admin-home">
            <div className="programs">
            <Link to="/program">
                <button type="submit">
                    Programs  
                        </button>
                    </Link>
                </div>

                <div className="applicants">                    
                    <Link to="/Applications">
                        <img src={ApplicantsIcon} width="150" height="150" />
                    </Link>
                </div>

                <div className="createAdmin">
                    <Link to="/CreateUser">
                        <button type="submit">
                    Create Admin
                </button>
                </Link>
                </div>

                <div className="scholarships">
                    <Link to="/scholarship">
                        <img src={ScholarshipsIcon} width="150" height="150" />
                    </Link>
                </div>
        </div>
        </>
    );
}
export default AdminHome;


