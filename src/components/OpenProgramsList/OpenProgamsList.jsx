import React from "react";
import  "../OpenProgramsList/OpenProgramsList.css"
import { useOpenProgram } from "../../hooks/use-program";
import OpenPrograms from "../OpenPrograms/OpenPrograms";
// import "./OpenProgramsList.css";

function OpenProgramsList() {
    const { isLoading, error, program } = useOpenProgram();
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div id="openprograms-title">
        {/* <h2> <span>OPEN</span> programs, click to learn more and <span>APPLY!</span> </h2> */}
        <div id="open-programs"> 
            {program.map((programOpen) => (
                <OpenPrograms key={programOpen.id} programOpen={programOpen} />
            ))}
        </div>
        {/* <h2> <span>OPEN</span> programs, click to learn more and <span>APPLY!</span> </h2> */}

        </div>
    );
    
}
export default OpenProgramsList