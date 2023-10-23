import React from 'react'
import OpenPrograms from "../../components/OpenProgramsList/OpenProgamsList";

function ProgramOpenPage() {
    return (
        <div className="open-program-page">
            <div className="open-program_header">
                <h1>Our Current Programs Open for Applications</h1>
            </div>
            <div className="open-program-container">
                < OpenPrograms />
            </div>
        </div>
    );
}

export default ProgramOpenPage