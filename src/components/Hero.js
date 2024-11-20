import React from 'react';

function Hero() {
    return (
        <section id="hero" className="hero-section text-center text-white d-flex align-items-center" style={{ backgroundColor: '#4E342E', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="display-4 fw-bold">Experience the Richness of Coffee</h1>
                <p className="lead">Hand-picked, roasted to perfection, delivered to your door.</p>
                <a href="#products" className="btn btn-warning btn-lg mt-4">Shop Now</a>
            </div>
        </section>
    );
}

export default Hero;
