import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Products from './Products'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Homepage() {
    useEffect(() => {
        AOS.init({
            once: true
        })
    }, []);
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Products />
            
    <div className="story-home-container container d-flex  w-75 py-5 mb-5">
        <div className="story-home-content row align-items-center">
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="mb-3">Our story</h1>
            <p className="mb-2">
                Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from. We partner with producers we know and trust,
            </p>
            <p className='mb-3'>
                 ensuring quality throughout every step of the roasting process. Our ethical sourcing prioritises empowering farmers and fostering sustainability. This commitment results in great coffee that reflects a deep respect for people and the planet.
            </p>
            <a href="/story" className='text-dark'>Read more</a>
        </div>
        <div className="col-12 col-md-7 d-flex align-items-center"  data-aos="fade-up" data-aos-duration="1500">
            <img src="/homeimg.jpg" alt="story" className="img-fluid rounded shadow"/>
        </div>
        </div>
    </div>

        
            <Footer />
        </div>
    )
}

export default Homepage