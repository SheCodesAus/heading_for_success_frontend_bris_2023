import './EditApplicationForm.css';
import { useState } from 'react';
import { putApplicant } from '../../api/put-applicant';
import { useApplicantDetails } from '../../hooks/use-applicant-details';
import { useProgramDetails } from '../../hooks/use-program-details';
import { useAuth } from '../../hooks/use-auth';
import LoginForm from '../AdminLogin/LoginForm';
import { useParams } from 'react-router-dom';
import MessageCard from '../MessageCard/MessageCard';
import Spinner from '../Spinner/Spinner';
import ScholarshipCard from '../ScholarshipCard/ScholarshipCard';

const EditApplicationForm = () => {

    const {auth, setAuth} = useAuth();
    const { id, programId } = useParams();
    
    // create a state for the scholarship details
    // const [scholarshipsAvailable, setScholarshipsAvailable ] = useState([]);
    // we don't have the application details loaded yet
    // create a function to assign/unassign the scholarship
    // this will check the assigned status
    // this will update the assigned count and remaining count
    // this will hide or show the button based on the count and if not assigned  
    // {
    //     id: 4,
    //     organization: "She Codes",
    //     number_available: 5,
    //     assigned_count: 1,  // this should be previous value + or - 1
    //     remaining_count: 4, // this should be number_available - assigned_count
    //     isAssigned: false, //check if scholarship id is same as applicant scholarship
    //     full: false,  //no further applicants can be assigned
    //   },
    
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

// unassign the count for old radio button selection
        newScholarshipsAssigned[old_index].assigned_count = newScholarshipsAssigned[old_index].assigned_count - 1;
        newScholarshipsAssigned[old_index].remaining_count = newScholarshipsAssigned[old_index].remaining_count + 1;
        newScholarshipsAssigned[old_index].is_assigned = false;
// assign the count for new radio button selection
        newScholarshipsAssigned[id].assigned_count = newScholarshipsAssigned[id].assigned_count + 1;
        newScholarshipsAssigned[id].remaining_count = newScholarshipsAssigned[id].remaining_count - 1;
        newScholarshipsAssigned[id].is_assigned = true;
        
        setScholarshipAssigned(newScholarshipsAssigned);
        // update the new id to have a count assigned to be increased and remaining decreased

        setApplicantDetail((prevApplicantDetail) => ({
            ...prevApplicantDetail,
            ['scholarship']: value,
        }));      

        console.log("click here event", event.target);
        console.log("id/val of evt click scholarship assign",id, value);
        // console.log(applicantDetail);
        // const { id, value } = event.target;

        // console.log("text of innerhtml of id",event.target.innerText);

        // toggle Assign button
        // event.target.innerText = 'Assigned';
        // event.target.disabled = true;

        // toggle Assigned button to be enabled and updated to Assign
        // updated the assigned/remaining values

        // applicantDetail.scholarship = id;
        // setApplicantDetail(applicantDetail);
        // console.log(applicantDetail.scholarship);
    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        // console.log(id, applicantDetail.status, applicantDetail.scholarship)
                putApplicant(
                    id,
                    applicantDetail.status,
                    applicantDetail.scholarship,
                ).then((response) => { 
                    
                    // applicantDetail.scholarship = id;
                    // applicantDetail.status,

                    // setApplicantDetail                  
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

    // setScholarshipsAvailable

    if ( auth.token ) {

        if (scholarshipAssigned) {
            console.log("scholar",scholarshipAssigned);
        }
        return (
            <div className='application-page'>
                <>                       
                <h3>EDIT APPLICATION</h3>
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
                            <li key='table' className='scholarship-items'>
                                <div className='scholarship-grid-right'><h4>Scholarship</h4></div>
                                <div className='scholarship-grid'><h4>Places</h4></div>
                                <div className='scholarship-grid'><h4>Assigned</h4></div>
                                <div className='scholarship-grid'><h4>Remaining</h4></div>
                                <div className='scholarship-assign'>Assigned
                                </div>                         
                            </li>

                    {scholarshipAssigned.map((scholarshipData, key) => {
                        return (
                            <>
                            <li 
                                key={key} 
                                className='scholarship-items'
                            >
                            <ScholarshipCard 
                                key={key} 
                                id={key}
                                scholarshipData={scholarshipData} 
                                applicantDetail = {applicantDetail}
                                onClick={handleClick} />
                            </li> 
                            </>
                          
                        )
                    })}


<h1>Give me a break here</h1>
                    {programDetail.scholarship.map((scholarshipData, key) => {
                            // find count of all applicants with scholarship number(
                            // initialScholarships(scholarshipData);
                            let filteredAssigned = programDetail.applicant.filter((applicant) => applicant.scholarship === scholarshipData.id);
                            let assignedCount = filteredAssigned.length; 
                            let availablePlaces = (scholarshipData.number_available) - (assignedCount);
                            
                        return(
                        <>

                        <li key={key} className='scholarship-items'>
                                <div className='scholarship-grid-right'>
                                    <p>{scholarshipData.organization}</p>
                                </div>
                                <div className='scholarship-grid'>
                                    { scholarshipData.number_available }
                                </div>
                                <div id='assigned' className='scholarship-grid'>
                                {assignedCount}
                                </div>
                                <div id='remaining' className='scholarship-grid'>
                                {availablePlaces}
                                </div>                             
                                {/* //todo - when we click this button, we want to :
                                // todo - disable it, set text as assigned (DONE), set the id/key of THIS button as the ONLY one that's clicked - set all other buttons to unclicked
                                //todo - when we click this button, it should assign the scholarship against this provider, remove all other scholarship assignments in state */}
                                <div className='scholarship-edit'>
                                <input 
                                    // key={key}
                                    type='radio'    
                                    id='scholarship'
                                    value={scholarshipData.id} 
                                    name='scholarship'
                                    defaultChecked={applicantDetail.scholarship === scholarshipData.id && true}
                                    onClick={handleClick}
                                 />   
                                {/* <button 
                                    key={key}
                                    value={scholarshipData.id} 
                                    id={scholarshipData.id}
                                    type='button' 
                                    onClick={handleClick}
                                    // onClick={() => updateScholarship(scholarshipData.id)}
                                    disabled={ ( applicantDetail.scholarship === scholarshipData.id ) ? true : false}
                                    hidden={availablePlaces < 1 && true}
                                > 
                                    { ( applicantDetail.scholarship === scholarshipData.id ) ? 'Assigned' : 'Assign' }
                                </button> */}
                                             {/* <EditPledgeButton 
                                                pledgeId={pledgeData.id} 
                                            /> */}
                                    
                                </div>  
                            </li>
                            </>
                            )
                            
                    })};
                </ul>                                              
                    <button type='submit' className='btn-wide'>SAVE</button>
                    { messageBlock ? (
                    <li className='message'><MessageCard message='Details updated successfully' />
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

