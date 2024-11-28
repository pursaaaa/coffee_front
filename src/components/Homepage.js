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
            <Footer />
        </div>
    )
}

export default Homepage