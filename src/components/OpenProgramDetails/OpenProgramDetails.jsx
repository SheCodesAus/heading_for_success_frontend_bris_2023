import { useOpenProgram } from "../../hooks/use-program";
import { useState, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';

function OpenProgramDetails() {

    const { id } = useParams();
    const { openProgramDetail, isLoading, error, setOpenProgramDetail } = useOpenProgram(id);

    console.log(openProgramDetail)
    
    return (
            <>
            <h1>Program Detail page for {openProgramDetail.program_name}.</h1>
            <p>Here we will see the program details, the related scholarships, the related applicants</p>
            <h3>Location: {openProgramDetail.location}</h3>
            <h3>Intake: {openProgramDetail.intake}</h3>
            <img src={openProgramDetail.image} />
            <h3>Description: {openProgramDetail.description}</h3>
            <h3>Status: {openProgramDetail.status}</h3>
            <h3>Date Start: {openProgramDetail.date_start}</h3>
            <h3>Application Date Start: {openProgramDetail.application_date_start}</h3>
            <h3>Application Date End: {openProgramDetail.application_date_end}</h3>
            <p></p>
            <button type="apply">Apply</button>
            </>
    );
    
}

export default OpenProgramDetails;