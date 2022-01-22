function Home(props) {
    function handleSignUp() {
        props.setView('register')
    }

    return (
        <section>
            <h1>Home</h1>
            <button onClick={handleSignUp}>Sign Up</button>
        </section>
    )
}

export default Home