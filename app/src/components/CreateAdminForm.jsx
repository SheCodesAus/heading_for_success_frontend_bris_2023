import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateAccountForm() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const history = useHistory();


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newUser = {
            name: name,
            username: username,
            password: password,
            email: email,
        };
        fetch('/api/create-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((data) => {
                // if the server returns a success message, redirect to /adminhome
                if (data.message === 'success') {
                    history.push('/adminhome');
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Something went wrong. Please try again later.');
            });
    };

    return (
        <div id="create-account-form">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccountForm;
