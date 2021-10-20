import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Login</h2>
            <form action="">
                <input type="email" placeholder='Email address' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value='Login' />
                <br />
            </form>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;