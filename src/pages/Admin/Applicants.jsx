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

    if (isLoading || isLoadingScholarship || isLoadingallPrograms ) {
        return (<Spinner />)
    }

    if (error || errorScholarship || errorAllPrograms ) {
        return (<p>{error.message}</p>);
    }    

    return (

        <>
        
        
            <h1 className="program-list-header">Applicants</h1>

            
            { auth.token ? (
                <>  
                <div className='application-page'>
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
            </div>
            <Footer />
                </>
                
            ) : (
                <>
                <LoginForm />
                <Footer />
                </>
            ) } 
        </>
        
    );
}

export default Applicants;