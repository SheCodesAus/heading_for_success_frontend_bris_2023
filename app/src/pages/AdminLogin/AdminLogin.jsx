import "AdminLogin.css";
import LoginForm from "../components/LoginForm";
import Purplelogo from /images/PurpleLogo.png;



function AdminLoginPage() {
    return (
        <div>
            <img src={Purplelogo} className="purple-logo" />
            <div className="admin-login-container"> 
                <LoginForm />
            </div>
        </div>
    );
}

export default AdminLoginPage;
