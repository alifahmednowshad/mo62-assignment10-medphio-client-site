import React from 'react';
import useMedphioData from '../../Hooks/useMedphioData';
import Doctors from '../Doctors/Doctors';

const About = () => {
    const [datas] = useMedphioData([]);
    return (
        <div className='container'>
            <div className="d-flex row my-5 g-4">
                
                {
                    datas.slice(0,3).map(datum => <Doctors datum={datum}></Doctors>)
                }
                
            </div>
        </div>
    );
};

export default About ;