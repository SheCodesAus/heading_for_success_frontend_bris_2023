import './ScholarshipCard.css'
import { Link } from 'react-router-dom';
import IconStatus from "../../components/IconStatus/IconStatus";

const ScholarshipCard = (props) => {
    const { scholarshipData, applicantDetail, programDetail } = props;
    let programLink = "";
    let status = '';

        // console.log("::", props);
    if (applicantDetail !== undefined) {
        if (scholarshipData.id === applicantDetail.scholarship) {
            scholarshipData.is_assigned = true;
        } 
    }

    if (programDetail !== undefined) {
         programLink = `/program/${programDetail.id}`;

        const today = new Date();
        const appStartDate = new Date (programDetail.application_date_start);
        const appEndDate = new Date (programDetail.application_date_end);



        if ((today >= appStartDate) && (today <= appEndDate)) {
            status ='Open'
        } else if (today < appStartDate) {
            status = 'Future';
        } else if (today > appEndDate ) {
            status = 'Closed';
        }
    }

    return (
            <>
                <div className='scholarship-grid-left'>
                    <h4>{scholarshipData.organization}</h4>
                </div>
                <div className='scholarship-grid-display-none'>
                    { scholarshipData.number_available }
                </div>
                { programDetail !== undefined ? (
                    <>
                    <div id='assigned' className='scholarship-grid-left'>
                    <Link to={programLink}>{programDetail.program_name}
                    </Link>
                    </div>
                    <div className='program-card-grid'>
                        <h3><IconStatus status={status} />
                        </h3>
                    </div>    
                </>                 

                    ) : (
                        <>
                <div id='assigned' className='scholarship-grid-display-none'>
                {scholarshipData.assigned_count}
                </div>
                <div id='remaining' className='scholarship-grid'>
                {scholarshipData.remaining_count}
                </div>                             
                
                <div className='scholarship-grid'>
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
                
            </>       
                               
    )

}

export default ScholarshipCard;