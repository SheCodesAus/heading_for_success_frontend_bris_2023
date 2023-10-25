import './ProgramCard.css';
import { useAuth } from '../../hooks/use-auth';
import { Link } from 'react-router-dom';
import IconStatus from "../../components/IconStatus/IconStatus";

const ProgramCard = (props) => {
    const { programData } = props;
    const {auth, setAuth} = useAuth();

       
    // const editProgramLink = `/editProgram/${programData.id}`;
    const programLink = `/program/${programData.id}`;

    const today = new Date();
    const startDate = new Date (programData.date_start);
    const endDate = new Date (programData.date_end);
    const appStartDate = new Date (programData.application_date_start);
    const appEndDate = new Date (programData.application_date_end);

    const dateStatus = (dateStart, dateEnd) => {
        let status = '';
        if ((today >= dateStart) && (today <= dateEnd)) {
            status ='Open'
        } else if (today < dateStart) {
            status = 'Future';
        } else if (today > dateEnd ) {
            status = 'Closed';
        }
        return status;
    }

    let statusDate = dateStatus(startDate, endDate);
    let statusAppDate =  dateStatus(appStartDate, appEndDate);

    const formatDate = (date) => {
        const newDate = new Date(date);
        const options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          };

        return newDate.toLocaleDateString('en-GB', options);

    }
    
    return (
        
            <li className='program-card-item'>
            <div className='program-card'> 
            <div className='program-card-grid'>
                <Link to={programLink}>
                <h3 className='program-card-link'>
                    {programData.program_name}
                </h3>
                </Link>
            </div> 
            <div className='program-card-grid'>
                <h3>{programData.location}
                </h3>
            </div>    
            <div className='program-card-grid'>
                <h3>{programData.intake}
                </h3>
            </div>  
                {/* <div className='program-card-grid'>
                    <h3>{formatDate(programData.date_start)}
                    </h3>
                </div>                           
                <div className='program-card-grid'>
                    <h3>{formatDate(programData.date_end)}
                    </h3>
                </div>                
                <div className='program-card-grid'>
                    <h3>{programData.application_date_start.toString()}  
                    </h3>
                </div>                           
                <div className='program-card-grid'>
                    <h3>{programData.application_date_end} 
                    </h3>
                </div> */}



                <div className='program-card-grid-none'>
                    <h3><IconStatus status={statusDate} />
                    </h3>
                </div>                 
                <div className='program-card-grid-none'>
                    <h3><IconStatus status={statusAppDate} />
                    </h3>
                </div>                       
                  
                <div className='program-card-grid-none'>
                <h3>
  
                    <Link to={programLink}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="program-icons-edit">
                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                    </svg>
                    </Link> 
                    </h3>
                </div>                    
                
        </div>
        </li>
     );
     
}

export default ProgramCard;