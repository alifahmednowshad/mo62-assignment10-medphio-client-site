import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {

    const history = useHistory([]);
    const {s_img, title, des, profession} = props.course || {};
    const handleAdmissinBtn = () =>{
        history.push('./admission')
    }
    
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card my-card h-100">
                <div>
                    <img src={s_img} className='course-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body bg-light">
                    <div className='d-flex justify-content-between'>
                        <p>{title}</p>
                        <h3>{profession}</h3>
                        <p>{des}</p>
                    </div>
                    <div className='d-flex fw-bold align-items-center justify-content-between'>
                        <p className=''><i className="fas fa-book"></i></p>
                        <p className=''><i className="fas fa-user"></i></p>
                    </div>
                    <button onClick={handleAdmissinBtn} className='btn btn-primary w-100 py-2'>Details</button>
                </div> 
            </div>
        </div>
    );
};

export default Service;