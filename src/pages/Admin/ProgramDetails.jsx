import ScholarshipForm from "../../components/NewScholarship/ScholarshipForm";

function ProgramDetails() {
    return(
        <>
        <h1>This is the project page.</h1>
        <p>Here we will see the program details, the related scholarships, the related applicants</p>
        <p>and we will be able to add a new scholarship to the program via the below component.</p>
        <h2>This is he scholarship component below</h2>
        <ScholarshipForm />
        </>
    );
}

export default ProgramDetails