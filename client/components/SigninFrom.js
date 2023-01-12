const { useState } = require("react")


const SigninForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const form = props.form;

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
            const json = await response.json()
            if (!response.ok) {
                setError(json.err)
            }
            if (response.ok) {
                setUsername('')
                setPassword('')
                setError(null)
                console.log('New user added')
            }
            
        } else if (form === 'login') {
            console.log('You are in the login form, better set that shit up')
        }


        const json = await response.json()
        if (!response.ok) {
            setError(json.err)
        }
        if (response.ok) {
            setUsername('')
            setPassword('')
            setError(null)
            console.log('New user added')
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
                value={password}
            />
            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SigninForm