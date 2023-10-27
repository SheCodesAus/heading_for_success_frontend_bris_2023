import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useAuth } from '../../hooks/use-auth';
import adminIcon from '../../Images/AdminLoginIcon.svg';
import homeIcon from '../../Images/OPIcon.svg';
function NavBar() {
  const { auth, setAuth } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(!!auth.token); // Check auth token for initial state
  const toggleAuthentication = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const handleLogout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
    setAuth({ token: null });
  };
  return (
    <div className="navbar">
      {isLoggedIn ? (
        // Display links and image when logged in
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/adminHome">DASHBOARD</Link>
            <Link to="/user">CREATE USER</Link>
            <Link to="/newProgram">NEW PROGRAM</Link>
            <Link to="/programs">PROGRAMS</Link>
            <Link to="/" onClick={handleLogout}>
              LOG OUT
            </Link>
          </nav>
          <img src={adminIcon} alt="Logged In Image" />
          <button onClick={toggleAuthentication}>Logout</button>
        </div>
      ) : (
        // Display a login image and button when not logged in
        <div>
          <img src={homeIcon} alt="Login Image" />
          <button onClick={toggleAuthentication}>Login</button>
        </div>
      )}
    </div>
  );
}
export default NavBar;
