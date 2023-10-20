
const ScholarshipCard = (props) => {
    const { scholarshipData, applicantDetail } = props;
    // console.log('props.id, application details', props.id, applicantDetail.scholarship, scholarshipData.id);
    if (applicantDetail.scholarship === scholarshipData.id) {
        console.log("matched scholarship id", scholarshipData.id)
        scholarshipData.is_assigned = true;
        console.log(scholarshipData.is_assigned)
    }
    // console.log("within card", scholarshipData);


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
                {/* //todo - when we click this button, we want to :
                // todo - disable it, set text as assigned (DONE), set the id/key of THIS button as the ONLY one that's clicked - set all other buttons to unclicked
                //todo - when we click this button, it should assign the scholarship against this provider, remove all other scholarship assignments in state */}
                <div className='scholarship-edit'>
                <input 
                    key={props.id}
                    type='radio'    
                    id={props.id}
                    value={scholarshipData.id} 
                    name='scholarship_radio'
                    // defaultChecked={applicantDetail.scholarship === scholarshipData.id && true}
                    disabled={scholarshipData.remaining_count === 0 && true}
                    // checked={scholarshipData.is_assigned}
                    defaultChecked={scholarshipData.is_assigned}
                    onClick={props.onClick}
                    // onClick={() => props.onClick()}
                    // onChange={props.onClick}
                    />   
                </div>
            </>       
                               
    )

}

export default ScholarshipCard;