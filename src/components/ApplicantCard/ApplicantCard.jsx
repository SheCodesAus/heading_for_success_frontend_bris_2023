import './ApplicantCard.css'

const ApplicantCard = (props) => {
    const { scholarshipData, applicantData } = props;

    return (
            <>
                <div className='scholarship-grid-left'>
                    <p>{applicantData.first_name}</p>
                </div>
                <div className='scholarship-grid-display-none'>
                    { applicantData.last_name }
                </div>
                <div id='assigned' className='scholarship-grid-display-none'>
                {applicantData.scholarship}
                </div>
                <div id='remaining' className='scholarship-grid'>
                {applicantData.program}
                </div>                             
                
                <div className='scholarship-grid'>
                {applicantData.program}
                </div>
            </>       
                               
    )

}

export default ApplicantCard;