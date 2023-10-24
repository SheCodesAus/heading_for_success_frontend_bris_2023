import './ApplicantCard.css'

const ApplicantCard = (props) => {
    const { applicantData, programName, scholarshipName } = props;

    return (
            <>
                <div className='scholarship-grid-left'>
                    <p>{applicantData.first_name}</p>
                </div>
                <div className='scholarship-grid'>
                    { applicantData.last_name }
                </div>
                <div className='scholarship-grid-display-none'>
                {programName}
                </div>     
                <div className='scholarship-grid'>
                {applicantData.status}
                </div>     
                <div className='scholarship-grid-display-none'>
                {scholarshipName}
                </div>
            </>       
                               
    )

}

export default ApplicantCard;