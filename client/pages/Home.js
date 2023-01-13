import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from '../img/opening-photo.png'

const Home = (props) => {
    // const [users, setUsers] = useState(null)

    const logged = props.logged





    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const response = await fetch('/api')
    //         const json = await response.json()
    //         if (response.ok) {
    //             setUsers(json)
    //         }
    //     }
    //     fetchUsers();
    //     console.log('test')

    // }, [])

    let navigate = useNavigate();
    // const login = () => {
    //     let path = '/login';
    //     navigate(path);
    // }
    // const signIn = () => {
    //     let path = '/signin';
    //     navigate(path);
    // }
    const enter = () => {
        console.log('enter invoked')
        console.log(logged)
        if (logged) {
            let path = '/theroom';
            navigate(path)
        } else {
            let path = '/signin';
            navigate(path)
        }
 
    }
    return (
        <div className="home">
            {/* <div className="signin-buttons">
                <button className='button login-button' onClick={login}>Login</button>
                <button className="button login-button" onClick={signIn}>Sign up</button>
            </div> */}

            {/* <div className="users">
                {users && users.map((user) => (
                    <p key={user._id}>{user.username}</p>
                ))}
            </div> */}

            <img className="opening-img" src={img}/>
            {/* <h2>Enter...if you dare...</h2> */}
            <div>
                {(logged === true) ? (
                    <div className="enter">
                        <h2>Enter...if you dare...</h2>
                        <button className="button start-game" onClick={enter}>Enter</button>
                    </div>
                ) : (
                    <p>{logged}</p>
                )
            }
            </div>
            {/* <button className="start-game" onClick={enter}>Enter</button> */}
            {/* {trouble && <button onClick={changeRoute}>Create new user</button>} */}


        </div>
    )
}

export default Home
