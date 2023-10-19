import React, { useState } from "react";
import postScholarship from "../../api/post-scholarship";

function ScholarshipForm() { 
    const [isLoading, setIsLoading] = useState(false); 
    const [scholarshipData, setscholarshipData] = useState({
        organization: '',
        contact_name: '',
        contact_email: '',
        contact_mobile: '',
        scholarship_amount: 0,
        number_available: 0,
    })

    const handleChange = (e) => {
        setscholarshipData({
            ...scholarshipData,
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        postScholarship(scholarshipData)
            .then(() => {
                navigate(0)
            })
            .catch(() => {
                setIsLoading(false);
                console.log("postScholarship Failed")
            });
        }

    return (
        <>
                <section>
                    <h2>Add a new scholarship</h2>
                    <p>Associate a new scholarship to this program with the below form</p>
                </section>
                <form>
                    <label htmlFor="organization">Organization Name</label>
                    <input type="text" id="organization" name="organization" onChange={handleChange} />

                    <label htmlFor="contactName">Contact Name</label>
                    <input type="text" id="contact-name" name="contact-name" onChange={handleChange} />

                    <label htmlFor="contactEmail">Contact Email</label>
                    <input type="email" id="contact-email" name="contact-email" onChange={handleChange} />

                    <label htmlFor="contactMobile">Contact Mobile Number</label>
                    <input type="number" id="contact-mobile" name="contact-mobile" onChange={handleChange} />

                    <label htmlFor="scholarshipAmount">Scholarship amount</label>
                    <input type="number" id="scholarship-amount" name="scholarship-amount" onChange={handleChange} />

                    <label htmlFor="numberAvailable">Number of spots available</label>
                    <input type="number" id="number-available" name="number-available" onChange={handleChange} />

                    <button type="submit" onClick={handleSubmit} >Submit</button>
                </form>
        </>
    );
}

export default ScholarshipForm
