import { useOpenProgram } from "../../hooks/use-program";
import OpenPrograms from "../../components/OpenPrograms/OpenPrograms.jsx";

function ProgramOpenPage() {
    const { programs, isLoading, error } = useOpenProgram();

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