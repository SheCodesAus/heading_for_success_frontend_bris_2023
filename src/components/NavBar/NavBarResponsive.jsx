import './NavBarResponsive.css';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from "../../hooks/use-auth";

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
        {/* <div className='logo'></div> */}

        {/* NAVIGATION MENU  */}
        <ul className='nav-links'>
          {/* USING CHECKBOX TO TRIGGER HAMBURGER MENU STATE  */}
          <input type='checkbox' id='checkbox_toggle' />
          {/*  &#9776 is html code for a hamburger icon */}
          <label htmlFor='checkbox_toggle' className='hamburger'>
            &#9776;
          </label>

          {/* NAVIGATION MENUS */}
          <div className='menu'>
            <li>
              <Link to='/'></Link>
            </li>

             <li> 
                {auth.token ? (
                        <Link to='/adminHome'>Admin Home</Link>
                ) : (null)}
            </li>

            <li className='services'>
            {auth.token ? (
                <Link to='/user'>Create User</Link> 
            // <li>
            //   <Link to='/newProgram'>Create new program</Link> 
                ) : (null)}
            
            </li>
            <li>
              <Link to='/newProgram'>Create new program</Link> 
            </li> <li>
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