import React from 'react';

import home from '../../img/home.png';
import { useNavigate } from 'react-router-dom';

export default function Trio({num}) {

  const navigate = useNavigate();


  return (
    <>
      <img className='home-button' onClick={() => {navigate('/')}} src={home}></img>
    </>
  )
}