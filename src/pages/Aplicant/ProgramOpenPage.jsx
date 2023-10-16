import { useProgram } from "../../hooks/use-program";
import OpenPrograms from "../../components/OpenPrograms/OpenProgams";

function ProgramOpenPage() {
    const { programs, isLoading, error} = useProgram();
    
    if (isLoading) {
        return (<p> Loading...</p>)
      }
    
      if (error) {
        return (<p>{error.message}</p>)
      }
    
    return (
        <div className='program-list'>
            {programs.map((programOpen, key) => {
                return <OpenPrograms key={key} programOpen={programOpen} />;
            })}
        </div>
    );
}

export default ProgramOpenPage