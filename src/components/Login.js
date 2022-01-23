import axios from "axios";
import { useState } from "react";

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function loginFront(e) {
        e.preventDefault() 
        props.setLoading(true)

        const body = {
            username: username,
            password: password
        }

        axios.post('/auth/login', body)
            .then((res) => {
                props.setUser(res.data)
                props.setView('home')
                props.setLoading(false)
            })
    }




    return (
        <section>
            <h1>Login</h1>

            <form onSubmit={loginFront}>
                <input placeholder='username' type='text' onChange={handleUsername} />
                <input placeholder='password' type='password' onChange={handlePassword} />
                <button>Login</button>
            </form>
        </section>
    )


}

export default Login