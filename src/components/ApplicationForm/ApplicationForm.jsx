import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './ApplicationForm.css';

function ApplicationForm() {
    const navigate = useNavigate(); // Initialize useNavigate

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        age: "",
        mobile: "",
        home_city: "",
        pronouns: "",
        qualities: "",
        location: "Sydney", // Set a default value
        reason: "",
        previous_education: "",
        work_experience: "",
        currently_employed: "yes",
        biography: "",
        gender_eligible: "yes",
        resume: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page reload)
        
        // Handle the form submission here (you can replace this with your actual logic)
        // ...

        // Redirect to the "/thanks" page after successful submission
        navigate('/thanks');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="first_name" placeholder="Enter your first name" value={formData.first_name} onChange={handleChange} />
                </label>

                <label>
                    Last Name:
                    <input type="text" name="last_name" placeholder="Enter your last name" value={formData.last_name} onChange={handleChange} />
                </label>

                <label>
                    Email:
                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </label> 
                {/* //should this be email? or just text field? */}

                <label>
                    Age:
                    <input type="text" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} />
                </label>

                <label>
                    Mobile:
                    <input type="text" name="mobile" placeholder="Enter your mobile number" value={formData.mobile} onChange={handleChange} />
                </label>
                {/* should this be in different format? */}

                <label>
                    Home City:
                    <input type="text" name="home_city" placeholder="Enter your home city" value={formData.home_city} onChange={handleChange} />
                </label>

                <label>
                    Pronouns:
                    <input type="text" name="pronouns" placeholder="Enter your pronouns" value={formData.pronouns} onChange={handleChange} />
                </label>

                <label>
                    Qualities:
                    <input type="text" name="qualities" placeholder="Enter your qualities, ie Bring unique perspective to the community" value={formData.qualities} onChange={handleChange} />
                </label>

                <label>
                    Location:
                    <select name="location" value={formData.location} onChange={handleChange}>
                        <option value="Sydney">Sydney</option>
                        <option value="Brisbane">Brisbane</option>
                        <option value="Perth">Perth</option>
                    </select>
                </label>

                <label>
                    Reason:
                    <input type="text" name="reason" placeholder="Enter your reason for wanting to do this program now" value={formData.reason} onChange={handleChange} />
                </label>

                <label>
                    Previous Education:
                    <input type="text" name="previous_education" placeholder="Enter your previous education" value={formData.previous_education} onChange={handleChange} />
                </label>

                <label>
                    Work Experience:
                    <input type="text" name="work_experience" placeholder="Enter your work experience" value={formData.work_experience} onChange={handleChange} />
                </label>

                <label>
                    Currently Employed:
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="currently_employed"
                                value="yes"
                                checked={formData.currently_employed === "yes"}
                                onChange={handleChange}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="currently_employed"
                                value="no"
                                checked={formData.currently_employed === "no"}
                                onChange={handleChange}
                            />
                            No
                        </label>
                    </div>
                </label>

                <label>
                    Biography:
                    <textarea name="biography" placeholder="Tell us about yourself" value={formData.biography} onChange={handleChange} />
                </label>

                <label>
                    Gender Eligible:
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="gender_eligible"
                                value="yes"
                                checked={formData.gender_eligible === "yes"}
                                onChange={handleChange}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender_eligible"
                                value="no"
                                checked={formData.gender_eligible === "no"}
                                onChange={handleChange}
                            />
                            No
                        </label>
                    </div>
                </label>

                <label>
                    Resume:
                    <input type="file" name="resume" onChange={handleChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ApplicationForm;
