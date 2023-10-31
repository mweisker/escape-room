import React, {useState, useEffect} from 'react';

export default function Trio({num}) {
  const [orbs, useOrbs] = useState([0, 0, 0]);

  useEffect(() => {
    const newOrbs = []
    for (let i = 0; i < 3; i++) {
      if (i >= num) newOrbs.push(0);
      else newOrbs.push(100);
    }
    useOrbs(newOrbs);
  }, [num])

  return (
    <>
      <div className='trio'>
        {orbs.map((opacity, i) => (
          <div className={`orbs orb${i}` } style={{opacity: opacity}}></div>
        ))}
        {/* <div className='orbs'></div>
        <div className='orbs'></div>
        <div className='orbs'></div> */}

      </div>
    </>
  )
}