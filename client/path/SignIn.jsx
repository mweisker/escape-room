import React, { useState, useEffect } from 'react';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';
import getCookie from '../util/getCookie.js';
import image from '../img/detective.png';

import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [login, setLogin] = useState(true);

  const toggleLogin = () => {
    const swapped = !login;
    setLogin(swapped);
  }

  const navigate = useNavigate();

  const toMain = () => {
    navigate('main-page')
  }

  return (
    <div className='main-div'>
      <h1>Welcome to Procrastination Dissuasion</h1>
      <h2>Never forget about a project again</h2>
      <div className='welcome-form'>
        <div className='signin-div left'>
          <h2>{ !login ? 'Register' : 'Sign in to'} your account</h2>
          { login ? <Login /> : <Register /> }
        </div>
        <div className='seperator'></div>
        <div className='signin-div right'>
        <h2>or { login ? 'register' : 'sign in'}</h2>
        <button onClick={toggleLogin}>{ login ? 'Register' : 'Sign in'}</button>
        </div>
      </div>

      <img src={image} alt='just show the frickin image' />

      <button onClick={toMain}>
        To Main Page
      </button>
      <button onClick={() => {navigate('the-room')}}>The Room</button>


      {/* { cookie ? <button onClick={() => navigate('/main-page')}>Sign in</button> : null} */}
    </div>
  )
}