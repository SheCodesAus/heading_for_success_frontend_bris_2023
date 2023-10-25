import LoginForm from "../../components/AdminLogin/LoginForm";
import { Link } from 'react-router-dom';

function AdminLogin() {
    return (
        <div id="login">
            <h1>Welcome Admin. Please log in.</h1>
            <br></br>
            <LoginForm />
            <div>
                {/* <h1>Welcome Admin</h1> */}
                {/* <div className="program-buttons">
                    <Link to="/user" className="program-button">
                        New User/Admin
                    </Link>
                    <Link to="/Programs" className="program-button">
                        Programs
                    </Link>
                    <Link to="/newProgram" className="program-button">
                        New Program
                    </Link>
                    <Link to="/applicants" className="program-button">
                        Applicants
                    </Link>
                    <Link to="/scholarships" className="program-button">
                        Scholarships
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

export default AdminLogin;
