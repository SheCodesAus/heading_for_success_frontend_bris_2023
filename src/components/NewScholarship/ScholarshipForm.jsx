import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import postScholarship from "../../api/post-scholarship";
import { useAuth } from '../../hooks/use-auth';

function ScholarshipForm() {   
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        organization: "",
        contact_person: "",
        contact_email: "",
        contact_mobile: "",
        scholarship_amount: "",
        number_available: "",
        program : id,
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
        console.log(formData)
        postScholarship(formData).then((response) => {
            navigate(`/program/${id}`);
        }).catch((error) => {
            console.log(error)       
        });
    };

    return (
        <>
                <section>
                    <h2>Add a new scholarship</h2>
                    <p>Associate a new scholarship to this program with the below form</p>
                </section>
                <form>
                    <label htmlFor="organization">Organization Name</label>
                    <input 
                    type="text" 
                    id="organization"
                    name="organization"
                    value={formData.organization} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="contactPerson">Contact Name</label>
                    <input 
                    type="text" 
                    id="contact-person" 
                    name="contact_person" 
                    value={formData.contact_person} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="contactEmail">Contact Email</label>
                    <input 
                    type="email" 
                    id="contact-email" 
                    name="contact_email" 
                    value={formData.contact_email} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="contactMobile">Contact Mobile Number</label>
                    <input 
                    type="number" 
                    id="contact-mobile" 
                    name="contact_mobile" 
                    value={formData.contact_mobile} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="scholarshipAmount">Scholarship amount</label>
                    <input 
                    type="number" 
                    id="scholarship-amount" 
                    name="scholarship_amount" 
                    value={formData.scholarship_amount} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="numberAvailable">Number of spots available</label>
                    <input 
                    type="number" 
                    id="number-available" 
                    name="number_available" 
                    value={formData.number_available} 
                    onChange={handleChange} 
                    required
                    />

                    <div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>

                </form>
        </>
    );
}

export default ScholarshipForm
