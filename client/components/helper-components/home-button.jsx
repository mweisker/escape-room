import React from 'react';

import home from '../../img/home.png';
import { useNavigate } from 'react-router-dom';
import './home-button.scss'

export default function Trio({num}) {

  const navigate = useNavigate();


  return (
    <div className='home-holder'>
      <img className='home-button' onClick={() => {navigate('/')}} src={home}></img>
    </div>
  )
}