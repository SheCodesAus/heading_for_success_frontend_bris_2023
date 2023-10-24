// help check the format/ input types for each data point, weren't confirmed in MVP doc

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './ApplicationForm.css';
import postApplicant from '../../api/post-applicant';

function ApplicationForm() {
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation();
    const id = location.state.id

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        age: "",
        contact_mobile: "",
        home_city: "",
        pronouns: "",
        qualities: "",
        location: "Sydney", // Set a default value
        reason: "",
        previous_education: "",
        work_experience: "",
        currently_employed: "yes",
        current_employer: "",
        biography: "",
        gender_eligible: "yes",
        resume: "",
        id,
    });

    console.log('this is my id', location.state.id)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page reload)
        console.log(formData)
        postApplicant(formData).then((response) => {
            console.log(response);
            navigate('/thanks');
        }).catch((error) => {
            console.log(error)       
        });
    };


    return (
        <div className="AppForm">
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="first_name" placeholder="Enter your first name" value={formData.first_name} onChange={handleChange} required/>
                </label>

                <label>
                    Last Name:
                    <input type="text" name="last_name" placeholder="Enter your last name" value={formData.last_name} onChange={handleChange} required/>
                </label>

                <label>
                    Email:
                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required/>
                </label> 
                {/* //should this be email? or just text field? */}

                <label>
                    Age:
                    <input type="text" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} required/>
                </label>

                <label>
                    Mobile:
                    <input type="text" name="mobile" placeholder="Enter your mobile number" value={formData.mobile} onChange={handleChange} required/>
                </label>
                {/* should this be in different format? */}

                <label>
                    Home City:
                    <input type="text" name="home_city" placeholder="Enter your home city" value={formData.home_city} onChange={handleChange} required/>
                </label>

                <label>
                    Pronouns:
                    <input type="text" name="pronouns" placeholder="Enter your pronouns" value={formData.pronouns} onChange={handleChange} required/>
                </label>

                <label>
                    What will you bring to the table?
                    <input type="text" name="qualities" placeholder="Enter your qualities, ie Bring unique perspective to the community" value={formData.qualities} onChange={handleChange} required/>
                </label>

                <label>
                    Location:
                    <select name="location" value={formData.location} onChange={handleChange} required>
                        <option value="Sydney">Sydney</option>
                        <option value="Brisbane">Brisbane</option>
                        <option value="Perth">Perth</option>
                    </select>
                </label>

                <label>
                    Why are you applying to this program?
                    <input type="text" name="reason" placeholder="Enter your reason for wanting to do this program now" value={formData.reason} onChange={handleChange} required/>
                </label>

                <label>
                    Previous Education:
                    <input type="text" name="previous_education" placeholder="Enter your previous education" value={formData.previous_education} onChange={handleChange} required/>
                </label>

                <label>
                    Work Experience:
                    <input type="text" name="work_experience" placeholder="Enter your work experience" value={formData.work_experience} onChange={handleChange} required/>
                </label>

                <label>
                    Are you currently employed:
                    <div>
                        <label>
                            <input
                                className="RoundButton"
                                type="radio"
                                name="currently_employed"
                                value="yes"
                                checked={formData.currently_employed === "yes"}
                                onChange={handleChange}
                                required
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                className="RoundButton"
                                type="radio"
                                name="currently_employed"
                                value="no"
                                checked={formData.currently_employed === "no"}
                                onChange={handleChange}
                                required
                            />
                            No
                        </label>
                    </div>
                </label>

                <label>
                    Who's your employer?
                    <input type="text" name="current_employer" value={formData.current_employer} onChange={handleChange} required/>
                </label>


                <label>
                    Biography:
                    <textarea name="biography" placeholder="Tell us about yourself" value={formData.biography} onChange={handleChange} required/>
                </label>

                <label>
                    Do you identify as a Woman?
                    <p>Our definition of women includes transgender and cisgender, all those who experience or have experienced oppression as women, including non-binary and gender non-conforming people and all those who identify as women.</p>
                    <div>
                        <label>
                            <input
                                className="RoundButton"
                                type="radio"
                                name="gender_eligible"
                                value="yes"
                                checked={formData.gender_eligible === "yes"}
                                onChange={handleChange}
                                required
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                className="RoundButton"
                                type="radio"
                                name="gender_eligible"
                                value="no"
                                checked={formData.gender_eligible === "no"}
                                onChange={handleChange}
                                required
                            />
                            No
                        </label>
                    </div>
                </label>

                <label>
                    Linkedin:
                    <input type="url" name="resume" onChange={handleChange} required/>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ApplicationForm;
