import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import baseurl from '../../Api';
import axios from 'axios';
import './ulogin.css'

const Ulogin = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate =useNavigate();


  const handlelogin = async (e) => {
    e.preventDefault();
    console.log("hai")
   
    const response = await axios.post(baseurl+"/ulogin/uloginview", {
      username: username,
      password: password
    });

    
    if (response.data.success) {
      alert('LOGIN SUCCESSFULL')
      navigate('/uhome')
    }
    else {
      setError('Maybe your password or username is wrong or either it is banned ')
    }
  }

  
  return (
    <div>
      <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="/usignup">Create a new account?</a>
          
        </div>
        <button type="submit" onClick={handlelogin}>Login</button>
        {error && <p style={{margintop: 9, color: 'red'}}>{error}</p>}
      </form>
    </div>
    </div>
  )
}

export default Ulogin
