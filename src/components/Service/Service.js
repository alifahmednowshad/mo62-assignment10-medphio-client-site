import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    
    const {s_img, title, d_info, profession} = props.datum;

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card my-card h-100">
                <div>
                    <img src={s_img} className='course-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body bg-light">
                    <p>{title}</p>
                    <h3>{profession}</h3>
                    <p className='text-start'>{d_info.slice(0,90)}..</p>
                    <div className='d-flex'>
                        <button className='btn btn-sm btn-primary w-100 py-2 me-3'>Details</button>
                        <Link path='/apoint'><button className='btn btn-sm btn-primary w-100 py-2'>Serial Now</button></Link>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Service;