import { useState } from 'react'
import './App.css'
import Authentication from './Authentication'
import UnAuthentication from './UnAuthentication'

function App() {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
  if(token){
    return <Authentication/>
  }
  else{
    return <UnAuthentication setToken={setToken}/>
  }
}

export default App
