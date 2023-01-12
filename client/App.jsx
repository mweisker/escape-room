// import { response } from 'express';
import React, { Component, useEffect, useState } from 'react';
import { HashRouter, BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Navbar from './components/Navbar';

const App = () => {

    return (
        <div className='App'>
            <BrowserRouter>
            <Navbar />
                <div className='pages'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='/login'
                            element={<Login></Login>}
                        />
                        <Route
                            path='/signin'
                            element={<Signin></Signin>}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
        // <Routes>
        //     <Route path='/' element={<HomePage />} />
        //     <Route path='/login' element={<LoginPage />} />
        // </Routes>
    )
    /*
    const [backendData, setBackendData] = useState([{}]);
    const [newUserData, setNewUserData] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

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
    */
    /*
    const createUser = async () => {
        console.log('hello')
        try {
            console.log('test')
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
            console.log('world')
            setLoggedIn(true);
        } catch(err) {
            console.log(err)
        }
    }
    */
    /*
    const verifyUser = async () => {
        // console.log('hello')

        try {
            const response = await fetch("/api/login/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "Nova3",
                    password: "Nova"
                })
            });
            console.log('hello')

        } catch(err) {
            console.log(err)
        }
        setLoggedIn(true)
    }
    

    console.log('logged in ', loggedIn)
    */
    // return (
    //     <div>
    //         <h1>Can you escape?</h1>

    //         {(typeof backendData === 'undefined') ? (
    //             <p>Loading...</p>
    //         ): (
    //             backendData.map((user, i) => (
    //                 // console.log(user)
    //                 // <p>user</p>
    //                 <p key={i}>{(user.username)}</p>
    //             ))
    //         )}
            
    //         <h2>Sign in...if you dare...</h2>

    //         <form>
    //             <input className="username" placeholder='username'></input>
    //             <input className="password" placeholder='password'></input>
    //             <button className='submit' onClick={createUser} type='submit'>Submit</button>
    //         </form>

    //         <h2>Log in...if you dare...</h2>

    //         <form>
    //             <input className="username" placeholder='username'></input>
    //             <input className="password" placeholder='password'></input>
    //             <button className='submit' onClick={verifyUser} type='submit'>Submit</button>
    //         </form>



    //     </div>
    //     // <Switch>
    //     //     <Route
    //     //     path="/"
    //     //     component={<Home />}
    //     //     />
    //     // </Switch>

    // )
}


export default App;