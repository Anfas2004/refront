// src/Signup.js
import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../Api';

const Signup = () => {
    var [inputs,setInputs]=useState({"username":'',"email":'',"dob":'',"password":'',"confirmPassword":'',})

const navigate = useNavigate();

const inputhandler =(event)=> {
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}

const savedata =()=>{
  console.log(inputs)
  axios.post(baseurl+"/signup/signupnew",inputs)
  .then((response)=>{alert("Record Saved")})
  .catch(err=>console.log(err))

  alert('ACOOUNT CREATED SUCCESSFULLY')
  navigate('/')
}
  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={FormData.username}
            onChange={inputhandler}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={FormData.email}
            onChange={inputhandler}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={FormData.dob}
            onChange={inputhandler}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={FormData.password}
            onChange={inputhandler}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={FormData.confirmPassword}
            onChange={inputhandler}
            required
          />
          <a href="/">Already have an account?</a>
        </div>

        <button type="submit" onClick={savedata}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
