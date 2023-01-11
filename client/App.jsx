// import { response } from 'express';
import React, { Component, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'

const App = () => {

    const [backendData, setBackendData] = useState([{}]);
    const [newUserData, setNewUserData] = useState({});

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
    console.log('backendData ', backendData)

    // const createUser = async () => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             username: Nova3,
    //             password: nova
    //         })
    //     };
    //     const response = await fetch('/api', requestOptions);
    //     const data = await response.json();
    //     console.log('data');
    //     console.log(data);
    //     setNewUserData(data);


        // fetch('/api', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('data');
        //         console.log(data);

        //         newUserData(data)})
    // }
    
    const createUser = async () => {
        try {
            const response = await fetch("/api", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "Nova3",
                    password: "Nova"
                })
            });
            console.log('test')
            if (!response.username) {
                throw new Error(`Error!  status: ${response.status}`)
            }
            console.log('response')
            console.log(response)
            const result = await response.json();
            console.log('result is: ', JSON.stringify(result));
            setNewUserData({new: 'result'});
        } catch(err) {
            console.log(err)
        }
    }
    

    console.log('newUserData ', newUserData)

    return (
        <div>
            <h1>Can you escape?</h1>

            {(typeof backendData === 'undefined') ? (
                <p>Loading...</p>
            ): (
                backendData.map((user, i) => (
                    // console.log(user)
                    // <p>user</p>
                    <p key={i}>{(user.username)}</p>
                ))
            )}
            <h2>Sign in...if you dare...</h2>

            <form>
                <input className="username" placeholder='username'></input>
                <input className="password" placeholder='password'></input>
                <button className='submit' onClick={createUser} type='submit'>Submit</button>
            </form>
            <p>Good luck in your escape, {newUserData.username}</p>

            <div>
                {(typeof newUserData !== 'undefined') ? (
                    <p>Good luck in your escape, {newUserData.username}</p>
                ): ( <p></p>)}
            </div>

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