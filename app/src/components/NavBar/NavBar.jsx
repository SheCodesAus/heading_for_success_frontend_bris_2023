import "./NavBar.css";
import{ Link, Outlet }from "react-router-dom";

function NavBar() {
    return ( 
            <div>
                <nav>
                    <p>Placeholder for Login Link</p>
                    {/* <Link to="/login">Login</Link> */}
                </nav>
                <Outlet />
            </div>
    )    
}


export default NavBar;