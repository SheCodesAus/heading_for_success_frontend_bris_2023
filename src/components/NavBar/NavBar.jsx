import "./NavBar.css";
import{ Link, Outlet }from "react-router-dom";
//import useAuth from "../hooks/use-auth.js";

function NavBar() {
    //const {auth, setAuth} = useAuth();

    //const handleLogout = () => {
    //    window.localStorage.removeItem("token");
    //    setAuth({ token: null });
    //};

    return ( 
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/plus">Plus</Link>
                    <Link to="/femaleFounders">Female Founders</Link>
                    <Link to="/flash">Flash</Link>
                    <Link to="/workshops">Workshops</Link>
                    <Link to="/login">Admin login</Link>
                </nav>
                <Outlet />
            </div>
    )    
}


export default NavBar;