import React from 'react'
import OpenProgramDetails from '../../components/OpenProgramDetails/OpenProgramDetails';
import Footer from '../../components/Footer/Footer.jsx';

function ProgramOpenDetails() {
    return (
        <>
        <div className="open-program-page">
            < OpenProgramDetails />
            <div className="open-program-container">
            </div>
        </div>
        <div>
        <Footer />
        </div>
        </>
    );
}

export default ProgramOpenDetails