import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './path/SignIn.jsx';
import MainPage from './path/MainPage.jsx';


const App = () => {
  // const [userInfo, setUserInfo] = useState({userId: null, userName: null});
  return (
    <div>
      <Routes>
        <Route path='/' element={ <SignIn />} />
        <Route path='/main-page' element={ <MainPage />} />
      </Routes>
    </div>
  )
}

export default App;
