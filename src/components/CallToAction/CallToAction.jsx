import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <section className="section cta-section">
            <div className="container cta-content">
                <h2 className="cta-title">Ready to Switch to Solar?</h2>
                <p className="cta-text">
                    Get a free consultation and start saving on your electricity bills with clean, renewable energy.
                </p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-white btn-large">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
