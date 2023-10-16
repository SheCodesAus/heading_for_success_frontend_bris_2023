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

    return (

        
        <>
        
            <h1>This is where I will see the list of all programs, both open and closed.</h1>
            <p>From here I will be able to click on each program and see the details</p>
            { auth.token ? (
                <>  
                { ( allPrograms.length > 0 ) && 
                // <p>{allPrograms[0].program_name}</p>
                <>
                    { allPrograms.map((programData, key) => {
                        // return (<p>{programData.program_name}</p>)
                        return <ProgramCard
                                    key={key}
                                    programData={programData}
                                    onClick={deleteSingleProgram}
                                /> 
                                    
                    })}
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