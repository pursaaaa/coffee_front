import React from 'react';
import '../Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
    return (
        <>
        <Navbar />
            <section className="contact-page">
                <div className="container">
                    <h1 className="text-center mb-5">Get in Touch with Us!</h1>
                    <div className="row">
                        {/* Contact Form */}
                        <div className="col-md-6 mb-4">
                            <div className="contact-form p-4 shadow">
                                <h4 className="mb-4">Contact Us</h4>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className="form-control"
                                            placeholder="Write your message here..."
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Map Section */}
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
    )
}

export default Contact;

