import React from 'react';
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm';
import Header from '../../components/Header/header.jsx';
import  Footer  from '../../components/Footer/Footer.jsx';

function Apply() {
    return (
        <div className="application-page">
            <Header/>
            <div className="application-header">
                <h1>Apply to Program</h1>
                <p>Welcome to our application page. Please fill out the form below to apply.</p>

            </div>
            <div className="application-form-container">
                <ApplicationForm />
            </div>
            <Footer/>
        </div>
    );
}

export default Apply;