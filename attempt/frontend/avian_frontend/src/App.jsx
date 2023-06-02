import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn';
import Weather from './pages/Weather';
import Random from './pages/Random';
import Search from './pages/Search';
import BirdLog from './pages/BirdLog';
import LogBird from './pages/LogBird';
import NavBar from './components/NavBar';
import axios from 'axios'
import './App.css'

const getCSRFToken = ()=>{
  let csrfToken
  
  // the browser's cookies for this page are all in one string, separated by semi-colons
  const cookies = document.cookie.split(';')
  for ( let cookie of cookies ) {
      // individual cookies have their key and value separated by an equal sign
      const crumbs = cookie.split('=')
      if ( crumbs[0].trim() === 'csrftoken') {
          csrfToken = crumbs[1]
      }
  }
  return csrfToken
}
axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

function App() {
  
  const [user, setUser] = useState(null)

  const whoAmI = async () => {
    const response = await axios.get('/whoAmI')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

  useEffect(()=>{whoAmI()
  }, [])

  return (
    <div className="App">
      <HashRouter>
        <NavBar user={user} whoAmI={whoAmI}/>
        <Routes>
          <Route path='/' element={<HomePage user={user}/>}/>
          <Route path='/signup' element={<SignUp user={user}/>}/>
          <Route path='/login' element={<LogIn user={user} setUser={setUser}/>}/>
          <Route path='/weather' element={<Weather />}/>
          <Route path='/random' element={<Random />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/birdlog' element={<BirdLog user={user}/>}/>
          <Route path='/logbird' element={<LogBird />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
