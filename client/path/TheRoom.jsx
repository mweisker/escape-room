import React, { useState, useEffect } from 'react';
import getCookie from '../util/getCookie.js';
import math from '../img/math-puzzle.png';
import map from '../img/map-puzzle.png';
import closetClosed from '../img/closet-closed.png';
import stoneTableBare from '../img/stone-table-bare.png';
import newsCrown from '../img/news-crown.png';
import newsVase from '../img/news-vase.png';
import newsSphinx from '../img/news-sphinx.png';
import computer from '../img/computer.png'




import './TheRoom.scss'


import { useNavigate } from 'react-router-dom';

export default function TheRoom() {
  const [newsSize, setNewsSize] = useState({
    crown: 'small',
    vase: 'small',
    sphinx: 'small'
  })

  const handleNews = (news) => {
    const oldNews = {...newsSize}
    if (oldNews[news] === 'small') {
      for (const key in oldNews) {
        oldNews[key] = 'gone';
      }
      oldNews[news] = 'big';
    } else {
      for (const key in oldNews) {
        oldNews[key] = 'small'
      }
    }
    // oldNews[news] === 'small' ? oldNews[news] = 'big' : oldNews[news] = 'small';
    setNewsSize(oldNews);
  }

  console.log(newsSize);

  const navigate = useNavigate();

  return (
    <div className='main-div'>
      <div className='room-background'>
        <div className='top-left, grid-square'></div>
        <div className='top-center, grid-square'></div>
        <div className='top-right, grid-square'>
          <img className='closet-closed' src={closetClosed} />
        </div>
        <div className='mid-left, grid-square'>
          <img className='computer' src={computer} />
        </div>
        <div className='mid-center, grid-square'>
          <div className='stone-table'>
            <img onClick={() => handleNews('crown')} className='magnifying-glass, news-crown, news' src={newsCrown} />
            <img onClick={() => handleNews('vase')} className='news-vase, news' src={newsVase} />
            <img onClick={() => handleNews('sphinx')} className='news-sphinx, news' src={newsSphinx} />
            <img onClick={() => handleNews('crown')} className={ newsSize.crown === 'big' ? 'big-news' : 'small-news'} src={newsCrown} />
            <img onClick={() => handleNews('vase')} className={ newsSize.vase === 'big' ? 'big-news' : 'small-news'} src={newsVase} />
            <img onClick={() => handleNews('sphinx')} className={ newsSize.sphinx === 'big' ? 'big-news' : 'small-news'} src={newsSphinx} />
          </div>
          {/* <img src={stoneTableBare} /> */}
        </div>
        <div className='mid-right, grid-square'></div>
        <div className='bottom-left, grid-square'>
          <img src={math} />
        </div>
        <div className='bottom-center, grid-square'></div>
        <div className='bottom-right, grid-square'>
          <img src={map} />
        </div>
      </div>
    </div>
  )
}