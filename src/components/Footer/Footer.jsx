import React from 'react';
import './Footer.css';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h3 className="footer-logo">Varna Green Technologies</h3>
                    <p className="footer-tagline">Clean & Efficiency</p>
                    <p className="footer-desc">
                        Empowering a sustainable future with cutting-edge solar solutions for homes, businesses, and industries.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <MapPin size={18} className="icon" />
                        <span>VDR Complex, 2-283/11, Road, Kamanagaruvu, Thandavapalle, Amalapuram, Andhra Pradesh 533201, India</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} className="icon" />
                        <span>+91 94918 32235</span>
                    </div>
                        <div className="contact-item">
                        <Phone size={18} className="icon" />
                        <span>+91 70322 32235</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} className="icon" />
                        <span>varnagreentechnologies@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Varna Green Technologies. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
