import axios from 'axios'

function Home(props) {
    function handleSignUp() {
        props.setView('register')
    }

    function handleLogin() {
        props.setView('login')
    }

    function handleLogout() {
        props.setLoading(true)
        axios.get(`/auth/logout`)
            .then(() => {
              props.setUser(null)
              props.setLoading(false)
            })
      }

    if (props.user) {
        return (
            <section>
                <h1>Welcome, {props.user.username}</h1>
                <button onClick={handleLogout}>Logout</button>
            </section>
        )
    } else {
        return (
            <section>
                <h1>Home</h1>
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={handleLogin}>Log in</button>
            </section>
        )
    }
}

export default Home