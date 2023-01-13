import { Link, useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const logged = props.logged;

    let navigate = useNavigate();
    const login = () => {
        let path = '/login';
        navigate(path);
    }
    const signIn = () => {
        let path = '/signin';
        navigate(path);
    }

    console.log('navbar logged ', logged)

    return (
        <header>
            <div className="container">
                <div className='space'>
                    
                </div>
                <Link to='/'>
                    <h1>Escape room</h1>
                </Link>
                <div className='login-buttons'>
                    {(!logged) ? (
                        <div className="signin-buttons">
                            <button className='button login-button' onClick={login}>Login</button>
                            <button className="button login-button" onClick={signIn}>Sign up</button>
                        </div>
                    ) : (
                        <div className="signin-buttons">
                            <button className='button logout-bitton'>Log out</button>
                        </div>
                    )}
                </div>

                {/* // <div className="signin-buttons">
                //     <button className='button login-button' onClick={login}>Login</button>
                //     <button className="button login-button" onClick={signIn}>Sign up</button>
                // </div> */}
            </div>
        </header>
    )
}

export default Navbar