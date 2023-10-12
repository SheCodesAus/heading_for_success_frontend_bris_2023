import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/lostcat_720.jpg';

function NotFoundPage() {
  return 
  <div>
    <img src={PageNotFound}  />
      <p style={{textAlign:"center"}}>
        Sorry, we can't find that page.
        <Link to="/">Go to Home </Link>
      </p>
  </div>;
}
export default NotFoundPage;