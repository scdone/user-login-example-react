import {useState} from 'react'
import Home from './components/home'
import Register from './components/register';
import './App.css';

function App() {
  const [view, setView] = useState('home')
  const [user, setUser] = useState(null)

  if(view === 'home') {
    return (
      <div>
        <Home setView={setView}/>
      </div>
    )
  } else if (view === 'register') {
    return (
      <div>
        <Register setUser={setUser}/>
      </div>
    )
  }
}

export default App;
