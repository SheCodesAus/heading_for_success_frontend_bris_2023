import { useState } from 'react';

function ProgramForm() {
    const [programData, setprogramData] = useState({
        program_name: '',
        location: '',
        intake: 0,
        description: '',
        image: '',
        status: false,
        date_start: '',
        date_end: '',
        application_date_start: ''
    })
    const handleChange = (e) => {
        setprogramData({
            ...programData,
            [e.target.id]: e.target.value
        })
    }
    const handleChecked = (e) => {
        setProjectData({
          ...projectData,
          [e.target.id]: e.target.checked
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        postProgram(programData)
            .then(() => {
                navigate(0)
            })
            .catch(() => {
                setIsLoading(false);
                console.log("postProject Failed")
            });
    }
    return (
        <form className='programform'>
            <div>
                <label htmlFor="program_name"> Program Name </label>
                <input
                    type="text"
                    id="program_name"
                    placeholder='Enter the name of the program'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location"> Location </label>
                <input
                    type="text"
                    id="location"
                    placeholder='What city will this be in?'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="intake"> Intake </label>
                <input
                    type="text"
                    id="intake"
                    placeholder='How many places available?'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description"> Details </label>
                <input
                    type="text"
                    id="description"
                    placeholder='Description of Program'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='image'> Image link</label>
                <input
                    type='text'
                    id='image'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='status'>Open for Applications?</label>
                <input
                    type='checkbox'
                    id='status'
                    onChange={handleChecked}
                />
            </div>
            <div>
                <label htmlFor="date_start"> Start Date? </label>
                <input
                    type="text"
                    id="date_start"
                    placeholder='Start date?'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date_end"> End Date? </label>
                <input
                    type="text"
                    id="date_end"
                    placeholder='End date?'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="application_date_start"> Date Applications Start </label>
                <input
                    type="text"
                    id="application_date_start"
                    placeholder='When Applications Start'
                    onChange={handleChange}
                />
            </div>
            <button type='submit' onClick={handleSubmit}> Submit it </button>
        </form>



    )
}

export default ProgramForm