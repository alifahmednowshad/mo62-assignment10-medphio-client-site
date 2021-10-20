import React from 'react';
import { useHistory } from 'react-router';
import  './ServicesDetails.css'

const ServicesDetails = (props) => {

    const {s_img, title, d_info, profession, d_name} = props.datum;

    const history = useHistory([]);
    const handleAppointBtn = () =>{
        history.push('/appoinment')
    }

    return (
        <div className="col-md-6 col-12">
            <div className="card my-card h-100">
                <div>
                    <img src={s_img} className='course-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body bg-light">
                    <div>
                        <p>{title}</p>
                        <h6>Profession: <span className='fw-bold fs-5'>{profession}</span></h6>
                        <h6>Name: {d_name}</h6>
                        <p className='text-start'>{d_info}</p>
                    </div>
                    <div className='mb-2 fs-3'>
                        <i className="fab fa-facebook-square me-5 icon"></i>
                        <i className="fab fa-linkedin me-5 icon"></i>
                        <i className="fab fa-twitter-square icon"></i>
                    </div>
                    <div className='d-flex'>
                        <button onClick={handleAppointBtn} className='btn btn-sm btn-primary w-100 py-2'>Appointment</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default ServicesDetails;