import React from 'react';
import { Link } from 'react-router-dom';

import ScholarshipsIcon from '../../Images/Scholarships-Icon.svg'
import ApplicantsIcon from '../../Images/Applicants-Icon.svg'
import ProgramsIcon from '../../Images/Programs-Icon.svg'
import CreateAdminIcon from '../../Images/CreateAdmin-Icon.svg'

function AdminHome() {
    return (
        <>
            <div id="admin-home">
            <div className="programs">
            <Link to="/programs">
            <img src={ProgramsIcon} width="150" height="150" />
                    </Link>
                </div>

                <div className="applicants">                    
                    <Link to="/program/:id/application">
                        <img src={ApplicantsIcon} width="150" height="150" />
                    </Link>
                </div>

                <div className="createAdmin">
                    <Link to="/user">
                    <img src={CreateAdminIcon} width="150" height="150" />
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
