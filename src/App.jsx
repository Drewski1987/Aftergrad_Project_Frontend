import {  useEffect, useState } from 'react'
import Login from './Components/Login.jsx'
import Register from './Components/Register'
// import Dashboard from './Components/Dashboard'  
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, [token, userId]);     

  return (
    <>
    <nav>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">AfterGrad</a>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/login" className="navbar-link">Login</a>
            </li>
            <li className="navbar-item">
              <a href="/register" className="navbar-link">Register</a>
            </li>
            <li className="navbar-item">
              <a href="/dashboard" className="navbar-link">Dashboard</a>
            </li>
          </ul>
        </div>      
    </nav>
    </nav>
    
    <Routes>
      <Route path="/login" element={<Login token={token} setToken={setToken} userId={userId} setUserId={setUserId} />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard" element={<Dashboard token={token} userId={userId} />} />  */}
    </Routes>
     
    </>
  )
}

export default App
