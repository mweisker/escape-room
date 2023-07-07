import React, { useState, useEffect } from 'react';
import getCookie from '../util/getCookie.js';
// import picture from '../img/room-background.png';
import background from '../img/room-background.png'

// import photo from '../img/'

import { useNavigate } from 'react-router-dom';

export default function MainPage() {

  const navigate = useNavigate();

  return (
    <div className='main-div'>
      <h1>Can you escape?</h1>
      {background}
      <img src={background} alt='Room-Background' />
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'></img>
      <button onClick={() => {navigate('/')}}>To Sign In</button>
      <button onClick={() => {navigate('the-room')}}>The Room</button>
    </div>
  )
}