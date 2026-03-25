import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '', phone: '', from_email: '', message: '', to_name: 'Varna Green'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            alert("Thanks for contacting Varna Green! We'll get back to you soon.");
            setFormData({ from_name: '', phone: '', from_email: '', message: '', to_name: 'Varna Green' });
            form.current.reset();
        }, (error) => {
            alert("Oops! Something went wrong. Please try again later.");
            console.error(error.text);
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div className="page-container contact-page">
            <div className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for a free consultation and quote.</p>
                </div>
            </div>

            <div className="container contact-wrapper">
                <div className="contact-info-panel">
                    <div className="info-item">
                        <MapPin className="info-icon" />
                        <div>
                            <h4>Our Main Office</h4>
                            <p>VDR Complex, 2-283/11, Road,<br />Kamanagaruvu, Thandavapalle,<br />Amalapuram, Andhra Pradesh 533201, India</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="info-icon" />
                        <div>
                            <h4>Call Us</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Mail className="info-icon" />
                        <div>
                            <h4>Email Us</h4>
                            <p>info@varnagreen.com</p>
                        </div>
                    </div>

                    <div className="map-placeholder" style={{ position: 'relative' }}>
                        <a 
                            href="https://www.google.com/maps?q=17.143217,79.623107" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}
                            aria-label="Open Varna Green in Google Maps"
                        ></a>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30560.822812297125!2d79.623107!3d17.143217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb07b8fdcad1d185!2sVarna%20Green%20Technologies!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            width="100%"
                            height="250"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Varna Green Location"
                        ></iframe>
                    </div>
                </div>

                <div className="contact-form-panel">
                    <h2>Send a Message</h2>
                    <form ref={form} onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="from_name">Your Name</label>
                            <input type="text" id="from_name" name="from_name" placeholder="John Doe" required onChange={handleChange} />
                        </div>

                        {/* Hidden field for to_name if required by template */}
                        <input type="hidden" name="to_name" value="Varna Green" />

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="+91 99999 99999" required onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="from_email">Email Address</label>
                            <input type="email" id="from_email" name="from_email" placeholder="john@example.com" required onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Tell us about your requirements..." required onChange={handleChange}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
