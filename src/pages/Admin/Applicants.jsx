import './Applicants.css'
import { useApplicant } from "../../hooks/use-applicant";
import { useScholarship } from "../../hooks/use-scholarship";
import { usePrograms } from "../../hooks/use-programs";
import { useAuth } from "../../hooks/use-auth";
import { useState } from "react";
import LoginForm from "../../components/AdminLogin/LoginForm";
import ApplicantCard from "../../components/ApplicantCard/ApplicantCard";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';


function Applicants() {

    const {auth, setAuth} = useAuth();
    
    const { applicant, isLoading, error, setApplicant } = useApplicant();
    const { scholarship, isLoadingScholarship, errorScholarship, setScholarship } = useScholarship();
    const { allPrograms, isLoadingallPrograms, errorAllPrograms, setAllPrograms } = usePrograms();

    // const [sortToggleAsc, setSortToggleAsc] = useState(true);
    // const [sortToggleDesc, setSortToggleDesc] = useState(false);
    // const [sortToggleAscLast, setSortToggleAscLast] = useState(true);
    // const [sortToggleDescLast, setSortToggleDescLast] = useState(false);
    // const [sortToggleAscProg, setSortToggleAscProg] = useState(true);
    // const [sortToggleDescProg, setSortToggleDescProg] = useState(false);
    // const [sortToggleAscAppStatus, setSortToggleAscAppStatus] = useState(true);
    // const [sortToggleDescAppStatus, setSortToggleDescAppStatus] = useState(false);

    if (isLoading || isLoadingScholarship || isLoadingallPrograms ) {
        return (<Spinner />)
    }

    if (error || errorScholarship || errorAllPrograms ) {
        return (<p>{error.message}</p>);
    }    


    const handleClick = (event) => {
        // const text = event.target.innerText;
        // console.log("evt click",event, event.target, event.target.id, event.target.innerText);
        // if (text === 'Program' || event.target.id === 'program') {
        //     console.log(sortToggleAsc);
            
        //     const sortedProgramDetail = [...allPrograms].sort((a, b) => {
        //         if (sortToggleAsc) {
        //             return a.program_name.localeCompare(b.program_name);
        //         } else {
        //             return b.program_name.localeCompare(a.program_name);
        //         }
        //     }); 
        //     if (sortToggleAsc) {
        //         setSortToggleDesc(true);
        //         setSortToggleAsc(false);  

        //     } else {
        //         setSortToggleDesc(false);  
        //         setSortToggleAsc(true); 
        //     }
        //     setAllPrograms(sortedProgramDetail);
        // }

        // if (text === 'Location' || event.target.id === 'location') {
        //     console.log(sortToggleAscLoc);
            
        //     const sortedProgramDetail = [...allPrograms].sort((a, b) => {
        //         if (sortToggleAscLoc) {
        //             return a.location.localeCompare(b.location);
        //         } else {
        //             return b.location.localeCompare(a.location);
        //         }
        //     }); 
        //     if (sortToggleAscLoc) {
        //         setSortToggleDescLoc(true);
        //         setSortToggleAscLoc(false);  

        //     } else {
        //         setSortToggleDescLoc(false);  
        //         setSortToggleAscLoc(true); 
        //     }
        //     setAllPrograms(sortedProgramDetail);
        // }

        // if (text === 'Program Status' || event.target.id === 'program-status') {
        //     console.log(sortToggleAscProgStat);
            
        //     const sortedProgramDetail = [...allPrograms].sort((a, b) => {
        //         if (sortToggleAscProgStat) {
        //             return a.date_start.localeCompare(b.date_start);
        //         } else {
        //             return b.date_start.localeCompare(a.date_start);
        //         }
        //     }); 
        //     if (sortToggleAscProgStat) {
        //         setSortToggleDescProgStat(true);
        //         setSortToggleAscProgStat(false);  

        //     } else {
        //         setSortToggleDescProgStat(false);  
        //         setSortToggleAscProgStat(true); 
        //     }
        //     setAllPrograms(sortedProgramDetail);
        // }

        // if (text === 'Application Status' || event.target.id === 'application-status') {
        //     console.log(sortToggleAscAppStatus);
            
        //     const sortedProgramDetail = [...allPrograms].sort((a, b) => {
        //         if (sortToggleAscAppStatus) {
        //             return a.application_date_start.localeCompare(b.application_date_start);
        //         } else {
        //             return b.application_date_start.localeCompare(a.application_date_start);
        //         }
        //     }); 
        //     if (sortToggleAscAppStatus) {
        //         setSortToggleDescAppStatus(true);
        //         setSortToggleAscAppStatus(false);  

        //     } else {
        //         setSortToggleDescAppStatus(false);  
        //         setSortToggleAscAppStatus(true); 
        //     }
        //     setAllPrograms(sortedProgramDetail);
        // }
    } 

    return (

        
        <div className='application-page'>
        
            <h1 className="program-list-header">Applicants</h1>
{/*             
            <div className="program-legend"> Icon Legend
                <div className="program-legend-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="program-icons-close" title="Closed">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    
                    </svg> Closed
                </div>
                <div className="program-legend-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="program-icons-open" title="Open">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> Open
                    </div>
                <div className="program-legend-icon">      
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="program-icons-future" title="Future">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> Future
                </div>
            </div> */}
            
            { auth.token ? (
                <>  
                { ( applicant.length > 0 ) && 
                <>
                    <ul className="applicant-group">
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

                    { applicant.map((applicantData, key) => {
                        let programName = '';
                        let scholarshipName = '';

                        if (applicantData.scholarship !== '') {
                            const foundScholarship = scholarship.find((scholarshipData) => scholarshipData.id === applicantData.scholarship);

                            if (foundScholarship !== undefined ) {
                                scholarshipName = foundScholarship.organization;
                            }
                        }

                        const foundProgram = allPrograms.find((program) => program.id === applicantData.program);

                        if (foundProgram !== undefined ) {
                            programName = foundProgram.program_name;
                        }
                        
                        return (
                            <li className='applicant-items'>
                                <ApplicantCard
                                    key={key}
                                    applicantData={applicantData}
                                    programName = {programName}
                                    scholarshipName = {scholarshipName}
                                    
                                />
                            </li>
                            
                        )
                                    
                    })}

                    </ul>
                </>
                 }
                 <div className="program-buttons">
                <Link to="/user" className="program-button">
                    New User/Admin
                </Link>
                <Link to="/Programs" className="program-button">
                    Programs
                </Link>
                <Link to="/newProgram" className="program-button">
                    New Program
                </Link>
                {/* <Link to="/applicants" className="program-button">
                    Applicants
                </Link> */}
                <Link to="/scholarships" className="program-button">
                    Scholarships
                </Link>
            </div>
            <Footer />
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

export default Applicants;