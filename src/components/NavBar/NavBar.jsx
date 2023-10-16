import "./NavBar.css";
import{ Link, Outlet }from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import adminIcon from '../../Images/Admin-Icon.svg'
import homeIcon from '../../Images/Home-2.svg'

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
       window.localStorage.removeItem("token");
       window.localStorage.removeItem("username");
              
       setAuth({ token: null });
    };

    return ( 
            <div>
                <nav>
                    <Link to="/"><img src={homeIcon} alt="AdminIcon"></img></Link>
                    {auth.token ? (
                        <Link to="/adminHome">Admin Home</Link>
                    ) : (null)}
                    {auth.token ? (
                        <Link to="/user">Create User</Link>
                    ) : (null)}
                    {auth.token ? (
                        <Link to="/newProgram">Create new program</Link>
                    ) : (null)}
                    {auth.token ? (
                        <Link to="/programs">Programs</Link>
                    ) : (null)}
                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}><img src={adminIcon} alt="AdminIcon"></img>Log Out</Link>
                    ) : (
                    <Link to="/login"><img src={adminIcon} alt="AdminIcon"></img></Link>
                    )}
                </nav>
                <Outlet />
            </div>
    )    
}


export default NavBar;