import { useState } from 'react';
import { putApplicant } from '../../api/put-applicant';
import { useApplicantDetails } from '../../hooks/use-applicant-details';
import { useAuth } from '../../hooks/use-auth';
import LoginForm from '../AdminLogin/LoginForm';
import { useParams } from 'react-router-dom';
import MessageCard from '../MessageCard/MessageCard';
import Spinner from '../Spinner/Spinner';

const EditApplicationForm = () => {

    const {auth, setAuth} = useAuth();
    const { id } = useParams();
    console.log("applicant id:",id);
    const { applicantDetail, isLoading: isLoadingApplicantDetail, error: errorApplicantDetail, setApplicantDetail } = useApplicantDetails(id);
    const [messageBlock, setMessageBlock] = useState(false);

    if (isLoadingApplicantDetail) {
        return (<Spinner />)
    }

    if (errorApplicantDetail) {

        return (
            <div>
                <MessageCard 
                    message={`Error with application details - ${errorApplicantDetails.message}`} 
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

    const handleSubmit = (event) => {
        
        event.preventDefault();

                putApplicant(
                    id,
                    applicantDetail.gender_eligible,
                    applicantDetail.status,
                    applicantDetail.scholarship,
                ).then((response) => {                   
                    setMessageBlock(true);
                });
    };

    if ( auth.token ) {

        console.log(applicantDetail);
        return (
            <div className='user-page'>
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
                        <label htmlFor='location'>Program Location</label>
                        </li>
                        <li className='label'>
                            <input 
                                className='form-input'
                                type='text' 
                                id='location' 
                                disabled
                                defaultValue={applicantDetail.location}
                                onChange = {handleChange}
                                size='30'
                            />
                        </li>                                                               
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