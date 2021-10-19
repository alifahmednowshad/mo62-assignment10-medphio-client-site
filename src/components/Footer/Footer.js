import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid bg-primary py-2 text-center'>
            <div className='fs-3'>
                <i className="fab fa-facebook-square me-4 icons"></i>
                <i className="fab fa-linkedin me-4 icons"></i>
                <i className="fab fa-twitter-square icons"></i>
            </div>
            <h1 className="fs-1 fw-bold text-white">E-education</h1>
            <p className='text-white'>© 2021 e-education.com. All rights reserved.</p>
        </div>
    );
};

export default Footer;