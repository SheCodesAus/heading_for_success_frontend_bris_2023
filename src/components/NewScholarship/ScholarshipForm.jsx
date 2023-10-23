import React from 'react';
import './ScholarshipForm.css'; // Import the CSS file

function ScholarshipForm() {   
    return (
        <>
                <section>
                    <h2>Add a new scholarship</h2>
                    <p>Associate a new scholarship to this program with the below form</p>
                </section>
                <form>
                    <label htmlFor="organization">Organization Name</label>
                    <input type="text" id="organization" name="organization"/>

                    <label htmlFor="contactName">Contact Name</label>
                    <input type="text" id="contact-name" name="contact-name" />

                    <label htmlFor="contactEmail">Contact Email</label>
                    <input type="email" id="contact-email" name="contact-email" />

                    <label htmlFor="contactMobile">Contact Mobile Number</label>
                    <input type="number" id="contact-mobile" name="contact-mobile" />

                    <label htmlFor="scholarshipAmount">Scholarship amount</label>
                    <input type="number" id="scholarship-amount" name="scholarship-amount" />

                    <label htmlFor="numberAvailable">Number of spots available</label>
                    <input type="number" id="number-available" name="number-available" />

                    <button type="submit" >Submit</button>
                </form>
        </>
    );
}

export default ScholarshipForm
