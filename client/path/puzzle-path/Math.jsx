import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Home from '../../components/helper-components/home-button.jsx';
import './Math.scss';


export default function Computer() {

  const navigate = useNavigate();


  return (
    <>
      {/* <h1 className='math-welcome'>Math puzzle!</h1> */}
      <div className='math-background'>

      </div>
      <Home/>
    </>
  )
}