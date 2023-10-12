import React from 'react';
import Goldlogo from /images/GoldLogo.png;
// import usePrograms from ""; 
// import ProgramCard from ""; // program cards will need to be imported from Mienke

function ApplicantHome() {

    // const { programs } = usePrograms();  //Mienke working on??

    return (
        <>
        <div className="cupcake-gold">
            <img src={Goldlogo} alt="Cupcake Logo" />
        </div>
        <div id="apply-instructions">    
            <h1>How To Apply</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div id="program-list">
                {programs.map((program, index) => {
                    return <ProgramCard program={program} index={index} />;
                })}  
                </div>    
        </div>
        </>
    );
}

export default ApplicantHome
