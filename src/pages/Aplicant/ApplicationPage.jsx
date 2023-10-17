import React from 'react';
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm';

function Apply() {
    return (
        <div className="application-page">
            <div className="application-header">
                <h1>Apply to Program</h1>
                <p>Welcome to our application page. Please fill out the form below to apply.</p>
            </div>
            <div className="application-form-container">
                <ApplicationForm />
            </div>
        </div>
    );
}

export default Apply;