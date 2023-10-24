import './NavBarResponsive.css';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from "../../hooks/use-auth";
import Shefunds from "../../Images/Shefunds.svg"
import HomeIcon from "../../Images/HomeIcon.svg"

function NavBarResponsive() {


    const {auth, setAuth} = useAuth();

        const handleLogout = () => {
           window.localStorage.removeItem("token");
           window.localStorage.removeItem("username");
                  
           setAuth({ token: null });
        };


  return (
    <div>
      <nav className='navbar'>
        <div className='leftContainer'>
          <Link to="/">
          <img src={HomeIcon}/>
          </Link>
        </div>
        <div className='middleContainer'>
          <div className='imageContainer'>
          <Link to="/">
            <img id src={Shefunds} />
            </Link>
            </div>
        </div>

        <ul className='nav-links'>
          {/* USING CHECKBOX TO TRIGGER HAMBURGER MENU STATE  */}
          <input type='checkbox' id='checkbox_toggle' />
          {/*  &#9776 is html code for a hamburger icon */}
          <label htmlFor='checkbox_toggle' className='hamburger'>
            &#9776;
          </label>
          <div className='menu'>
            <li>
              <Link to='/login'>Login</Link>
            </li>

             <li> 
                {auth.token ? (
                      <Link to='/adminHome'>Admin Home</Link>
                ) : (null)}
            </li>

            <li className='services'>
            {auth.token ? (
                <Link to='/user'>Create User</Link> 
                ) : (null)}
            </li>

            <li>
            {auth.token ? (
                <Link to='/newProgram'>Create new program</Link> 
                ) : (null)}
            </li>
            
            <li>
            {auth.token ? (
                        <Link to='/programs'>Programs</Link>
                ) : (null)}
            </li>
            
                <li className='dropdown-link'>
                {auth.token ? (
                         <Link to="/" onClick={handleLogout}>Log Out</Link>
                     ) : (
                     <Link to="/login"></Link>
                     )}
            </li>
            
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBarResponsive;