import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import axios from 'axios';
import config from '../config';


function Hero() {
    const [fullname, setFullname] = useState(''); // State to hold the fetched full name

    useEffect(() => {
        fetchFullname(); // Fetch full name when the component mounts
    }, []);

    const fetchFullname = async () => {
        try {
            const res = await axios.get(config.apiPath + '/user/data', config.headers());

            if (res.data.result !== undefined) {
                // Assume the API returns { name: "John Doe" }
                setFullname(res.data.result);
            }

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    return (
        // <section
        //     id="hero"
        //     className="hero-section d-flex align-items-center my-5">
        //     <div className="container">
        //         <div className="row justify-content-center align-items-center">


        //             <div className="hero-text col-12 col-md-6 text-start text-lg-start mb-4 mb-lg-0" data-aos='fade-right' data-aos-duration='1400'>
        //                 <p className="info-text">
        //                     Discover the finest coffee blends and experience the perfect brew. From aromatic espressos to creamy
        //                     lattes, we’ve got it all. Your coffee journey starts here.
        //                 </p>
        //                 <p className='info-text'>
        //                 Our vision has been very clear from the start: We focus on making our coffees better and better. No compromise - just great coffee. We would never blend our coffees in order to showcase specific flavour profiles and to present each farm we work with. This makes our farmers proud and the product fully traceable.
        //                 </p>
        //                 <a href="#products" className="btn btn-lg">
        //                     สินค้าล่าสุดของเรา
        //                 </a>
        //             </div>


        //             <div className="col-12 col-lg-6 text-center" data-aos='fade-up-left' data-aos-duration='1400' >
        //                 <img
        //                     src="/farmer.png"
        //                     alt="Coffee"
        //                     className="img-fluid"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </section>
        
        // <div className="hero-container">
        //     <img src="/000071.JPEG" alt="story1" className="top-hero-img"></img>
        //     <div className="bottom-hero-text" data-aos='fade-up' data-aos-duration='1500'>
        //         <div className="hero-content">
        //             <h1>This is header</h1>
        //             <p>Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from.</p>
        //         </div>
        //     </div>
        // </div>
        <div className='hero-box'>

                <div className='hero-img col-12'>
                    <img src='/homeimg.jpg'></img>
                </div>
                <div className='hero-info'>
                    <p>Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from.Our vision has been very clear from the start: We focus on making our coffees better and better. No compromise - just great coffee. </p>
                    <p>Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from.</p>
                </div>

        </div>
    );
}

export default Hero;
