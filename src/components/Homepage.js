import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Products from './Products'
import Footer from './Footer'


function Homepage() {
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