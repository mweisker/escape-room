import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') return alert('Excuse me, how are we going to find your information if you don\'t fill out the form completely?')
    const postFetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({UserName: username, Password: password})
    }
    const findUser = async () => {
      try {
        const findUser = await fetch('/login', postFetchOptions);
        if (findUser.status === 400) return alert('Username or Password does not exist, take a deep breath and try again.  Or if you forgot your login information, just register as a new user.  We don\'t change passwords here')
        const parsedResult = await findUser.json();
        navigate('/main-page');
        
      } catch (err) {
        console.log(`Error in findUser: ${err}`)
      }
    }
    findUser();
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="loginUsername">Username:</label>
        <input
          type="text"
          id="loginUsername"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="loginPassword">Password:</label>
        <input
          type="password"
          id="loginPassword"
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default login;
