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
import ApplicantCard from '../../components/ApplicantCard/ApplicantCard';
import Count from '../../components/Count/Count';
import Footer from '../../components/Footer/Footer.jsx';

function ProgramDetails() {
    const [showForm, setShowForm] = useState(false);
    const [scholarshipButtonText, setScholarshipButtonText] = useState('Create Scholarship');
    const formRef = useRef(null);
    const toggleForm = () => {
        setShowForm(!showForm);
        if (showForm && formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (scholarshipButtonText == 'Close') {
            setScholarshipButtonText('Create Scholarship');
        } else {
            setScholarshipButtonText('Close');
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

    const num_places = programDetail.scholarship.reduce((total,scholarship) => total + scholarship.number_available, 0) ;
    const assigned_number = programDetail.applicant.filter((applicant) => applicant.scholarship !== null).length;

    const remaining_number = num_places - assigned_number;

    
    const formatDate = (date) => {
        const newDate = new Date(date);
        const options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          };

        return newDate.toLocaleDateString('en-GB', options);

    }
     
    
    return (
        <>
        { ( auth.token )? (
        <>
        
        <div className='application-page'>
            <h1> {programDetail.program_name}</h1>
            <div className='scholarship-statistics-group'>
                        <div className='scholarship-statistics-group-item'>
                            {/* <div className='scholarship-statistics-group-number'> */}
                            <Count 
                                number={programDetail.scholarship.length} 
                                duration='1'
                                increment='2'
                                />
                                
                            {/* </div>   */}
                            <div className='scholarship-statistics-group-label'>
                                Scholarships
                            </div>  
                        </div>    
                        <div className='scholarship-statistics-group-item'>
                            {/* <div className='scholarship-statistics-group-number'> */}
                            <Count 
                                number={programDetail.applicant.length} 
                                duration='1'
                                increment='1'
                                />                                
                                
                            {/* </div>   */}
                        <div className='scholarship-statistics-group-label'>
                            Applicants
                        </div>  
                    </div>    
                    <div className='scholarship-statistics-group-item'>
                        {/* <div className='scholarship-statistics-group-number'> */}
                        <Count 
                            number={assigned_number} 
                            duration='1'
                            increment='1'
                            />
                        {/* </div>   */}
                        <div className='scholarship-statistics-group-label'>
                            Assigned
                        </div>  
                    </div>    
                    <div className='scholarship-statistics-group-item'>
                        {/* <div className='scholarship-statistics-group-number'> */}
                            <Count 
                            number={remaining_number} 
                            duration='1'
                            increment='2'
                            />
                        {/* </div>   */}
                        <div className='scholarship-statistics-group-label'>
                            Available
                        </div>  
                    </div>                                                    
                </div>            
            <h3 className='scholarship-header'>Program Details</h3>
            
            <div className='scholarship-applicant-profile'>
            <li className='label'>
                <label>Location</label>
            </li>
            <li className='label'> {programDetail.location}</li>
            <li className='label'><label>Intake</label></li>
            <li className='label'> {programDetail.intake}</li>

            {/* <img src={programDetail.image} /> */}
            {/* <li className='label'>Status</li><li className='label'> {programDetail.status}</li> */}
            <li className='label'><label>Program Start</label></li>
            <li className='label'> {formatDate(programDetail.date_start)}</li>
            <li className='label'><label>Program End</label></li>
            <li className='label'>{formatDate(programDetail.date_end)}</li>
            <li className='label'><label>Application Start</label></li>
            <li className='label'> {formatDate(programDetail.application_date_start)}</li>
            <li className='label'><label>Application End</label></li>
            <li className='label'> {formatDate(programDetail.application_date_end)}</li>
            <li className='label'><label>Description</label></li>
            <li className='label'> {programDetail.description}</li>
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
                                programDetail = {programDetail}
                                page={'program'}
                                />
                            </li> 
                    </Fragment>
                    )
                })
 
            ):<p className='no-data'>No scholarships</p>}

            { programDetail.scholarship.length > 0   && (
                <ul className='scholarship-group'>
                    <li className='scholarship-items-footer'>
                        <div className='scholarship-items-header-label-left'>
                            <h4>Total: {programDetail.scholarship.length}</h4>
                        </div>
                        <div className='scholarship-items-header-label-display-none'>
                            <h4>{num_places}</h4>
                        </div>
                        <div className='scholarship-items-header-label-display-none'>
                            <h4>{assigned_number}</h4>
                        </div>
                        <div className='scholarship-items-header-label'>
                            <h4>{remaining_number}</h4>
                        </div>
                    </li>
                </ul>
            )}

            <h3 className='scholarship-header'>Applicants</h3>
            
            {programDetail.applicant.length > 0 ? (
                <ul className='applicant-group'>
                    <li className="applicant-items-header">

                    <div className='applicant-items-header-label-left'>
                            <h3>First Name
                            </h3>
                    </div>

                    <div className='applicant-items-header-label-left'>
                        <h3>Last Name
                        </h3>
                    </div>

                    <div className='applicant-items-header-label-display-none'>
                        <h3>Program
                        </h3>
                    </div>

                    <div className='applicant-items-header-label'>
                        <h3>Application Status
                        </h3>
                    </div>

                    <div className='applicant-items-header-label-display-none'>
                        <h3>Scholarship
                        </h3>
                    </div>

                </li>                    
            {   programDetail.applicant &&
                programDetail.applicant.map((applicantData, key) => {
                    let programName = '';
                    let scholarshipName = '';

                    if (applicantData.scholarship !== '') {
                        const foundScholarship = programDetail.scholarship.find((scholarshipData) => scholarshipData.id === applicantData.scholarship);

                        if (foundScholarship !== undefined ) {
                            scholarshipName = foundScholarship.organization;
                        }
                    }

             
                return (

                    <li className='applicant-items'>
                        <ApplicantCard
                            key={key}
                            applicantData={applicantData}
                            programName = {programDetail.program_name}
                            scholarshipName = {scholarshipName}
                            
                        />
                    </li>                    
                // <Fragment key={key}>   
                // <div className='applicant-detail'>
                //     <li key={key}>
                //         <Link to={`/application/${applicantData.id}/${id}`}>
                //             {`${applicantData.first_name} ${applicantData.last_name}`}
                //         </Link>
                //     </li>
                //     <li>
                //         {applicantData.status}
                //     </li>
                //     <li>
                //         {/* {applicantData.scholarship} */}
                //         {applicantData.scholarship > 0 && programDetail.scholarship.find((scholarship) => scholarship.id === parseInt(applicantData.scholarship)).organization}
                //     </li>    
                // </div>                
                // </Fragment>
                )
            })}
            </ul>
            ) : (<p className='no-data'>No applicants</p>)}
            
            <li className="applicant-items-footer">

                <div className='applicant-items-header-label-left'>
                        <h3>Total: {programDetail.applicant.length}
                        </h3>
                </div>

                <div className='applicant-items-header-label-left'>
                    <h3>
                    </h3>
                </div>

                <div className='applicant-items-header-label-display-none'>
                    <h3>
                    </h3>
                </div>

                <div className='applicant-items-header-label'>
                    <h3>
                    </h3>
                </div>

                <div className='applicant-items-header-label-display-none'>
                    <h3>
                    </h3>
                </div>

                </li>    
            
            <div className='scholarship-create-section'>
                <button className='scholarship-add-btn' onClick={toggleForm}>{scholarshipButtonText}</button>
            {showForm && (
                <div ref={formRef}>
                <ScholarshipForm />
                </div>
            )}
            </div>
            </div>
        </>
        ) : (
            <>
            <LoginForm />

            </>
        ) }
            <Footer />
        
        </>
    );
    
}

export default ProgramDetails;