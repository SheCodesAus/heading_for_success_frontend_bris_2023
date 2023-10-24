import LoginForm from "../../components/AdminLogin/LoginForm";
import Header from '../../components/Header/header.jsx';
    
    
function AdminLogin() {
    return(
        <div id="login">
            <h1>Welcome Administrator.</h1>
            <br></br>
            <LoginForm />
        </div>
    );
}

export default AdminLogin;