function LoginForm() {
    const navigate = useNavigate()
    const {auth, setAuth} = useAuth ()
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id] : value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log( "credentials", credentials)
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then((response) => {
                console.log ("response", response.token)
                window.localStorage.setItem("token", response.token)
                setAuth({
                    token: response.token,
                })
                navigate("/")
            } )
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Username">Username:  </label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="Password">Password:  </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Login
            </button>
        </form>
    )
}
export default LoginForm