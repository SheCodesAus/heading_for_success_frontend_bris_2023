import { useScholarship } from "../../hooks/use-scholarship";
import { useAuth } from "../../hooks/use-auth";
import { deleteScholarship } from "../../api/delete-scholarship";
import { useState } from "react";
import LoginForm from "../../components/AdminLogin/LoginForm";
import ScholarshipCard from "../../components/ScholarshipCard/ScholarshipCard";
import { usePrograms } from "../../hooks/use-programs";
// import { useProgramDetails } from "../../hooks/use-program-details";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import MessageCard from "../../components/MessageCard/MessageCard";


function Scholarships() {

    const {auth, setAuth} = useAuth();
    
    const { scholarship, isLoadingScholarship, errorScholarship, setScholarship } = useScholarship();
    const { allPrograms, isLoadingallPrograms, errorAllPrograms, setAllPrograms } = usePrograms();
    const [messageBlock, setMessageBlock] = useState(false);
    const [message, setMessage] = useState('Deleted successfully')
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

    const programLink = `/program/${scholarship.program}`;

    const handleDelete = (id) => {
        if (id) {
            deleteScholarship(
                id
            ).then((response) => {
                const filteredScholarship = scholarship.filter((scholarshipData) => scholarshipData.id !== id);
                setScholarship(filteredScholarship);
                setMessageBlock(true);
                setMessage('Deleted successfully');
            }).catch((error) => {
                setMessageBlock(true);
                setMessage(error.message);
                
            });
        }
    }; 
    

    return (

        
        <>
        
            <h1 className="program-list-header">Scholarships</h1>
            
            { auth.token ? (
                <>
                <div className='application-page'>
                  
                <div className="program-legend"> Icon Legend - Application Status
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
            </div>                
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
                            <h3>Status
                            </h3>
                            </div>
                            <div className='scholarship-items-header-label'>
                            <h3>
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
                                    onClick={handleDelete}
                                />
                            </li>
                        )
                                    
                    })}
                    </ul>
                    { messageBlock ? ( 
                    
                    <div className='message'>
                        
                        <MessageCard message={message}  />
                    </div>
                ) :( null ) }  
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

export default Scholarships;