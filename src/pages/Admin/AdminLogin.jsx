import LoginForm from "../../components/AdminLogin/LoginForm";
import Header from '../../components/Header/header.jsx';
    
    
function AdminLogin() {
    return(
        <>
            <Header />
            <h1>Welcome Administrator.</h1>
            <br></br>
            <LoginForm />
        </>
    );
}

export default AdminLogin;