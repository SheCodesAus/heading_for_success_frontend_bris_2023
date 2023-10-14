import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import LoginForm from '../../components/AdminLogin/LoginForm';

function AdminHome() {
    const {auth, setAuth} = useAuth();
    
    if ( auth.token ) {        
        return(
            <div>
                <h1>This is the admin home page.</h1>;
                <Link to='/user'>Create New Admin User</Link>
            </div>
        )
    } else {
        return (
            <div>
            <LoginForm />
            </div>
        );
    }        
}

export default AdminHome;