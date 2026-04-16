import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-graphic" style={{ padding: 0, overflow: 'hidden', backgroundColor: '#000' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.5,
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                >
                    <source src="/259949.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="container hero-container">
                <div className="hero-content-left">
                    <span className="welcome-text">Welcome to</span>
                    <h1 className="brand-name">
                        <span  className="brand-accent">VARNA</span>
                        <span className="brand-accent">GREEN TECHONOLOGIES</span>
                    </h1>
                    <div className="hero-tagline-wrapper">
                        <span className="hero-tagline">Expert Solar Installation & Services.</span>
                        <p style={{
                            color: "rgba(255, 255, 255, 0.95)",
                            fontSize: "1.1rem",
                            marginTop: "10px",
                            maxWidth: "450px",
                            textShadow: "1px 2px 4px rgba(0, 0, 0, 0.7)"
                        }}>
                            Powering residential and industrial futures with On-Grid, Off-Grid, and top-tier solar electronics.
                        </p>
                    </div>

                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary btn-large">
                            Start Your Journey
                        </Link>
                    </div>
                </div>
                <div className="hero-visual-right">
                    {/* Image removed based on user request */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
