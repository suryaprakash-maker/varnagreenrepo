import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

const AboutPreview = () => {
    const points = [
        "On-Grid Solar with PM Surya Ghar Subsidy",
        "Off-Grid Systems, Industrial Cameras & Commercial Lamps",
        "High-quality BLDC fans & related electronics"
    ];

    return (
        <section className="section about-preview">
            <div className="container about-grid">
                <div className="about-image-placeholder">
                    {/* Real image would go here */}
                    <div className="placeholder-box" style={{ padding: 0, overflow: 'hidden' }}>
                        <img src="/images/Bhatnavilli, Andhra Pradesh,.jpeg" alt="Company Overview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

                <div className="about-content">
                    <h5 className="section-subtitle">Company Overview</h5>
                    <h2 className="section-title">Powering a Greener Future</h2>
                    <p className="about-text">
                        Varna Green Technologies provides expert solar installation and services for both residential and industrial sectors. We specialize in comprehensive solar solutions, from high-quality subsidized On-Grid PM Surya Ghar installations to advanced Off-Grid systems, maintaining the highest build quality including robust ACDB and DCDB components.
                    </p>

                    <ul className="about-points">
                        {points.map((point, index) => (
                            <li key={index}>
                                <CheckCircle size={20} className="check-icon" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <Link to="/about" className="btn btn-primary">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
