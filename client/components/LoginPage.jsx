import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ErrorPage from './ErrorPage';

const LoginPage = (props) => {
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword] = useState('')
  const [ redirect, setRedirect ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userName, password})
      })

      const parsedData = await response.json();
      parsedData.message === 'verified' ? setRedirect(true) : null

      useEffect(()=> {
        if (redirect) {
          navigate('/customers')
        }
      }, [redirect])
  }

  return (
    <main >
      <div className="contentWrap">
        <p className="loginHeader" >Login</p>
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
          placeholder='enter your email'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text" />
          <input
          placeholder='enter your password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text" />
          <button className="loginBtn"
           >Login</button>
        </form>

      </div>
    </main>
  )
}

export default LoginPage;



