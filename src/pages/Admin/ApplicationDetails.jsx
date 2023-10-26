import { useAuth } from '../../hooks/use-auth';
import { useParams } from 'react-router-dom';
import LoginForm from '../../components/AdminLogin/LoginForm';
import EditApplicationForm from '../../components/EditApplicationForm/EditApplicationForm';
import Footer from '../../components/Footer/Footer.jsx';


function ApplicationDetails() {
    const {auth, setAuth} = useAuth();
    const { id } = useParams();

    return (
        <div>
            { auth.token ? (
                <>
                    <h1 className='scholarship-header'>Application Detail</h1>
                        <EditApplicationForm id={id}/>
                        <Footer />
                </>
                ) : (
                    <>
                    <LoginForm />
                    <Footer />
                    </>
                ) }
        </div>            
    ) 

}

export default ApplicationDetails;