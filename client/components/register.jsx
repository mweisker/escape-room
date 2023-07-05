import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '' || confirmPassword === '') return alert('Excuse me, how are we going to register you if you don\'t even give us all the information?')
    else if (password !== confirmPassword) return alert('Your passwords didn\'t match.  I know it\'s hard when you can\'t see the letters but please try again.')
    const postFetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({UserName: username, Password: password})
    }
    const registerUser = async () => {
      try {
        const postUser = await fetch('/register', postFetchOptions);
        if (postUser.status === 400) return alert('I\'m afraid that password has already been chosen, you\'ll have to be a bit more creative I\'m afraid')
        const parsedResult = await postUser.json();
        navigate('/main-page');
        
      } catch (err) {
        console.log(`Error in registerUser: ${err}`)
      }
    }
    registerUser();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="registerUsername">Username:</label>
        <input
          type="text"
          id="registerUsername"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="registerPassword">Password:</label>
        <input
          type="password"
          id="registerPassword"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default login;