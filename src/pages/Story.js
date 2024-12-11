import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../styles/Story.css';
import React, { useEffect } from "react";
import AOS from "aos";

function Story() {
    useEffect(() => {
        AOS.init({
            once: true
        })
    }, []);
    return (
        <>
        <Navbar />

    <div className='gallery' data-aos='fade-zoom-in' data-aos-duration='1400'>
        <div className='img-slide'>
            <img src='https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D' alt="img-1"></img>
            <img src='https://images.unsplash.com/photo-1469957761306-556935073eba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D' alt="img-2"></img>
            <img src='https://images.unsplash.com/photo-1515860734122-e0d771b36d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D' alt="img-3"></img>
            <img src='https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D' alt="img-4"></img>
            <img src='https://images.unsplash.com/photo-1671011032397-1d717b69315b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D' alt="img-5"></img>
            <img src='https://images.unsplash.com/photo-1671011032399-c663f04fe492?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D' alt="img-6"></img>
        </div>
        <div className='img-slide'>
            <img src='https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D' alt="img-7"></img>
            <img src='https://images.unsplash.com/photo-1469957761306-556935073eba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D' alt="img-8"></img>
            <img src='https://images.unsplash.com/photo-1515860734122-e0d771b36d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D' alt="img-9"></img>
            <img src='https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D' alt="img-10"></img>
            <img src='https://images.unsplash.com/photo-1671011032397-1d717b69315b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D' alt="img-11"></img>
            <img src='https://images.unsplash.com/photo-1671011032399-c663f04fe492?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D' alt="img-12"></img>
        </div>
    </div>

        <div className='aboutus-content' data-aos='fade-up' data-aos-duration='1400'>
            <p>We roast some of the best coffees on the planet</p>
            <p>THE BARN is a leading coffee roaster in Europe and represents the Specialty Coffee Movement at the highest level since 2010. Our beans are served by many coffee shops and home brewers across the globe.</p>
            <p>Our vision has been very clear from the start: We focus on making our coffees better and better. No compromise - just great coffee. We would never blend our coffees in order to showcase specific flavour profiles and to present each farm we work with. This makes our farmers proud and the product fully traceable.</p>
        </div>

        <section className="story-section">
        <div className="story-container">
        <img src="/story2.JPG" alt="story" className="left" data-aos='fade-right' data-aos-duration='1500'></img>
            <div className="right" data-aos='fade-left' data-aos-duration='1500'>
                <div className="story-content">
                    <h1>This is header</h1>
                    <p>Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from. We partner with producers we know and trust, ensuring quality throughout every step of the roasting process. Our ethical sourcing prioritises empowering farmers and fostering sustainability. This commitment results in great coffee that reflects a deep respect for people and the planet.</p>
                </div>
            </div>
        </div>
        </section>

        <section className="story-section">
        <div className="story-container-2">
            <img src="/000071.JPEG" alt="story1" className="top-story-img" data-aos='fade-up' data-aos-duration='1500'></img>
            <div className="bottom-story-text" data-aos='fade-up' data-aos-duration='1500'>
                <div className="story-content">
                    <h1>This is header</h1>
                    <p>Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from. We partner with producers we know and trust, ensuring quality throughout every step of the roasting process. Our ethical sourcing prioritises empowering farmers and fostering sustainability. This commitment results in great coffee that reflects a deep respect for people and the planet.</p>
                </div>
            </div>
        </div>
        </section>


        <section className="story-section">
        <div className="story-container">
            <img src="/story1.JPG" alt="story2" className="left" data-aos='fade-right' data-aos-duration='1500'></img>
            <div className="right" data-aos='fade-left' data-aos-duration='1500'>
                <div className="story-content">
                    <h1>This is header</h1>
                    <p>Building genuine relationships with coffee producers is at the heart of everything we do. We believe these connections matter because they mean better coffee for you and a positive impact on the communities we source from. We partner with producers we know and trust, ensuring quality throughout every step of the roasting process. Our ethical sourcing prioritises empowering farmers and fostering sustainability. This commitment results in great coffee that reflects a deep respect for people and the planet.</p>
                </div>
            </div>
        </div>
        </section>

        <Footer />
        </>
    )
}

export default Story;