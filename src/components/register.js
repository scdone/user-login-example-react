import axios from 'axios'
// import { postgresMd5PasswordHash } from 'pg/lib/utils'
import { useState } from 'react'

function Register(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleConfirm(e){
        setConfirm(e.target.value)
    }

    function registerFront(e) {
        e.preventDefault()

        if(password !== confirm){
            alert('passwords do not match')
            setPassword('')
            setConfirm('')
        } else {
            const body = {
                username: username,
                password: password
            }
            axios.post('/auth/register', body)
                .then((res) => {
                    props.setUser(res.data)
                })
        }
    }

    
    
    return (
        <section>
            <h1>Register</h1>

            <form onSubmit={registerFront}>
                <input placeholder='username' type='text' onChange={handleUsername}/>
                <input placeholder='password' type='password' onChange={handlePassword} value={password}/>
                <input placeholder='confirm password' type='password' onChange={handleConfirm} value={confirm}/>
                <button>Register</button>
            </form>
        </section>
    )
}

export default Register