import React from 'react';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* Overlay */}
            <div
                className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <span className="sidebar-title">Varna Green</span>
                    <button className="close-btn" onClick={onClose} aria-label="Close menu">
                        <X size={28} />
                    </button>
                </div>

                <div className="sidebar-content">
                    <nav className="sidebar-nav">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={onClose}
                                style={{ '--delay': `${index * 0.05}s` }} // Stagger delay
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="sidebar-footer" style={{ '--delay': `${navLinks.length * 0.05}s` }}>
                        <Link to="/contact" className="sidebar-cta-btn" onClick={onClose}>
                            Get a Quote
                        </Link>

                        <div className="sidebar-contact-info">
                            <p>+91 98765 43210</p>
                            <p>info@varnagreen.com</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
