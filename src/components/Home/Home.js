import React from 'react';
import useMedphioData from '../../Hooks/useMedphioData';
import banner1 from '../../Images/banner-1.jpg';
import banner2 from '../../Images/banner-2.jpg';
import banner3 from '../../Images/banner-3.jpg';
import teamImg from '../../Images/Surgeon.jpg'
import Service from '../Service/Service';

const Home = () => {
    const [datas] = useMedphioData([]);
    return (
        <div>
            {/* carousel area  */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-primary" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className='bg-primary'></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className='bg-primary'></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={banner1} className="img-fluid d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='text-dark'>Welcome To Medphio</h5>
                        <p className='text-dark'>We at Medphio are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={banner2} className="img-fluid d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='text-dark'>Welcome To Medphio</h5>
                        <p className='text-dark'>We at Medphio are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={banner3} className="img-fluid d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block text-dark">
                        <h5 className='text-dark'>Welcome To Medphio</h5>
                        <p className='text-dark'>We at Medphio are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* services item  */}
            <div className='container my-5'>
                <h2>Our Services</h2>
                <div className="d-flex row mt-1 g-4">
                
                    {
                        datas.slice(0,6).map(datum => <Service datum={datum}></Service>)
                    }
                
                </div>
            </div>

            {/* our team  */}
            <div className='bg-secondary  bg-opacity-25'>
                <div className='container py-5'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-6 text-start'>
                            <h6>Dr. Stephanie Wosniack</h6>
                            <h1>OUR TEAM</h1>
                            <p>Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her calling to help others get well.</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <img src={teamImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* about  */}
            <div className='container my-5 py-md-3'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h6>Address: Dhaka,Bangladesh</h6>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h6>Time: 24/7 days</h6>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h6>Hotline: 00144 55606</h6>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;