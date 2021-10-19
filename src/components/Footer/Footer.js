import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid bg-primary py-2 text-center'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-12 col-md-3'>
                    <h1 className="fs-2 text-white">Medphio</h1>
                </div>
                <div className=' col-12 col-md-3 fs-3'>
                    <i className="fab fa-facebook-square me-3 icons"></i>
                    <i className="fab fa-linkedin me-3 icons"></i>
                    <i className="fab fa-twitter-square icons"></i>
                </div>
                <div className='col-md-3'></div>
            </div>
            <p className='text-white m-0'>© 2021 medphio.com. All rights reserved.</p>
        </div>
    );
};

export default Footer;