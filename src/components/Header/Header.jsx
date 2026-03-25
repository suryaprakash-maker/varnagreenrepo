import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ onMenuClick }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    <img src="/varnagreen_logo.jpeg" alt="Varna Green" className="header-logo-img" />
                </Link>

                <nav className="desktop-nav">
                    <ul className="nav-list">
                        <li><Link to="/" className={`nav-item ${isActive('/')}`}>Home</Link></li>
                        <li><Link to="/about" className={`nav-item ${isActive('/about')}`}>About Us</Link></li>
                        <li><Link to="/services" className={`nav-item ${isActive('/services')}`}>Services</Link></li>
                        <li><Link to="/projects" className={`nav-item ${isActive('/projects')}`}>Projects</Link></li>
                        <li><Link to="/gallery" className={`nav-item ${isActive('/gallery')}`}>Gallery</Link></li>
                        <li><Link to="/contact" className={`nav-item ${isActive('/contact')}`}>Contact</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <Link to="/contact" className="btn btn-secondary header-cta">
                        Quote
                    </Link>
                    <button className="menu-btn" onClick={onMenuClick} aria-label="Open menu">
                        <Menu size={28} color="#ffffff" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
