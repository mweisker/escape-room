import { useEffect, useState } from "react"
import SigninForm from "../components/SigninFrom";

const Login = () => {
    // const [users, setUsers] = useState(null)

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const response = await fetch('/api')
    //         const json = await response.json()
    //         if (response.ok) {
    //             setUsers(json)
    //         }
    //     }
    //     fetchUsers()
    // }, [])

    return (
        <div className="login">
            <h2>Login</h2>
            <SigninForm form='login' />

        </div>
    )
}

export default Login

