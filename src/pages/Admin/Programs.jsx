import { usePrograms } from "../../hooks/use-programs";
import { useAuth } from "../../hooks/use-auth";
import LoginForm from "../../components/AdminLogin/LoginForm";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
// import Spinner from "../../components/Spinner/Spinner";

function Programs() {

    const {auth, setAuth} = useAuth();
    const { allPrograms, isLoading, error, setAllPrograms } = usePrograms();

    if (isLoading) {
        // return (<Spinner />)
        return <p>Is Loading...</p>
    }

    if (error) {
        return (<p>{error.message}</p>);
    }    


    const deleteSingleProgram = (id) => {
        if (id) {
            deleteProgram(
                id
            ).then((response) => {
                const myPrograms = allPrograms.filter((programData) => programData.id !== id);
                setAllPrograms(myPrograms);
            }); 
        }
    }; 

    const handleClick = (event) => {
        const text = event.target.innerText;
        // console.log("evt click",event, event.target, event.target.id, event.target.innerText);
        if (text === 'Program') {
            // const sortedProgramDetail = [...allPrograms].sort((a, b) => {
            //     return a[program_name].localeCompare(b[program_name]);
            // }); 
            // const sortedProgramDetail = [...allPrograms].sort((a,b) => {
            //     a.program_name.localeCompare(b.program_name)
            // });
            const sortedProgramDetail = allPrograms.sort((a, b) => {
                return a.program_name.localeCompare(b.program_name);
            }); 
            
            setAllPrograms(sortedProgramDetail);
            // console.log(sortedProgramDetail);
            console.log(allPrograms);
        }

        if (text === 'Location') {

        }
    } 

    return (

        
        <>
        
            <h1>Admin View - All programs,  open and closed</h1>
            
            { auth.token ? (
                <>  
                { ( allPrograms.length > 0 ) && 
                // <p>{allPrograms[0].program_name}</p>
                <>
                    <ul>
                    <li>
                        <div className='program-card program-card-header'> 
                        <div className='program-card-grid' id='program' value='program' onClick={handleClick}>
                            <h3>Program</h3>
                        </div>
                        <div className='program-card-grid'>
                            <h3>Location</h3>
                        </div>
                        <div className='program-card-grid'>
                            <h3>Intake</h3>
                        </div>
                        <div className='program-card-grid'>
                            <h3>Program Status</h3>
                        </div>
                        <div className='program-card-grid'>
                            <h3>Application Status</h3>
                        </div>
                        <div className='program-card-grid'>
                            
                        </div>
                        </div>
                    </li>
                    { allPrograms.map((programData, key) => {
                        // return (<p>{programData.program_name}</p>)
                        return (
                                <ProgramCard
                                    key={key}
                                    programData={programData}
                                    onClick={deleteSingleProgram}
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

export default Programs