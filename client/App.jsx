// import { response } from 'express';
import React, { Component, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'

const App = () => {

    const [backendData, setBackendData] = useState([{}]);;

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                console.log(data)
                setBackendData(data)
            }
        )
    }, [])

    return (
        <div>
        <h1>Can you escape?</h1>

        {(typeof backendData.users === 'undefined') ? (
            <p>Loading...</p>
        ): (
            backendData.users.map((user, i) => (
                // console.log(user);
                // <p>user</p>
                <p key={i}>{(user)}</p>
            ))
        )}
        <h2>Sign in...if you dare...</h2>

        <form>
            <input className="username" placeholder='username'></input>
            <input className="password" placeholder='password'></input>
            <button className='submit' type='submit'>Submit</button>
        </form>

        </div>
        // <Switch>
        //     <Route
        //     path="/"
        //     component={<Home />}
        //     />
        // </Switch>

    )
}


export default App;