import {useState} from 'react'
import Home from './components/Home'
import Register from './components/Resgister'
import Login from './components/Login'
import './App.css'

function App() {
  const [view, setView] = useState('home')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)


  console.log(user)

  if(loading) {
    return(
      <div>
        <h1>loading...</h1>
      </div>

    )
  }

  else if (view === 'home') {
    return (
      <div>
        <Home setView={setView} setUser={setUser} user={user} loading={loading} setLoading={setLoading}/>
      </div>
    )
  } else if (view === 'register') {
    return (
      <div>
        <Register setUser={setUser} setView={setView} loading={loading} setLoading={setLoading}/>
      </div>
    )
  } else if (view === 'login') {
    return (
      <div>
        <Login setUser={setUser} setView={setView} loading={loading} setLoading={setLoading} />
      </div>
    )
  }
}

export default App