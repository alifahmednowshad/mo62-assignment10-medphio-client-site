import React from 'react';
import useMedphioData from '../../Hooks/useMedphioData';
import ServicesDetails from '../ServvicesDetails/ServicesDetails';

const Services = () => {

    const [datas] = useMedphioData([]);
    
    return (
        <div className='container'>
            <div className="d-flex row my-5 g-4">
               
                {
                    datas.map(datum => <ServicesDetails key={datum.id} datum={datum}></ServicesDetails>)
                }
            
            </div>
        </div>
    );
};

export default Services;
