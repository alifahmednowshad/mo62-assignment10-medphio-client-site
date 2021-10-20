import React from 'react';
import useMedphioData from '../../Hooks/useMedphioData';
import Doctor from '../Doctor/Doctor';

const About = () => {
    const [datas] = useMedphioData([]);
    return (
        <div className='container'>
            <div className="d-flex row my-5 g-4">
                
                {
                    datas.slice(0,3).map(datum => <Doctor datum={datum}></Doctor>)
                }
                
            </div>
        </div>
    );
};

export default About ;