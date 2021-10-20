import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const {d_img, profession, d_name} = props.datum || {};
    return (
        <div className="col-lg-4 col-md-6 col-12 ">
            <div className="card my-card h-100  bg-light">
                <div className='p-2'>
                    <img src={d_img} className='rounded-3 rounded-circle border doctor-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body">
                    <h3>{profession}</h3>
                    <h6>{d_name}</h6>
                </div> 
            </div>
        </div>
    );
};

export default Doctor;