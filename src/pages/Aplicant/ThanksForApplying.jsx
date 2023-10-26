//please check that not a double up from monica
import React from 'react';
import { Link } from 'react-router-dom';
import UpdatedHero from '../../Images/UpdatedHero.svg';
import Footer from '../../components/Footer/Footer.jsx';

function ThanksForApplying() {
    return (
        <div>
            <h1>Thank you for applying!</h1>
            <h2>
                <Link to="/">Return home</Link>
            </h2>
            <img src={UpdatedHero} class="UpdatedHero"></img>
            <Footer />
        </div>
    );
}

export default ThanksForApplying;