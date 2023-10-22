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
            label: 'New',
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
            label: 'Rejected',
            value: 'Rejected',
        },
        {
            label: 'Withdrawn',
            value: 'Withdrawn',
        },
        {
            label: 'Successful',
            value: 'Successful',
        },
        {
            label: 'Scholarship Assigned',
            value: 'Scholarship Assigned',
        },
    ];

    if ( auth.token ) {

        return (
            <div className='application-page'>
                <>                       
                <h3>EDIT APPLICATION</h3>

                <h1 className='scholarship-header'>Scholarships</h1>
                        <div className='scholarship-statistics-group'>
                            <div className='scholarship-statistics-group-item'>
                                {/* <div className='scholarship-statistics-group-number'> */}
                                <Count 
                                    number={scholarshipAssigned.length} 
                                    duration='1'
                                    increment='1'
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
                                    duration='1'
                                    increment='1'
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
                                    increment='1'
                                    />
                                {/* </div>   */}
                                <div className='scholarship-statistics-group-label'>
                                    Available
                                </div>  
                            </div>                                                    
                        </div>


                <form className='user-form' onSubmit={handleSubmit}>
                    <li className='label'>
                        <label htmlFor='first_name'>First Name</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                required
                                id='first_name' 
                                disabled
                                defaultValue={applicantDetail.first_name}
                                onChange = {handleChange}
                                size='30'
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='last_name'>Last Name</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                id='last_name' 
                                disabled
                                defaultValue={applicantDetail.last_name}
                                onChange = {handleChange}
                                size='30'
                            />
                        </li>
                        <li className='label'>
                            <label htmlFor='email'>Email</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='email' 
                                id='email' 
                                placeholder='Email' 
                                disabled
                                defaultValue={applicantDetail.email}    
                                size='30'                            
                            />
                        </li> 
                        <li className='label'>
                            <label htmlFor='age'>Age</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='number' 
                                id='age' 
                                placeholder='Age' 
                                disabled
                                defaultValue={applicantDetail.age}
                                size='30'    
                            />
                        </li>
                        <li className='label'>
                            <label htmlFor='mobile'>Mobile</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='number' 
                                id='mobile' 
                                placeholder='Mobile' 
                                disabled
                                pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
                                // maxLength={}
                                defaultValue={applicantDetail.contact_mobile}
                                size='30'    
                            />
                        </li>                        
                        <li className='label'>
                        <label htmlFor='home_city'>City</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                id='home_city' 
                                disabled
                                defaultValue={applicantDetail.home_city}
                                onChange = {handleChange}
                                size='30'
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='pronouns'>Pronouns</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                id='pronouns' 
                                disabled
                                defaultValue={applicantDetail.pronouns}
                                onChange = {handleChange}
                                size='30'
                            />
                        </li>   
                        <li className='label'>
                        <label htmlFor='qualities'>Qualities</label>
                        </li>
                        <li className='label'>
                            <textarea 
                                className='form-input'
                                type='text-area' 
                                id='qualities' 
                                disabled
                                rows='5'
                                cols='30'                                
                                defaultValue={applicantDetail.qualities}
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='reason'>Reason</label>
                        </li>
                        <li className='label'>
                            <textarea 
                                className='form-input'
                                type='text-area' 
                                id='reason' 
                                disabled
                                rows='5'
                                cols='30'                                
                                defaultValue={applicantDetail.reason}
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='previous_education'>Previous Education</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                id='previous_education' 
                                disabled
                                defaultValue={applicantDetail.previous_education}
                                onChange = {handleChange}
                                size='30'
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='work_experience'>Work Experience</label>
                        </li>
                        <li className='label'>
                            <textarea 
                                className='form-input'
                                type='text-area' 
                                id='work_experience' 
                                disabled
                                rows='5'
                                cols='30'                                
                                defaultValue={applicantDetail.work_experience}
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='currently_employed'>Currently Employed</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='checkbox' 
                                id='currently_employed' 
                                disabled
                                defaultValue={applicantDetail.currently_employed}
                                size='30'
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='current_employer'>Current Employer</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                id='current_employer' 
                                disabled
                                defaultChecked={applicantDetail.current_employer}
                                size='30'
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='biography'>Biography</label>
                        </li>
                        <li className='label'>
                            <textarea 
                                className='form-input'
                                type='text-area' 
                                id='biography' 
                                disabled
                                rows='5'
                                cols='30'                                
                                defaultValue={applicantDetail.biography}
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='location'>Program Name</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                id='location' 
                                disabled
                                defaultValue={programDetail.program_name}
                                size='30'
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='location'>Program Location</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                id='location' 
                                disabled
                                defaultValue={applicantDetail.location}
                                size='30'
                            />
                        </li>
                        <li className='label'>
                        <label htmlFor='gender_eligible'>Gender Eligible</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='checkbox' 
                                id='gender_eligible' 
                                disabled
                                defaultChecked={applicantDetail.gender_eligible}
                                size='30'
                            />
                            {/* <input 
                                className='form-input'
                                id='gender_eligible'
                                name='gender_eligible'
                                type='radio' 
                                defaultChecked={applicantDetail.gender_eligible}
                                onChange={handleChange}
                                value='true'
                            /> */}
                        {/* <label>Yes</label> */}
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
                      
                        <ul className='scholarship-group'>
                            <li className='scholarship-items'>
                                <div className='scholarship-grid'><h4>Scholarship</h4></div>
                                <div className='scholarship-grid'><h4>Places</h4></div>
                                <div className='scholarship-grid'><h4>Assigned</h4></div>
                                <div className='scholarship-grid'><h4>Remaining</h4></div>
                                <div className='scholarship-grid'><h4>Assigned</h4>
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
                    <button type='submit' className='btn-wide'>SAVE</button>
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

