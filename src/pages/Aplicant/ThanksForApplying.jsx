//please check that not a double up from monica
import React from 'react';
import { Link } from 'react-router-dom';

function ThanksForApplying() {
    return (
        <div>
            <h1>Thank you for applying</h1>
            <h2>
                Keep browsing our Programs. <Link to="/programs">Click here</Link>
            </h2>
        </div>
    );
}

export default ThanksForApplying;