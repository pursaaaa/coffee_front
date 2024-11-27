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
        <div className='hero-box' data-aos='fade-zoom-in' data-aos-duration='1200'>
                <div className='hero-img col-12'>
                    <img src='/homeimg.jpg'></img>
                    <div className='hero-overlay-text'>COFFEE SHOP</div>
                </div>
                <div className='hero-info'>
                    <p>Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from.Our vision has been very clear from the start: We focus on making our coffees better and better. No compromise - just great coffee. </p>
                    <p>Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from.</p>
                </div>
        </div>
    );
}

export default Hero;
