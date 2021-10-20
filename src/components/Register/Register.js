import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Register = () => {

    const {error, handleRegistration, handlePasswordChange, handleEmailChange} = useFirebase();

    return (
        <div className='container'>
            <h2>Register</h2>
            <form onSubmit={handleRegistration} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword4" required/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
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
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>

            <button>Google Sign In</button>
            <br />
            <Link to='/login'>Already Register?</Link>
        </div>
    );
};

export default Register;