import React from "react";
import { Link } from "react-router-dom";
import getOpenPrograms  from "../../api/get-open-programs";
import useOpenProgram from "../../use-program.js";


function OpenProgramsList() {
    const { isLoading, error } = useOpenProgram();
    const [program, setProgram] = getOpenPrograms();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            {program.map((programOpen) => (
                <OpenPrograms key={programOpen.id} programOpen={programOpen} />
            ))}
        </div>
    );
    function OpenPrograms(props) {
        const { programOpen } = props;
        const programPath = `get-open-programs/${programOpen.id}`;

        return (
            <div className='openprogram'>
                <Link to={programPath} >
                    <img src={programOpen.image} alt={programOpen.program_name} />
                    <h2>{programOpen.program_name}</h2>
                    <h3>{programOpen.location}</h3>
                </Link>
            </div>
        );
    }
}
export default OpenProgramsList