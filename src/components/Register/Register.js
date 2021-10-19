import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Register</h2>
            <form action="">
                <input type="email" placeholder='Username or email address' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value='Login' />
                <br />
            </form>
            <button>Google Sign In</button>
            <br />
            <Link to='/login'>Already Register?</Link>
        </div>
    );
};

export default Register;