import { useEffect, useState } from "react"
import SigninForm from "../components/SigninFrom";


const Signin = () => {
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
        <div className="signin">
            <h2>Sign in</h2>
            <SigninForm form='signin' />
        </div>
    )
}

export default Signin