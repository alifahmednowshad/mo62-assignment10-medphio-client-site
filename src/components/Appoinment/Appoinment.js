import React from 'react';

const Appointment = () => {
    return (
        <div className='my-5 container rounded-3'>
            <div className='bg-info bg-opacity-50 py-5'>
                <h2>Congrats your appoinment aproved</h2>
                <h4>Your serial number is : 05</h4>

                <div>
                    <h5>Doctor Time Shedule</h5>
                    <h3>08:00 am - 02:00 pm</h3>
                    <h3>06:00 pm - 09:00 pm</h3>
                </div>
            </div>
        </div>
        
    );
};

export default Appointment;