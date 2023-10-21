
const ScholarshipCard = (props) => {
    const { scholarshipData, applicantDetail } = props;
    if (applicantDetail.scholarship === scholarshipData.id) {
        scholarshipData.is_assigned = true;
    }

    return (
            <>
                <div className='scholarship-grid-left'>
                    <p>{scholarshipData.organization}</p>
                </div>
                <div className='scholarship-grid'>
                    { scholarshipData.number_available }
                </div>
                <div id='assigned' className='scholarship-grid'>
                {scholarshipData.assigned_count}
                </div>
                <div id='remaining' className='scholarship-grid'>
                {scholarshipData.remaining_count}
                </div>                             
                
                <div className='scholarship-edit'>
                <input 
                    key={props.id}
                    type='radio'    
                    id={props.id}
                    value={scholarshipData.id} 
                    name='scholarship_radio'
                    disabled={scholarshipData.remaining_count === 0 && true}
                    checked={scholarshipData.is_assigned}
                    onChange={props.onClick}
                    />   
                </div>
            </>       
                               
    )

}

export default ScholarshipCard;