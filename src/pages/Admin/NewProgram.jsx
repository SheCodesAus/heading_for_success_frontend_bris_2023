import ProgramForm from "../../components/NewProgram/ProgramForm";

function NewProgram() {
    return(
        <>
            <h1>Program Creation Page</h1>
            <p>This is the page for creating and adding a new program to the site. 
                The form will provide all the information necessary to add a program to the schedule. </p>
            <ProgramForm />
        </>
    );
}

export default NewProgram