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
            // Replace with your actual API endpoint
            const token = localStorage.getItem('token'); // Get the token from localStorage
            const response = await axios.get(config.apiPath + '/user/data', {
                headers: {
                    Authorization: token, // Pass token in headers for authentication
                },
            });

            // Assume the API returns { name: "John Doe" }
            setFullname(response.data.fullname);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    return (
        <section
            id="hero"
            className="hero-section d-flex align-items-center my-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    
                   
                    <div className="hero-text col-12 col-lg-6 text-start text-lg-start mb-4 mb-lg-0" data-aos='fade-right' data-aos-duration='1400'>
                        <h1>
                            ยินดีต้อนรับ สู่ร้านกาแฟที่ดีที่สุดในเมืองนี้!
                        </h1>
                        <p className="info-text">
                            Discover the finest coffee blends and experience the perfect brew. From aromatic espressos to creamy
                            lattes, we’ve got it all. Your coffee journey starts here.
                        </p>
                        <a href="#products" className="btn btn-lg mt-3">
                            สินค้าล่าสุดของเรา
                        </a>
                    </div>

                   
                    <div className="col-12 col-lg-6 text-center" data-aos='fade-up-left' data-aos-duration='1400' >
                        <img
                            src="/farmer.png"
                            alt="Coffee"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
