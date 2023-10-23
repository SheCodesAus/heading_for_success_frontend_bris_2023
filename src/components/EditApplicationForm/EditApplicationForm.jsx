import './EditApplicationForm.css';
import { useState, Fragment, useEffect} from 'react';
import { putApplicant } from '../../api/put-applicant';
import { useApplicantDetails } from '../../hooks/use-applicant-details';
import { useProgramDetails } from '../../hooks/use-program-details';
import { useAuth } from '../../hooks/use-auth';
import LoginForm from '../AdminLogin/LoginForm';
import { useParams } from 'react-router-dom';
import MessageCard from '../MessageCard/MessageCard';
import Spinner from '../Spinner/Spinner';
import ScholarshipCard from '../ScholarshipCard/ScholarshipCard';
import Count from '../Count/Count';

const EditApplicationForm = () => {

    const {auth, setAuth} = useAuth();
    const { id, programId } = useParams();    
    const { applicantDetail, isLoading: isLoadingApplicantDetail, error: errorApplicantDetail, setApplicantDetail } = useApplicantDetails(id);
    const { programDetail, isLoading: isLoadingProgramDetail, error: errorProgramDetail, setProgramDetail, scholarshipAssigned, setScholarshipAssigned } = useProgramDetails(programId);
    const [messageBlock, setMessageBlock] = useState(false);
    const [progressBlock, setProgressBlock] = useState(true);

    if (isLoadingApplicantDetail || isLoadingProgramDetail) {
        return (<Spinner />)
    }

    if (errorApplicantDetail) {

        return (
            <div>
                <MessageCard 
                    message={`Error with application details - ${errorApplicantDetail.message}`} 
                    messageType='header' 
                />
            </div>
            );
    }

    if (errorProgramDetail) {

        return (
            <div>
                <MessageCard 
                    message={`Error with program details - ${errorProgramDetail.message}`} 
                    messageType='header' 
                />
            </div>
            );
    }
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setApplicantDetail((prevApplicantDetail) => ({
            ...prevApplicantDetail,
            [id]: value,
        }));        
    };

    const handleClick = (event) => {
        const { id, value } = event.target;
        
        const old_id = applicantDetail.scholarship;

        // update the old id to have a count reduced and the radio button ?
        let newScholarshipsAssigned = [...scholarshipAssigned];
        
        const old_index = newScholarshipsAssigned.findIndex((item) => item.id === parseInt(old_id));

        if (old_index > -1) { // index found
        // unassign the count for old radio button selection
            newScholarshipsAssigned[old_index].assigned_count = newScholarshipsAssigned[old_index].assigned_count - 1;
            newScholarshipsAssigned[old_index].remaining_count = newScholarshipsAssigned[old_index].remaining_count + 1;
            newScholarshipsAssigned[old_index].is_assigned = false;
        }
        // assign the count for new radio button selection
        newScholarshipsAssigned[id].assigned_count = newScholarshipsAssigned[id].assigned_count + 1;
        newScholarshipsAssigned[id].remaining_count = newScholarshipsAssigned[id].remaining_count - 1;
        newScholarshipsAssigned[id].is_assigned = true;
        
        setScholarshipAssigned(newScholarshipsAssigned);

        setApplicantDetail((prevApplicantDetail) => ({
            ...prevApplicantDetail,
            ['scholarship']: value,
            ['status']: 'Scholarship Assigned',
        }));      

    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
                putApplicant(
                    id,
                    applicantDetail.status,
                    applicantDetail.scholarship,
                ).then((response) => { 
                    setMessageBlock(true);
                });
    };

    const status_options = [
        {
            label: 'Applied',
            value: 'New',
        },
        {
            label: 'Shortlist',
            value: 'Shortlist',
        },
        {
            label: 'Interview',
            value: 'Interview',
        },
        {
            label: 'Unsuccessful',
            value: 'Rejected',
        },
        {
            label: 'Successful',
            value: 'Successful',
        },
        {
            label: 'Scholarship Assigned',
            value: 'Scholarship Assigned',
        },
        {
            label: 'Withdrawn',
            value: 'Withdrawn',
        },        
    ];

    let found = '';
    if (applicantDetail.scholarship) {

        found = scholarshipAssigned.find((scholarship) => scholarship.id === parseInt(applicantDetail.scholarship));
        // console.log(found.organization);
    }



    if ( auth.token ) {

        return (
            <div className='application-page'>
                <>                       
                {/* <h1 className='scholarship-header'>Scholarships</h1> */}
                    <div className='scholarship-statistics-group'>
                        <div className='scholarship-statistics-group-item'>
                            {/* <div className='scholarship-statistics-group-number'> */}
                            <Count 
                                number={scholarshipAssigned.length} 
                                duration='1'
                                increment='2'
                                />
                                
                            {/* </div>   */}
                            <div className='scholarship-statistics-group-label'>
                                Scholarships
                            </div>  
                        </div>    
                        <div className='scholarship-statistics-group-item'>
                            {/* <div className='scholarship-statistics-group-number'> */}
                            <Count 
                                number={scholarshipAssigned.reduce((total,scholarship) => total + scholarship.number_available, 0)} 
                                duration='2'
                                increment='3'
                                />                                
                                
                            {/* </div>   */}
                        <div className='scholarship-statistics-group-label'>
                            Places
                        </div>  
                    </div>    
                    <div className='scholarship-statistics-group-item'>
                        {/* <div className='scholarship-statistics-group-number'> */}
                        <Count 
                            number={scholarshipAssigned.reduce((total,scholarship) => total + scholarship.assigned_count, 0)} 
                            duration='1'
                            increment='1'
                            />
                        {/* </div>   */}
                        <div className='scholarship-statistics-group-label'>
                            Assigned
                        </div>  
                    </div>    
                    <div className='scholarship-statistics-group-item'>
                        {/* <div className='scholarship-statistics-group-number'> */}
                            <Count 
                            number={scholarshipAssigned.reduce((total,scholarship) => total + scholarship.remaining_count, 0)} 
                            duration='1'
                            increment='2'
                            />
                        {/* </div>   */}
                        <div className='scholarship-statistics-group-label'>
                            Available
                        </div>  
                    </div>                                                    
                </div>
                <form className='scholarship-applicant-detail-form' onSubmit={handleSubmit}>
                    {/* <li>
                        <h3 className='scholarship-header'>
                            Applicant: {`${applicantDetail.first_name} ${applicantDetail.last_name}`}
                        </h3>
                    </li>
                    <li>
                        <h4 className='scholarship-details'>
                            Email: {applicantDetail.email}
                        </h4>
                    </li> */}
                    <div className='scholarship-applicant-profile'>
                    <li className='label'>
                        <label htmlFor='first_name'>Applicant Name</label>
                        </li>
                        <li className='label'>
                            {`${applicantDetail.first_name} ${applicantDetail.last_name}`}
                                
                        </li>
                        <li className='label'>
                        <label htmlFor='status'>Program Status</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.status}     
                        </li>                       
                        <li className='label'>
                        <label htmlFor='location'>Program Name</label>
                        </li>
                        <li className='label'>
                            {programDetail.program_name}
                        </li>
                        <li className='label'>
                        <label htmlFor='location'>Scholarship</label>
                        </li>
                        <li className='label'>
                            { found && found.organization}
                        </li>                        
                        <li className='label'>
                        <label htmlFor='location'>Program Location</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.location}
                        </li>
                        <li className='label'>
                        <label htmlFor='location'>Program Intake</label>
                        </li>
                        <li className='label'>
                            {programDetail.intake}
                        </li>                       
                        <li className='label'>
                            <label htmlFor='email'>Email</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.email}    
                        </li> 
                        <li className='label'>
                            <label htmlFor='age'>Age</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.age}
                        </li>
                        <li className='label'>
                            <label htmlFor='mobile'>Mobile</label>
                        </li>
                        <li className='label'>
                            {`0${applicantDetail.contact_mobile}`}
                        </li>                        
                        <li className='label'>
                        <label htmlFor='home_city'>City</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.home_city}
                        </li>
                        <li className='label'>
                        <label htmlFor='gender_eligible'>Gender Eligible</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.gender_eligible ? 'Yes': 'No'}
                        </li>     
                        <li className='label'>
                        <label htmlFor='pronouns'>Pronouns</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.pronouns}
                        </li>   
                        </div>
                        <div className='scholarship-applicant-detail'>
                        <li className='label'>
                        <label htmlFor='qualities'>Qualities</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.qualities}
                        </li>
                        <li className='label'>
                        <label htmlFor='reason'>Reason</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.reason}
                        </li>
                        <li className='label'>
                        <label htmlFor='previous_education'>Previous Education</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.previous_education}
                        </li>
                        <li className='label'>
                        <label htmlFor='work_experience'>Work Experience</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.work_experience}
                        </li>
                        <li className='label'>
                        <label htmlFor='currently_employed'>Currently Employed</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.currently_employed ? 'Yes' : 'No'}
                        </li>
                        <li className='label'>
                        <label htmlFor='current_employer'>Current Employer</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.current_employer}
                        </li>
                        <li className='label'>
                        <label htmlFor='biography'>Biography</label>
                        </li>
                        <li className='label'>
                            {applicantDetail.biography}
                        </li>
            
                        {/* <li className='label'>
                            <input 
                                className='form-input'
                                id='gender_eligible'
                                name='gender_eligible'
                                type='radio' 
                                defaultChecked={applicantDetail.gender_eligible === false && true}
                                onChange={handleChange}
                                value='false'
                            />
                            <label>No</label>
                        </li>                                    */}

                        <li className='label'>
                        <label htmlFor='status'>Program Status</label>
                        </li>
                        <li className='label'>
                            <select 
                                
                                name='status'
                                id='status' 
                                onChange={handleChange}
                                defaultValue={applicantDetail.status}
                            >
                                {status_options.map((status_options,key) => (
                                    <option 
                                        key={key}
                                        value={status_options.value} 
                                        // selected={status_options.value == applicantDetail.status && 'selected'}
                                    >
                                        {status_options.label}
                                    </option>
                                ))}
                            </select>
                        </li>  
                        </div>
                        <div className='scholarship-assign'>
                        <h3 
                            className='scholarship-header'
                        >
                                Assign Scholarship
                        </h3>                      
                        <ul className='scholarship-group'>
                            <li className='scholarship-items-header'>
                                <div className='scholarship-items-header'><h4>Scholarship</h4></div>
                                <div className='scholarship-items-header'><h4>Places</h4></div>
                                <div className='scholarship-items-header'><h4>Assigned</h4></div>
                                <div className='scholarship-items-header'><h4>Remaining</h4></div>
                                <div className='scholarship-items-header'><h4>Assigned</h4>
                                </div>                         
                            </li>
                    {scholarshipAssigned.map((scholarshipData, key) => {
                        return (
                            <Fragment key={key}>
                            <li 
                                className='scholarship-items'
                            >
                            <ScholarshipCard 
                                id={key}
                                scholarshipData={scholarshipData} 
                                applicantDetail = {applicantDetail}
                                onClick={handleClick} />
                            </li> 
                            </Fragment>
                          
                        )
                    })}

                </ul>
                </div>                                                          
                    <button type='submit' className='scholarship-btn'>SAVE</button>
                    { messageBlock ? (
                    <li key='test' className='message'><MessageCard message='Details updated successfully' />
                    </li>
                ) :( null ) }     
                </form>
                </>
            </div>
        );
        
    } else {
        return (
            <div>
            <LoginForm />
            </div>
        );
    }
}

export default EditApplicationForm;

