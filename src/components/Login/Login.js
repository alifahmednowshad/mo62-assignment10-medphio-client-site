import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';


const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;