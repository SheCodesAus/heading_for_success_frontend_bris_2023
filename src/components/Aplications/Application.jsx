import { Link } from "react-router-dom";
// import "./Application.css"

function ApplicationList(applicant) {
    const { application } = applicant;
    const applicationLink = `program/${application.id}`;
    
    return (
        <div className="application-list">
            <Link to={applicationLink}>
                <h3>List of Applicants</h3>
            </Link>
        </div>
    )
}

export default ApplicationList