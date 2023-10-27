import './ScholarshipCard.css'
import { Link } from 'react-router-dom';
import IconStatus from "../../components/IconStatus/IconStatus";
import DeleteButton from '../DeleteButton/DeleteButton';

const ScholarshipCard = (props) => {
    const { scholarshipData, applicantDetail, programDetail, page } = props;
    let programLink = "";
    let status = '';

    if (applicantDetail !== undefined) {
        if (scholarshipData.id === applicantDetail.scholarship) {
            scholarshipData.is_assigned = true;
        } 
    }

    
    let assigned_number = 0;
    let remaining_number = 0;
    if (page == 'program') {
        let filteredAssigned = applicantDetail.filter((applicant) => applicant.scholarship === scholarshipData.id);
        assigned_number = filteredAssigned.length;    
        remaining_number = scholarshipData.number_available - assigned_number;
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
                { (programDetail !== undefined && applicantDetail == undefined) ?   (
                    <>
                    <div id='assigned' className='scholarship-grid-left'>
                    <Link to={programLink}>{programDetail.program_name}
                    </Link>
                    </div>
                    <div className='program-card-grid'>
                        <h3><IconStatus status={status} />
                        </h3>
                    </div>    
                    <div>
                        <DeleteButton 
                        id={scholarshipData.id}
                        onClick={() => props.onClick(scholarshipData.id)}
                     />
                    </div>
                    
                </>                 

                    ) : (
                        

                 (page == undefined) ? ( 
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
                 ):(
                    <>
                    <div id='assigned' className='scholarship-grid-display-none'>
                    {assigned_number}
                    </div>
                    <div id='remaining' className='scholarship-grid'>
                    {remaining_number}
                    </div>                      
                    </>
                 )
                                     
                    )
                }
                
            </>       
                               
    )

}

export default ScholarshipCard;