import React, { useState } from 'react'
import './login.css'

import axios from 'axios';
import baseurl from '../../Api';
import { useNavigate } from 'react-router-dom';


export const Login = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate =useNavigate();


  const handlelogin = async (e) => {
    e.preventDefault();
    console.log("hai")
   
    const response = await axios.post(baseurl+"/login/loginview", {
      username: username,
      password: password,
    });

    
    if (response.data.success) {
      alert('LOGIN SUCCESSFULL')
      navigate('/home')
    }
    else {
      setError('invalid username or password.please try again')
    }
  }

  return (
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
          {/* <a href="/signup">Create a new account?</a> */}
          
        </div>
        <button type="submit" onClick={handlelogin}>Login</button>
        {error && <p style={{margintop: 9, color: 'red'}}>{error}</p>}
      </form>
    </div>
  )
}
