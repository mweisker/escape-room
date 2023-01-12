import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from '../img/opening-photo.png'

const Home = () => {
    const [users, setUsers] = useState(null)





    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api')
            const json = await response.json()
            if (response.ok) {
                setUsers(json)
            }
        }
        fetchUsers()
    }, [])

    let navigate = useNavigate();
    const login = () => {
        let path = '/login';
        navigate(path);
    }
    const signIn = () => {
        let path = '/signin';
        navigate(path);
    }

    return (
        <div className="home">
            <div className="signin-buttons">
                <button className='button login-button' onClick={login}>Login</button>
                <button className="button login-button" onClick={signIn}>Sign up</button>
            </div>
            <div className="users">
                {users && users.map((user) => (
                    <p key={user._id}>{user.username}</p>
                ))}
            </div>

            <img className="opening-img" src={img}/>
            <h2>Enter...if you dare...</h2>
            <button className="start-game">Enter</button>

        </div>
    )
}

export default Home
