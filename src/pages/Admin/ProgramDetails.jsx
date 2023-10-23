import React from 'react';
import ScholarshipForm from "../../components/NewScholarship/ScholarshipForm";
import { useProgramDetails } from "../../hooks/use-program-details";
import { useState, Fragment } from 'react';
import { useAuth } from "../../hooks/use-auth";
import { useParams, Link } from 'react-router-dom';
import LoginForm from "../../components/AdminLogin/LoginForm";
import MessageCard from "../../components/MessageCard/MessageCard";
import Spinner from "../../components/Spinner/Spinner";

import './ProgramDetails.css';

function ProgramDetails() {
    const { auth, setAuth } = useAuth();
    const { id } = useParams();
    const { programDetail, isLoading, error, setProgramDetail } = useProgramDetails(id);
    const [messageBlock, setMessageBlock] = useState(false);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <div>
                <MessageCard
                    message={`Error with program details - ${error.message}`}
                    messageType='header'
                />
            </div>
        );
    }

    return (
        <div className="program-details-container">
            <h1 className="program-header"> {programDetail.program_name}.</h1>
            <div className="program-content">
                {auth.token ? (
                    <>
                        <div className="column">
                            {/* <p>Here we will see the program details</p> */}
                            <h3><span className="field-name">Location:</span> <span className="field-value">{programDetail.location}</span></h3>
                            <h3><span className="field-name">Intake:</span> <span className="field-value">{programDetail.intake}</span></h3>
                            <h3><span className="field-name">Description:</span> <span className="field-value">{programDetail.description}</span></h3>
                            <img src={programDetail.image} alt={programDetail.program_name} />
                            <h3><span className="field-name">Status:</span> <span className="field-value">{programDetail.status}</span></h3>
                            <h3><span className="field-name">Date Start:</span> <span className="field-value">{programDetail.date_start}</span></h3>
                            <h3><span className="field-name">Date End:</span> <span className="field-value">{programDetail.date_end}</span></h3>
                            <h3><span className="field-name">Application Date Start:</span> <span className="field-value">{programDetail.application_date_start}</span></h3>
                            <h3><span className="field-name">Application Date End:</span> <span className="field-value">{programDetail.application_date_end}</span></h3>
                        </div>
                        <div className="column">
                            <div className="related-scholarships-container">
                                <h2>Scholarships</h2>
                                <div className="scholarships-columns">
        <div className="scholarship-column">
            {programDetail.scholarship &&
                programDetail.scholarship.slice(0, Math.ceil(programDetail.scholarship.length / 2)).map((scholarshipData, key) => (
                    <Fragment key={key}>
                        <li key={key}>
                            {scholarshipData.organization}
                        </li>
                    </Fragment>
                ))
            }
        </div>
        <div className="scholarship-column">
            {programDetail.scholarship &&
                programDetail.scholarship.slice(Math.ceil(programDetail.scholarship.length / 2)).map((scholarshipData, key) => (
                    <Fragment key={key}>
                        <li key={key}>
                            {scholarshipData.organization}
                        </li>
                    </Fragment>
                ))
            }
        </div>
    </div>
                            </div>
                            <div className="related-applicants-container">
                                <h2>Applicants</h2>
                                {programDetail.applicant &&
                                    programDetail.applicant.map((applicantData, key) => (
                                        <Fragment key={key}>
                                            <li key={key}>
                                                <Link to={`/application/${applicantData.id}/${id}`}>
                                                    {`${applicantData.first_name} ${applicantData.last_name}`}
                                                </Link>
                                            </li>
                                        </Fragment>
                                    ))}
                            </div>
                            <div className="scholarship-form-container">
                                {/* <h2>Scholarship Form</h2> */}
                                <ScholarshipForm />
                            </div>
                        </div>
                    </>
                ) : (
                    <LoginForm />
                )}
            </div>
        </div>
    );
}

export default ProgramDetails;
