import React from 'react';
import useMedphioData from '../../Hooks/useMedphioData';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [datas] = useMedphioData([]);
    return (
        <div className='container my-5'>
            <h2 className='text-start'>Our Doctors</h2>
            <div className="d-flex row my-3 g-4">
                
                {
                    datas.slice(0,6).map(datum => <Doctor key={datum.id} datum={datum}></Doctor>)
                }
                
            </div>
        </div>
    );
};

export default Doctors;