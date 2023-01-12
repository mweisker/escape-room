const { useState } = require("react");
import { useNavigate } from "react-router-dom";



const SigninForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [trouble, setTrouble] = useState(null);

    const form = props.form;
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    const changeRoute = () => {
        let path = '/signin';
        navigate(path);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password }

        if (form === 'signin') {
            console.log('signin form')
            const response = await fetch('/api/', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // console.log('before json')
            console.log(response)
            // const json = await response.json()
            // const json = JSON.parse(response)
            // console.log('after json')
            if (!response.ok) {
                // setError(json.err)
                setError(responce.statusText)
            }
            if (response.ok) {
                setUsername('')
                setPassword('')
                setError(null)
                console.log('New user added')

                let path = '/';
                navigate(path);
            }
            
        } else if (form === 'login') {
            console.log('You are in the login form, better set that shit up')
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // console.log('before json')
            // console.log(response)
            // const json = await response.json()
            // console.log('after json')
            if (!response.ok) {
                // setError(json.err)
                setError(response.statusText)
                setTrouble(true)
            }
            if (response.ok) {
                setUsername('')
                setPassword('')
                setError(null)
                console.log('Confirmed user')

                let path = '/';
                navigate(path);
            }
        }







    }

    return (
        <form className="signin-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <label>Password</label>
            <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                value={password}
            />
            <button>Submit</button>
            {error && <div className="error">{error}</div>}
            {trouble && <button onClick={changeRoute}>Create new user</button>}
        </form>
    )
}

export default SigninForm