import { useScholarship } from "../../hooks/use-scholarship";
import { useAuth } from "../../hooks/use-auth";
import { useState } from "react";
import LoginForm from "../../components/AdminLogin/LoginForm";
import ScholarshipCard from "../../components/ScholarshipCard/ScholarshipCard";
import { usePrograms } from "../../hooks/use-programs";
// import { useProgramDetails } from "../../hooks/use-program-details";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from 'react-router-dom';


function Scholarships() {

    const {auth, setAuth} = useAuth();
    
    const { scholarship, isLoadingScholarship, errorScholarship, setScholarship } = useScholarship();
    const { allPrograms, isLoadingallPrograms, errorAllPrograms, setAllPrograms } = usePrograms();
    // const [sortToggleAsc, setSortToggleAsc] = useState(true);
    // const [sortToggleDesc, setSortToggleDesc] = useState(false);
    // const [sortToggleAscLoc, setSortToggleAscLoc] = useState(true);
    // const [sortToggleDescLoc, setSortToggleDescLoc] = useState(false);
    // const [sortToggleAscProgStat, setSortToggleAscProgStat] = useState(true);
    // const [sortToggleDescProgStat, setSortToggleDescProgStat] = useState(false);
    // const [sortToggleAscAppStatus, setSortToggleAscAppStatus] = useState(true);
    // const [sortToggleDescAppStatus, setSortToggleDescAppStatus] = useState(false);

    if (isLoadingScholarship || isLoadingallPrograms) {
        return (<Spinner />)
    }

    if (errorScholarship || errorAllPrograms ) {
        return (<p>{error.message}</p>);
    }    


    // const deleteSingleProgram = (id) => {
    //     if (id) {
    //         deleteProgram(
    //             id
    //         ).then((response) => {
    //             const myPrograms = allPrograms.filter((programData) => programData.id !== id);
    //             setAllPrograms(myPrograms);
    //         }); 
    //     }
    // }; 

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

    const programLink = `/program/${scholarship.program}`;

    return (

        
        <>
        
            <h1 className="program-list-header">Scholarships Available</h1>
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
                <div className='application-page'>
                <>  
                { ( scholarship.length > 0 ) && 
                <>
  

                    <ul className="scholarship-group">
                    <li className="scholarship-items-header">
                        {/* <div>  */}
                            <div className='scholarship-items-header-label-left'>
                                <h3>Scholarship 
                                </h3>
                            </div>
                            <div className='scholarship-items-header-label-display-none'>
                                <h3>Places
                                </h3>
                            </div>
                            <div className='scholarship-items-header-label-left'>
                                <h3>Program Name</h3>
                            </div>
                            <div className='scholarship-items-header-label'>
                            <h3>Open
                            </h3>
                            </div>
                        {/* </div> */}
                    </li>
                    { scholarship.length > 0 && scholarship.map((scholarshipData, key) => {
                        
                        const foundProgram = allPrograms.find((program) => program.id === scholarshipData.program);
                        let programName = "";
                        // if (foundProgram !== "" ) { 
                        //     programName = foundProgram.program_name;
                        // }
                        // const applicationStatus = foundProgram.
                        
                        return (
                            <li className={'scholarship-items'}>
                                <ScholarshipCard
                                    key={key}
                                    scholarshipData={scholarshipData}
                                    applicantDetail={undefined}
                                    programDetail = {foundProgram}
                                    // programName = {programName}
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
                <Link to="/applicants" className="program-button">
                    Applicants
                </Link>
                {/* <Link to="/scholarships" className="program-button">
                    Scholarships
                </Link> */}
            </div>
                </>
                </div>
            ) : (
                <LoginForm />
            ) } 
        </>
        
    );
}

export default Scholarships;