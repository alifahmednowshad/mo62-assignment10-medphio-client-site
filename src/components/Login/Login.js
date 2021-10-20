import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';


const Login = () => {

    const {error, signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange} = useAuth();

    return (
        <div className='container my-4'>
            <h2 className='mb-3'>Login</h2>

            <div className='row'>
                <div className='col-md-3'></div>

                <div className='col-12 col-md-6 py-3 bg-info bg-opacity-50 rounded-3'>
                    <form onSubmit={handleRegistration} className="row g-3">
                        <div className="col-12 text-start">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4" required/>
                        </div>
                        <div className="col-12  text-start">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword4" required/>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                <Link to='/login'>Already Register?</Link>
                            </label>
                            </div>
                        </div>
                        <div className='text-danger'>{error}</div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-50">Login</button>
                        </div>
                    </form>
                </div>
                
                <div className='col-md-3'></div>
            </div>
            <br />
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;