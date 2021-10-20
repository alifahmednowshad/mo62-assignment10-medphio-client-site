import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    
    const {error, signInUsingGoogle, handleRegistration, handleNameChange, handlePasswordChange, handleEmailChange, toggleLogin} = useAuth();

    return (
        <div className='container'>
            <h2 className='my-4'>Please Register</h2>
            <div className='row'>
                <div className='col-md-3'></div>

                {/* form  */}
                <div className='col-12 col-md-6 py-3 '>
                    <form onSubmit={handleRegistration} className="row g-3 bg-info bg-opacity-50 rounded-3">
                    
                        <div className="col-12 text-start">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" required/>
                        </div>
                        <div className="col-12 text-start">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4" required/>
                        </div>
                        <div className="col-12 text-start">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input onBlur={handlePasswordChange} type="password" className="form-control" required/>
                        </div>
                        <div className="col-12 text-start">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Give your full address"/>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <Link to='/login'>
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                Already Register?
                            </label></Link>
                            </div>
                        </div>
                        <div className='text-danger'>{error}</div>
                        <div className="col-12 mb-3 mt-0">
                            <button type="submit" className="w-50 btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className='row my-3 align-items-center justify-content-between'>
                        <div className='text-start col-7'>
                            <h6 >You also signin here</h6>
                        </div>
                        <div className='col-5'>
                            <button onClick={signInUsingGoogle} className='w-100 btn btn-danger'>Google</button>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'></div>
            </div>
            <br />
        </div>
    );
};

export default Register;