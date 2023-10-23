import { useAuth } from '../../hooks/use-auth';
import { useParams } from 'react-router-dom';
import LoginForm from '../../components/AdminLogin/LoginForm';
import EditApplicationForm from '../../components/EditApplicationForm/EditApplicationForm';


function ApplicationDetails() {
    const {auth, setAuth} = useAuth();
    const { id } = useParams();

    return (
        <div>
            { auth.token ? (
                <>
                    <h1 className='scholarship-header'>Application Detail</h1>
                        <EditApplicationForm id={id}/>
                </>
                ) : (
                    <LoginForm />
                ) }
        </div>            
    ) 

}

export default ApplicationDetails;