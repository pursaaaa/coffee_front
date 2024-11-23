import React from 'react';
import '../styles/Hero.css';

function Hero() {
    return (
        <section
            id="hero"
            className="hero-section d-flex align-items-center">
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center">
                    
                   
                    <div className="hero-text col-12 col-lg-6 text-start text-lg-start mb-4 mb-lg-0" data-aos='fade-right' data-aos-duration='1400'>
                        <h1 className="display-4">
                            Welcome to the Best Coffee Shop in Town
                        </h1>
                        <p className="lead">
                            Discover the finest coffee blends and experience the perfect brew. From aromatic espressos to creamy
                            lattes, we’ve got it all. Your coffee journey starts here.
                        </p>
                        <a href="#products" className="btn btn-lg mt-3">
                            Latest Product
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
