import React from 'react';
import useMedphioData from '../../Hooks/useMedphioData';
import banner1 from '../../Images/banner-1.jpg';
import banner2 from '../../Images/banner-2.jpg';
import banner3 from '../../Images/banner-3.jpg';
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
            <div className='container'>
                <div className="d-flex row my-5 g-4">
                
                    {
                        datas.slice(0,6).map(datum => <Service datum={datum}></Service>)
                    }
                
                </div>
            </div>
            
        </div>
    );
};

export default Home;