import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../api/post-login';
import { useAuth } from '../../hooks/use-auth';
import MessageCard from '../MessageCard/MessageCard';

function LoginForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();
    const [messageBlock, setMessageBlock] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then((response) => {
                
                window.localStorage.setItem('username', credentials.username);
                window.localStorage.setItem('token', response.token);
                
                setAuth({
                    token: response.token,
                    username: credentials.username,
                });

                navigate('/adminHome');

            }).catch((error) => {
                
                setMessageBlock(true);
                setErrorLogin(error.message);
                
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>LOGIN</h3>
                    
                    <input 
                        type='text' 
                        id='username' 
                        placeholder='Enter username' 
                        onChange = {handleChange}
                        required
                    />
                </div>
                <div>
                    
                    <input 
                        type='password' 
                        id='password' 
                        placeholder='Password' 
                        onChange = {handleChange}
                        required
                    />
                </div>
                
                <button type='submit'>LOG IN</button>
                
                { messageBlock && ( 
                    
                        <div>
                            <MessageCard message={errorLogin}  />
                        </div>
                    ) }  
            </form>

        </div>        
    );

}

export default LoginForm