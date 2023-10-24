import { useOpenProgram } from "../../hooks/use-program";
import { useState, Fragment } from 'react';

import { useParams, Link, useNavigate } from 'react-router-dom';


function OpenProgramDetails() {

    const { id } = useParams();

    const { program, isLoading, error, setOpenProgramDetail } = useOpenProgram();

    const openProgramDetail= program.find(item => item.id === parseInt(id))

    const navigate = useNavigate();
    const toApplication=()=>{
        navigate('/apply',{state:{id: parseInt(id)}});
        }

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (openProgramDetail === undefined) {
        return (<div>Data doesn't exist for this program ID</div>)
    }

    
    return (
            <>
            <h1>Program Detail page for {openProgramDetail.program_name}.</h1>

            <h3>Location: {openProgramDetail.location}</h3>
            <img src={openProgramDetail.image} />
            <h3>Intake: {openProgramDetail.intake}</h3>

            <h3>Description: {openProgramDetail.description}</h3>
            <h3>Status: {openProgramDetail.status}</h3>
            <h3>Date Start: {openProgramDetail.date_start}</h3>
            <h3>Application Date Start: {openProgramDetail.application_date_start}</h3>
            <h3>Application Date End: {openProgramDetail.application_date_end}</h3>
            <p></p>

            <button type="apply" onClick={()=>{toApplication()}}> Apply</button>

            </>
    );
    
}

export default OpenProgramDetails;