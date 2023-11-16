import './NavBarResponsive.css';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from "../../hooks/use-auth";
import Shefunds from "../../Images/Shefunds.svg";
import HomeIcon from "../../Images/HomeIcon.svg";
import { useState } from 'react';

function NavBarResponsive() {


    const {auth, setAuth} = useAuth();
    const [checkboxToggle, setCheckboxToggle] = useState(false);

        const handleLogout = () => {
           window.localStorage.removeItem("token");
           window.localStorage.removeItem("username");
                  
           setAuth({ token: null });
           handleClick();
        };


    const handleClick = (event) => {
      if (checkboxToggle) {
        setCheckboxToggle(false);
      } else {
        setCheckboxToggle(true);
      }
    }

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
            <img id src="src/assets/she.svg" />
            </Link>
            </div>
        </div>

        <ul className='nav-links'>
          {/* USING CHECKBOX TO TRIGGER HAMBURGER MENU STATE  */}
          <input type='checkbox' id='checkbox_toggle' checked={checkboxToggle} onClick={handleClick} />
          {/*  &#9776 is html code for a hamburger icon */}
          <label htmlFor='checkbox_toggle' className='hamburger'>
            &#9776;
          </label>
          <div className='menu'>
            {/* <li>
              <Link to='/login'>LOGIN</Link>
            </li> */}
                {auth.token ? (
                  <>
             <li> 

                      <Link to='/adminHome' onClick={handleClick} >DASHBOARD</Link>

            </li>

            <li className='services'>
            
                <Link to='/user'  onClick={handleClick}>CREATE USER</Link> 
                
            </li>

            <li>
            
                <Link to='/newProgram' onClick={handleClick}>NEW PROGRAM</Link> 
                
            </li>
            
            <li>
            
                        <Link to='/programs' onClick={handleClick}>PROGRAMS</Link>

            </li>
            
                <li className='dropdown-link'>
                
                         <Link to="/" onClick={handleLogout}>LOG OUT</Link>
                         </li>
                         </>
                     ) : (
                      <li>
                     <Link to="/login" onClick={handleClick}>LOG IN</Link>
                     </li>
                     )}
            
            
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBarResponsive;