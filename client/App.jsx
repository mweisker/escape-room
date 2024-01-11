import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './path/SignIn.jsx';
import MainPage from './path/MainPage.jsx';
import TheRoom from './path/TheRoom.jsx';
import Computer from './path/puzzle-path/Computer.jsx';
import Math from './path/puzzle-path/Math.jsx';



const App = () => {
  // const [userInfo, setUserInfo] = useState({userId: null, userName: null});
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={ <Computer />} /> */}


        {/* <Route path='/' element={ <SignIn />} /> */}
        <Route path='/main-page' element={ <MainPage />} />
        {/* <Route path='/the-room' element={ <TheRoom />} /> */}
        <Route path='/' element={ <TheRoom /> } /> 
        <Route path='/computer' element={ <Computer /> } />
        <Route path='/math' element={ <Math /> } />
      </Routes>
    </div>
  )
}

export default App;
