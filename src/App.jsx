import { useState } from 'react'
import './App.css'
import Login from './pages/Login.jsx'
import  Home  from './pages/Home.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStatus = () => {
    setIsLoggedIn(true);
  };
  const [currentForm, setCF] = useState('login');
  return (
    <>
    <div className='App'>
      
      {/* <Login onLoginStatus = {handleLoginStatus} /> */}
      {isLoggedIn ? <Login />: <Home onLoginStatus = {handleLoginStatus}/>}
    </div>
      
    </>
  )
}

export default App
