import "./NavBar.css";
import{ Link, Outlet }from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

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
                    <Link to="/">Home</Link>
                    <Link to="/plus">Plus</Link>
                    <Link to="/femaleFounders">Female Founders</Link>
                    <Link to="/flash">Flash</Link>
                    <Link to="/workshops">Workshops</Link>
                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}>Log Out</Link>
                    ) : (
                    <Link to="/login">Admin login</Link>
                    )}
                </nav>
                <Outlet />
            </div>
    )    
}


export default NavBar;