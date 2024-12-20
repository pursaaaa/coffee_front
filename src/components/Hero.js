import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import axios from 'axios';
import config from '../config';
import { Link } from "react-router-dom";


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
        <>
        <div className='hero-content' data-aos='fade-zoom-in' data-aos-duration='1200'>
                <div className='hero-img'>
                    <img src='/homeimg.jpg'></img>
                    <div className='hero-overlay-text'>COFFEE SHOP</div>
                </div>
                <div className='hero-box'>
                    <ul>
                        <li>
                            <Link to='/shop'>
                                <div  className='image-box'>
                                    <img src='/Beans.jpg'></img>
                                    <div className='box-overlay-text'>BEANs</div>
                                </div>
                                </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <div  className='image-box'>
                                    <img src='/000054.JPG'></img>
                                    <div className='box-overlay-text'>Our store</div>
                                </div>
                                </Link>
                        </li>
                    </ul>
                </div>
        </div>
        </>
    );
}

export default Hero;
