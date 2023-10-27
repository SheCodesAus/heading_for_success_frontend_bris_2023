import './ApplicantCard.css'
import { Link } from 'react-router-dom';

const ApplicantCard = (props) => {
    const { applicantData, programName, scholarshipName } = props;
    let programLink = `/program/${applicantData.program}`;
    let applicantLink = `/application/${applicantData.id}/${applicantData.program}`;

    return (
            <>
                <div className='applicant-grid-left'>
                <Link to={applicantLink}>{applicantData.first_name}</Link>
                </div>
                <div className='applicant-grid-left'>
                <Link to={applicantLink}>{ applicantData.last_name }</Link>
                </div>
                <div className='applicant-grid-display-none'>
                <Link to={programLink}>{programName} 
                    </Link>
                </div>     
                <div className='applicant-grid'>
                <Link to={applicantLink}>{applicantData.status}</Link>
                </div>     
                <div className='applicant-grid-display-none'>
                {scholarshipName} 
                </div>
            </>       
                               
    )

}

export default ApplicantCard;