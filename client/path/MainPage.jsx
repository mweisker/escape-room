import React, { useState, useEffect } from 'react';
import getCookie from '../util/getCookie.js';

import { useNavigate } from 'react-router-dom';

export default function MainPage() {

  const navigate = useNavigate();

  return (
    <div className='main-div'>
      <h1>Can you escape?</h1>
    </div>
  )
}