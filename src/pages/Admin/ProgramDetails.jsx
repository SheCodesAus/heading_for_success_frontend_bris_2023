import './ProgramDetails.css'
import ScholarshipForm from "../../components/NewScholarship/ScholarshipForm";
import { useProgramDetails } from "../../hooks/use-program-details";
import { useState, Fragment, useRef, useEffect } from 'react';
import { useAuth } from "../../hooks/use-auth";
import { useParams, Link } from 'react-router-dom';
import LoginForm from "../../components/AdminLogin/LoginForm";
import MessageCard from "../../components/MessageCard/MessageCard";
import Spinner from "../../components/Spinner/Spinner";
import ScholarshipCard from "../../components/ScholarshipCard/ScholarshipCard";
import Footer from '../../components/Footer/Footer.jsx';

function ProgramDetails() {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);
    const toggleForm = () => {
        setShowForm(!showForm);
        if (showForm && formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        if (showForm && formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [showForm]);

    const {auth, setAuth} = useAuth();
    const { id } = useParams();
    const { programDetail, isLoading, error, setProgramDetail } = useProgramDetails(id);
    const [messageBlock, setMessageBlock] = useState(false);

    if (isLoading) {
        return (<Spinner />)
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
        <div className='application-page'>
        { ( auth.token )? (
        <>
        

            <h1> {programDetail.program_name}</h1>
            <h3 className='scholarship-header'>Program Details</h3>
            
            <div className='scholarship-applicant-profile'>
            <h3>Location</h3><h3> {programDetail.location}</h3>
            <h3>Intake</h3><h3> {programDetail.intake}</h3>
            <h3>Description</h3><h3> {programDetail.description}</h3>
            {/* <img src={programDetail.image} /> */}
            <h3>Status</h3><h3> {programDetail.status}</h3>
            <h3>Date Start</h3><h3> {programDetail.date_start}</h3>
            <h3>Date End</h3><h3>{programDetail.date_end}</h3>
            <h3>Application Date Start</h3><h3> {programDetail.application_date_start}</h3>
            <h3>Application Date End</h3><h3> {programDetail.application_date_end}</h3>
            </div>
            <h3 className='scholarship-header'>Scholarships</h3>
            {/* { programDetail.scholarship &&
                programDetail.scholarship.map((scholarshipData, key) => {
                    return (
                    <Fragment key={key}>    
                        <li key={key}>
                                {scholarshipData.organization}
                        </li>
                    </Fragment>
                    )
                })
            } */}
            { programDetail.scholarship.length > 0   && (
            <ul className='scholarship-group'>
                            <li className='scholarship-items-header'>
                                <div className='scholarship-items-header-label-left'>
                                    <h4>Scholarship</h4>
                                </div>
                                <div className='scholarship-items-header-label-display-none'>
                                    <h4>Places</h4>
                                </div>
                                <div className='scholarship-items-header-label-display-none'>
                                    <h4>Assigned</h4>
                                </div>
                                <div className='scholarship-items-header-label'>
                                    <h4>Remaining</h4>
                                </div>
                                <div className='scholarship-items-header-label'>
                                    <h4>Assigned</h4>
                                </div>                         
                            </li>
                            </ul>
                )}
            
            { programDetail.scholarship.length > 0 ? (
                programDetail.scholarship.map((scholarshipData, key) => {
                    return (
                    <Fragment key={key}>    
                            <li className='scholarship-items'>
                            <ScholarshipCard 
                                id={key}
                                scholarshipData={scholarshipData} 
                                applicantDetail = {programDetail.applicant}
                                />
                            </li> 
                    </Fragment>
                    )
                })
            

            ):<p className='no-data'>No scholarships</p>}

            <h3 className='scholarship-header'>Applicants</h3>
            
            {programDetail.applicant.length > 0 ? (
                <ul>
            {   programDetail.applicant &&
                programDetail.applicant.map((applicantData, key) => {
                return (
                <Fragment key={key}>   
                <div className='applicant-detail'>
                    <li key={key}>
                        <Link to={`/application/${applicantData.id}/${id}`}>
                            {`${applicantData.first_name} ${applicantData.last_name}`}
                        </Link>
                    </li>
                    <li>
                        {applicantData.status}
                    </li>
                    <li>
                        {/* {applicantData.scholarship} */}
                        {applicantData.scholarship > 0 && programDetail.scholarship.find((scholarship) => scholarship.id === parseInt(applicantData.scholarship)).organization}
                    </li>    
                </div>                
                </Fragment>
                )
            })}
            </ul>
            ) : (<p className='no-data'>No applicants</p>)}
            

            
            <button onClick={toggleForm}>Add a new scholarship to this program</button>
            {showForm && (
                <div ref={formRef}>
                <ScholarshipForm />
                <Footer />
                </div>
            )}
        </>
        ) : (
            <>
            <LoginForm />
            <Footer />
            </>
        ) }
        </div>
    );
    
}

export default ProgramDetails;