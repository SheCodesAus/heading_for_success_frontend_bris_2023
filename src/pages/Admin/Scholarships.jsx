import { useScholarship } from "../../hooks/use-scholarship";
import { useAuth } from "../../hooks/use-auth";
import { useState } from "react";
import LoginForm from "../../components/AdminLogin/LoginForm";
import ScholarshipCard from "../../components/ScholarshipCard/ScholarshipCard";
import Spinner from "../../components/Spinner/Spinner";

function Scholarships() {

    const {auth, setAuth} = useAuth();
    
    const { scholarship, isLoading, error, setScholarship } = useScholarship();
    // const [sortToggleAsc, setSortToggleAsc] = useState(true);
    // const [sortToggleDesc, setSortToggleDesc] = useState(false);
    // const [sortToggleAscLoc, setSortToggleAscLoc] = useState(true);
    // const [sortToggleDescLoc, setSortToggleDescLoc] = useState(false);
    // const [sortToggleAscProgStat, setSortToggleAscProgStat] = useState(true);
    // const [sortToggleDescProgStat, setSortToggleDescProgStat] = useState(false);
    // const [sortToggleAscAppStatus, setSortToggleAscAppStatus] = useState(true);
    // const [sortToggleDescAppStatus, setSortToggleDescAppStatus] = useState(false);

    if (isLoading) {
        return (<Spinner />)
    }

    if (error) {
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

    return (

        
        <>
        
            <h1 className="program-list-header">Scholarship</h1>
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
                { ( scholarship.length > 0 ) && 
                <>
                    <ul className="program-card-list">
                    <li>
                        <div className='program-card-header'> 
                        <div 
                            className='program-card-grid' 
                            id='program'         
                            value='program' 
                            // onClick={handleClick}
                        > 
                            {/* <button onClick={handleClick} id='program' value='program' className='program-card-sort-btn'>
                                <div className='program-card-sort-left'>
                                    <h3>Program 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                        className={sortToggleAsc ? 
                                        'program-icons-sort' : 'display-none'} id='program'>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sortToggleDesc ? 
                                        'program-icons-sort' : 'display-none' } id='program'>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </h3>
                                </div>

                            </button> */}
                        </div>
                        <div className='program-card-grid'
                            id='location'         
                            value='location' 
                        >
                        {/* <button 
                            onClick={handleClick} 
                            id='location' 
                            value='location' 
                            className='program-card-sort-btn'
                        >
                            <div className='program-card-sort-left'>
                            <h3>Location
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                    className={sortToggleAscLoc ? 
                                    'program-icons-sort' : 'display-none'} id='location'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sortToggleDescLoc ? 
                                    'program-icons-sort' : 'display-none' } id='location'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                                    </svg>

                            </h3>
                            </div>
                        </button> */}
                        </div>
                        <div className='program-card-sort-none'>
                            <h3>Intake</h3>
                        </div>
                        <div className='program-card-grid-none'>
                        {/* <button 
                            onClick={handleClick} 
                            id='program-status' 
                            value='program-status' 
                            className='program-card-sort-btn'
                        >
                            <div className='program-card-sort'>
                            <h3>Program Status
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                        className={sortToggleAscProgStat ? 
                                        'program-icons-sort' : 'display-none'} id='program-status'>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sortToggleDescProgStat ? 
                                        'program-icons-sort' : 'display-none' } id='program-status'>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                                        </svg>                                
                            </h3>
                            </div>
                            </button> */}
                        </div>
                        <div className='program-card-grid-none'>
                        {/* <button 
                            onClick={handleClick} 
                            id='application-status' 
                            value='application-status' 
                            className='program-card-sort-btn'
                        >
                            <div className='program-card-sort'>
                            <h3>Application Status
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                        className={sortToggleAscAppStatus ? 
                                        'program-icons-sort' : 'display-none'} id='application-status'>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sortToggleDescAppStatus ? 
                                        'program-icons-sort' : 'display-none' } id='application-status'>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                                        </svg>                                
                            </h3>
                            </div>
                            </button> */}
                        </div>
                        <div className='program-card-grid-none'>
                            
                        </div>
                        </div>
                    </li>
                    { scholarship.length > 0 && scholarship.map((scholarshipData, key) => {
                        // return (<p>{programData.program_name}</p>)
                        return (
                                <ScholarshipCard
                                    key={key}
                                    scholarshipData={scholarshipData}
                                    applicantDetail={undefined}
                                    // onClick={deleteSingleProgram}
                                />
                            
                        )
                                    
                    })}
                    </ul>
                </>
                 }
                
                </>
                
            ) : (
                <LoginForm />
            ) } 
        </>
        
    );
}

export default Scholarships;