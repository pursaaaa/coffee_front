import React, { useEffect, useState } from 'react';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        AOS.init()
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_wjpj1z4'; // Replace with your EmailJS service ID
        const templateID = 'template_54owvzc'; // Replace with your EmailJS template ID
        const publicKey = 'fNJ_x6z_p4hE4CjWQ'; // Replace with your EmailJS public key

        emailjs
            .send(serviceID, templateID, formData, publicKey)
            .then(
                (response) => {
                    Swal.fire({
                        title: 'ส่งข้อความแล้ว',
                        text: 'ส่งข้อความของคุณสำเร็จแล้ว!',
                        icon: 'success',
                    });
                    setFormData({ name: '', email: '', message: '' }); // Clear form
                },
                (error) => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง',
                        icon: 'error',
                    });
                }
            );
    };

    return (
        <>
        <Navbar />

        <div className='gallery'>
        <div className='img-slide'>
            <img src='https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://images.unsplash.com/photo-1469957761306-556935073eba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://images.unsplash.com/photo-1515860734122-e0d771b36d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://images.unsplash.com/photo-1671011032397-1d717b69315b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://images.unsplash.com/photo-1671011032399-c663f04fe492?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D'></img>
        </div>
        <div className='img-slide'>
            <img src='https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://images.unsplash.com/photo-1469957761306-556935073eba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://images.unsplash.com/photo-1515860734122-e0d771b36d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://images.unsplash.com/photo-1671011032397-1d717b69315b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D'></img>
            <img src='https://images.unsplash.com/photo-1671011032399-c663f04fe492?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvZmZlZSUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D'></img>
        </div>
        </div>

        <div className='aboutus-content'>
            <p>We roast some of the best coffees on the planet</p>
            <p>THE BARN is a leading coffee roaster in Europe and represents the Specialty Coffee Movement at the highest level since 2010. Our beans are served by many coffee shops and home brewers across the globe.</p>
            <p>Our vision has been very clear from the start: We focus on making our coffees better and better. No compromise - just great coffee. We would never blend our coffees in order to showcase specific flavour profiles and to present each farm we work with. This makes our farmers proud and the product fully traceable.</p>
        </div>


        <section className="contact-page">
            <div className="container">
                <h2 className="text-center mb-5">ติดต่อกับเรา</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="contact-form p-4 shadow">
                            <h4 className="mb-4">ติดต่อเรา</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">ชื่อ-นามสกุล</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">อีเมล</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">ข้อความ</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="form-control"
                                        placeholder="เขียนข้อความที่นี่..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-secondary w-100">
                                    ส่งข้อความ
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="map-container shadow">
                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.774385981105!2d100.54554047454492!3d13.792469896351676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c176b31de8d%3A0x214a3a74449e9b72!2zMTUxMS80NCDguJYuIOC4nuC4q-C4peC5guC4ouC4mOC4tOC4mSDguYHguILguKfguIfguJ7guI3guLLguYTguJcg4LmA4LiC4LiV4Lie4LiN4Liy4LmE4LiXIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDQwMA!5e0!3m2!1sth!2sth!4v1732184341369!5m2!1sth!2sth"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Contact;


