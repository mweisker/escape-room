import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Trio from '../../components/puzzle-components/trio.jsx';
import './Computer.scss';
import Home from '../../components/helper-components/home-button.jsx';



export default function Computer() {
  const [trio, useTrio] = useState([1, 2, 3])

  const navigate = useNavigate();

  const increment = array => {
    const copyTrio = [];
    array.forEach((num, i) => {
      console.log('num ', num);
      console.log('copy trio ', copyTrio)
      if (num === -1) copyTrio.push(trio[i]);
      else if (num === 3) copyTrio.push(0);
      else {
        copyTrio.push(++num);
      }
    })
    console.log(copyTrio);
    useTrio(copyTrio);
  }

  return (
    <>
      <div className='computer-background center-img'>
        <div className='computer-screen center-img'>
          { trio.map((num) => (
            // <div className='trio'>{num}</div>
            <Trio num={num}/>
          ))}
        </div>
        <div className='button-holder center-img'>
          <button onClick={() => increment([trio[0], trio[1], -1])}></button>
          <button onClick={() => increment([trio[0], trio[1], trio[2]])}></button>
          <button onClick={() => increment([-1, trio[1], trio[2]])}></button>
        </div>
      </div>
      {/* <h1>Computer</h1> */}
      {/* <img className='home-button' src={home}></img> */}
      <Home/>
    </>
  )
}