import React from 'react';
import useMedphioData from '../../Hooks/useMedphioData';
import Doctor from '../Doctor/Doctor';

const About = () => {
    const [datas] = useMedphioData([]);
    return (
        <div>
            <div className='bg-secondary py-5 bg-opacity-10'>
                <div className='container'> 
                    <p className='text-start'>What we stand for</p>
                    <h2 className='text-start mb-5'>OUR VALUES</h2>
                    <div className='row g-3 '>
                        <div className='col-12 col-md-6 col-lg-4 text-start'>
                            <h6>DOCTOR YOU CHOOSE</h6>
                            <p><small>Until the bureau's official website, that's a great curse on the members Fusce feugiat velit eu ante blandit facilisis.</small></p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 text-start'>
                            <h6>YOUR HEALTHCARE</h6>
                            <p><small>Vestibulum imperdiet vestibulum laoreet. The entire element of the grid before it is the key element.</small></p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 text-start'>
                            <h6>ALWAYS THERE FOR YOU</h6>
                            <p><small>Mauris commodo lacinia nisi a fermentum. Until the laughter is great, the customer's bills bears down, the pill is always there.</small></p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 text-start'>
                            <h6>NURSING STAFF</h6>
                            <p><small>Until the free housing, the protein is not a lion and, the pain of the throat is annoying. In the fermentation and the temperature put down the bills.</small></p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 text-start'>
                            <h6>EMERGENCY SERVICES</h6>
                            <p><small>The arrows are neither sticky nor, and vengeful nor seasons. In the earth's health.</small></p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 text-start'>
                            <h6>PREMIUM FACILITIES</h6>
                            <p><small>Until the gate of the earth, and the throat of the pure teenagers is the love of the EU. Of course, the bills of the gas, but the course was not limited.</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <h6>Our Management Team</h6>
                <h2>BOARD OF DIRECTORS</h2>
                <div className="d-flex row  mb-5 mt-2 g-4">
                    {
                        datas.slice(0,3).map(datum => <Doctor datum={datum}></Doctor>)
                    }
                   
                </div>
            </div>

            <div className='bg-info bg-opacity-50 py-4'>
                <div className='container'>
                   <div className='row g-3 align-items-center'>
                        <div className='col-12 col-md-6'>
                            <p className='m-1'>We are always looking for good and talented people</p>
                            <h4 className='text-danger fw-bold'>JOIN OUR TEAM</h4>
                        </div>
                        <div className='col-12 col-md-6 ms-auto'>
                            <button className='btn btn-primary'>Submit Your CV</button>
                        </div>
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default About ;