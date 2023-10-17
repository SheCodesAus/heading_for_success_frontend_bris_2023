import ScholarshipForm from "../../components/NewScholarship/ScholarshipForm";
import { useProgramDetails } from "../../hooks/use-program-details";
import { useState } from 'react';
import { useAuth } from "../../hooks/use-auth";
import { useParams, Link } from 'react-router-dom';
import LoginForm from "../../components/AdminLogin/LoginForm";
import MessageCard from "../../components/MessageCard/MessageCard";
// import Spinner from "../Spinner/Spinner";

function ProgramDetails() {

    const {auth, setAuth} = useAuth();
    const { id } = useParams();
    const { programDetail, isLoading, error, setProgramDetail } = useProgramDetails(id);
    const [messageBlock, setMessageBlock] = useState(false);

    if (isLoading) {
        // return (<Spinner />)
        <p>Is Loading..</p>
    }

    if (error) {
        return (
            <div>
                <MessageCard 
                    message={`Error with program details - ${error.message}`} 
                    messageType='header' 
                />
            </div>
            );
    }
    
    return (
        <div>
        { ( auth.token )? (
        <>
        

            <h1>Program Detail page for {programDetail.program_name}.</h1>
            <p>Here we will see the program details, the related scholarships, the related applicants</p>
            <h3>Location: {programDetail.location}</h3>
            <h3>Intake: {programDetail.intake}</h3>
            <h3>Description: {programDetail.description}</h3>
            <img src={programDetail.image} />
            <h3>Status: {programDetail.status}</h3>
            <h3>Date Start: {programDetail.date_start}</h3>
            <h3>Date End:{programDetail.date_end}</h3>
            <h3>Application Date Start: {programDetail.application_date_start}</h3>
            <h3>Application Date End: {programDetail.application_date_end}</h3>

            <h2>This is the related scholarships Section.</h2>
            { programDetail.scholarship &&
                programDetail.scholarship.map((scholarshipData, key) => {
                    return (
                    <>    
                        <li key={key}>
                                {scholarshipData.organization}
                        </li>
                    </>
                    )
                })
            }

            <h2>This is the Related Applicants Section.</h2>

                                    {/* <Link to={applicantLink}> */}
            {   programDetail.applicant &&
                programDetail.applicant.map((applicantData, key) => {
                return (
                <>    
                    <li key={key}>
                        <Link to={`/application/${applicantData.id}/${id}`}>
                            {`${applicantData.first_name} ${applicantData.last_name}`}
                        </Link>
                    </li>
                </>
                )
            })}

            <p>and we will be able to add a new scholarship to the program via the below component.</p>
            <h2>This is the scholarship component below</h2>
            <ScholarshipForm />
        </>
        ) : (
            <LoginForm />
        ) }
        </div>
    );
    
}

export default ProgramDetails;