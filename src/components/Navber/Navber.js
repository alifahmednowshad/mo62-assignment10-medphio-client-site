
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Navber = () => {
    const {user, logOut} = useFirebase();
    return (
        <div className='bg-info'>
            <div className='d-flex container justify-content-between align-items-center'>
                <h6>support@medphio.com</h6>
                <div>
                    <span>{user.displayName} </span>
                    { user?.email && <button onClick={logOut} className="btn btn-danger" type="submit">Log Out</button>}
                    <Link to='/login'><button className="btn btn-danger ms-2" type="submit">Login</button></Link>
                    <Link to='/register'><button className="btn btn-danger ms-2" type="submit">Register</button></Link>
                </div>
            </div> 
            <nav className="navbar navbar-expand-lg navbar-light m-0 p-0 bg-primary">  
                <div className="container">
                    <span className="navbar-brand text-white">Medphio</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white"  to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/doctors">Doctors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/getInTouch">Get In Touch</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;