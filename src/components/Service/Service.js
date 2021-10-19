import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    
    const history = useHistory([]);
    const {s_img, title, d_info, profession} = props.datum || {};
   
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
                    <p>{title}</p>
                    <h3>{profession}</h3>
                    <p className='text-start'>{d_info.slice(0,90)}..</p>
                    <div className='d-flex'>
                        <button onClick={handleAdmissinBtn} className='btn btn-sm btn-primary w-100 py-2 me-3'>Details</button>
                        <button onClick={handleAdmissinBtn} className='btn btn-sm btn-primary w-100 py-2'>Serial Now</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Service;