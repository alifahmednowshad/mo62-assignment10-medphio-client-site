import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';


const Login = () => {

    const {error, signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange} = useAuth();

    return (
        <div className='container mt-5 mb-5'>
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
                                <Link to='/register'>New user?</Link>
                            </label>
                            </div>
                        </div>
                        <div className='text-danger mb-3 mt-0'>{error}</div>
                        <div className="col-12 m-0">
                            <button type="submit" className="btn btn-primary w-50">Login</button>
                        </div>
                        <div className='row mt-4 align-items-center justify-content-between'>
                            <div className='text-start col-7'>
                                <h6 >You also signin here</h6>
                            </div>
                            <div className='col-5 p-0'>
                                <button onClick={signInUsingGoogle} className='w-100 btn btn-danger'>Google</button>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div className='col-md-3'></div>
            </div>
        </div>
    );
};

export default Login;