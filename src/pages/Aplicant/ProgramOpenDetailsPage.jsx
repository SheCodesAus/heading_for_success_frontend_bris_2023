import React from 'react'
import OpenProgramDetails from '../../components/OpenProgramDetails/OpenProgramDetails';
import Footer from '../../components/Footer/Footer.jsx';
import "./ProgramOpenDetailsPage.css";
import OpenProgramsList from '../../components/OpenProgramsList/OpenProgamsList';

function ProgramOpenDetails() {
    return (
        <>
        <div id="list">
        <div id="one"></div>
        <div className="open-program-page">
            < OpenProgramDetails />     
        </div>
        <div id="two"></div>
        </div>
        <div> <Footer /></div>
        </>

    );
}

export default ProgramOpenDetails