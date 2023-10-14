import { useState } from 'react';
import { postUser } from '../../api/post-user';
import { useAuth } from '../../hooks/use-auth';
import MessageCard from '../MessageCard/MessageCard';
import LoginForm from '../AdminLogin/LoginForm';

function AddUser() {

    const {auth, setAuth} = useAuth();
    const [messageBlock, setMessageBlock] = useState(false);
    const [message, setMessage] = useState('');    
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        image: '',
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
            postUser(
                credentials.username,
                credentials.password,
                credentials.first_name,
                credentials.last_name,
                credentials.email,
                credentials.image,
            ).then((response) => {
                setMessageBlock(true);
                setMessage("Successful creation of admin user");
            }).catch((error) => {
                setMessageBlock(true);
                setMessage(error.message);
            });
        }
    };

    
    if ( auth.token ) {
        return (

            <form onSubmit={handleSubmit}>
                <div>
                    <h3>CREATE NEW ADMIN USER</h3>
                    <input 
                        type='text' 
                        id='username' 
                        placeholder='Username' 
                        onChange = {handleChange}
                        required
                        autoComplete='off'
                    />
                </div>
                <div>
                    <input 
                        type='text' 
                        id='first_name' 
                        placeholder='First Name' 
                        onChange = {handleChange}
                        required
                        autoComplete='given-name'
                    />
                </div>
                <div>
                    <input 
                        type='text' 
                        id='last_name' 
                        placeholder='Last Name' 
                        onChange = {handleChange}
                        required
                        autoComplete='family-name'
                    />
                </div>
                <div>
                    <input 
                        type='email' 
                        id='email' 
                        placeholder='Email' 
                        onChange = {handleChange}
                        required
                        autoComplete='email'
                    />
                </div> 
                <div>
                    <input 
                        type='url' 
                        id='image' 
                        placeholder='Image URL' 
                        onChange = {handleChange}
                    />
                </div>                                                
                <div>
                    <input 
                        type='password' 
                        id='password' 
                        placeholder='Password' 
                        onChange = {handleChange}
                        required
                        autoComplete='off'
                    />
                </div>
                <button type='submit'>CREATE</button>
                { messageBlock && ( 
                
                <div>
                    <MessageCard message={message}  />
                </div>
                ) }  
            </form>

        );
    } else {
        return (
            <div>
            <LoginForm />
            </div>
        );
    }
}

export default AddUser;