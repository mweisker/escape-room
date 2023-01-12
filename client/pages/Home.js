import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

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
    const routeChange = () => {
        let path = '/login';
        navigate(path);
    }

    return (
        <div className="home">
            <div className="users">
                {users && users.map((user) => (
                    <p key={user._id}>{user.username}</p>
                ))}
            </div>
            <button onClick={routeChange}>Login</button>
        </div>
    )
}

export default Home
