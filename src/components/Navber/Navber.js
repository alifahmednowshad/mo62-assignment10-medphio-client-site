import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='bg-info'>
            <div className='d-flex container justify-content-between'>
                <div>
                    <h6>support@medphio.com</h6>
                </div>
                <div>
                    <button className="btn btn-danger me-2" type="submit">Login</button>
                    <button className="btn btn-danger" type="submit">Sign Up</button>
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
                                <Link className="nav-link text-white" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;