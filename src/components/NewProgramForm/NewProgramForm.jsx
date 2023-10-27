import { useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import PostProgram, { postProgram } from '../../api/post-program';
import MessageCard from '../MessageCard/MessageCard';
import LoginForm from '../AdminLogin/LoginForm';


function NewProgramForm() {
    const {auth, setAuth} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [messageBlock, setMessageBlock] = useState(false);
    const [programData, setprogramData] = useState({
        program_name: '',
        location: 'Brisbane',
        intake: '',
        description: '',
        image: '',
        date_start: '',
        date_end: '',
        application_date_start: '',
        application_date_end: ''
    })

    const handleChange = (e) => {
        setprogramData({
            ...programData,
            [e.target.id]: e.target.value
        })
     
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (programData.program_name) {
            console.log(programData);
            postProgram(
                programData.program_name,
                programData.location,
                programData.intake,
                programData.description,
                programData.image,
                programData.date_start,    
                programData.date_end,
                programData.application_date_start,
                programData.application_date_end,            
            ).then((response) => {
                setMessageBlock(true);                
            })
        }
    }

    const location_options = [
        {
            label: 'Brisbane',
            value: 'Brisbane',
        },
        {
            label: 'Sydney',
            value: 'Sydney',
        },
        {
            label: 'Melbourne',
            value: 'Melbourne',
        },
        {
            label: 'Perth',
            value: 'Perth',
        },
        {
            label: 'Canberra',
            value: 'Canberra',
        },
        {
            label: 'Darwin',
            value: 'Darwin',
        },
        {
            label: 'Tasmania',
            value: 'Tasmania',
        },
    ];

    if ( auth.token ) {

        return (
            <form className='AppForm' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='program_name'>Program Name</label>
                    <input
                        type='text'
                        id='program_name'
                        placeholder='Enter name of program'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='location'>Location</label>
                    <select
                        name='location'
                        id='location'
                        // defaultValue='Brisbane'
                        onChange={handleChange}>
                        {location_options.map((location_options,key) => (
                            <option 
                                key={key}
                                value={location_options.value}
                            >
                                {location_options.label}
                            </option>
                        ))}
                    </select>                    
                </div>
                <div>
                    <label htmlFor='intake'>Intake</label>
                    <input
                        type='text'
                        id='intake'
                        placeholder='Month/ Year'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Details</label>
                    <textarea
                        type='text-area'
                        id='description'
                        placeholder='Description of Program'
                        required
                        onChange={handleChange}
                        rows='5'
                        cols='30'                     
                    />
                </div>
                <div>
                    <label htmlFor='image'>Image link</label>
                    <input
                        type='url'
                        id='image'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='date_start'>Start Date</label>
                    <input
                        type='date'
                        id='date_start'
                        placeholder='Start date?'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='date_end'>End Date</label>
                    <input
                        type='date'
                        id='date_end'
                        placeholder='End date?'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='application_date_start'> Date Applications Start </label>
                    <input
                        type='date'
                        id='application_date_start'
                        placeholder='When Applications Start'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='application_date_end'> Date Applications End</label>
                    <input
                        type='date'
                        id='application_date_end'
                        placeholder='When Applications End'
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Create </button>
                {messageBlock && 
                    <MessageCard 
                        message='Program created successfully' 
                    />
                }
            </form>
        )
    } else {
        return (
            <div>
            <LoginForm />
            </div>
        );
    }        
}

export default NewProgramForm;