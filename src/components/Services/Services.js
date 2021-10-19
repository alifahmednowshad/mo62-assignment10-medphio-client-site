import React from 'react';
import useMedphioData from '../../Hooks/useMedphioData';
import Service from '../Service/Service';

const Services = () => {
    const [datas] = useMedphioData([]);
    return (
        <div className='container'>
            <div className="d-flex row my-5 g-4">
               
                {
                    datas.map(datum => <Service datum={datum}></Service>)
                }
            
            </div>
        </div>
    );
};

export default Services;
