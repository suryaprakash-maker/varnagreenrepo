import React, { useEffect, useRef, useState } from 'react';
import { MapPin, CheckCircle, Award, Users, Zap, Building } from 'lucide-react';
import './About.css';

const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal-item ${isVisible ? 'visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const About = () => {
    const services = [
        "Solar Panel Installation",
        "Solar Street Lights",
        "Solar CCTV / Solar Cameras",
        "Residential Solar Solutions",
        "Commercial Solar Systems",
        "Industrial Solar Projects",
        "Maintenance / AMC"
    ];

    return (
        <div className="page-container about-page">
            {/* New Modern Hero Section */}
            <div className="about-hero">
                <div className="container about-hero-content">
                    <div className="hero-text">
                        <RevealOnScroll delay={100}>
                            <span className="hero-eyebrow">Established 2024</span>
                        </RevealOnScroll>
                        <RevealOnScroll delay={300}>
                            <h1>Leading the<br />Future of Energy</h1>
                        </RevealOnScroll>
                    </div>
                    <div className="hero-visual">
                        <RevealOnScroll delay={500} className="visual-wrapper">
                            <div className="visual-card" style={{ padding: 0, overflow: 'hidden' }}>
                                <img src="/images/Ambedkar Konaseema, Andhra3.jpeg" alt="Solar Installation Setup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="visual-graphic"></div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>

            <div className="container content-section">
                {/* Stats Section */}
                <RevealOnScroll className="stats-grid mb-60" delay={200}>
                    <div className="stat-card">
                        <Award size={40} className="stat-icon" />
                        <h3>160+</h3>
                        <p>Installations Completed</p>
                    </div>
                    <div className="stat-card">
                        <Zap size={40} className="stat-icon" />
                        <h3>543 kW</h3>
                        <p>Total Capacity Installed</p>
                    </div>
                    <div className="stat-card">
                        <Users size={40} className="stat-icon" />
                        <h3>1 Year</h3>
                        <p>Of Dedicated Experience</p>
                    </div>
                    <div className="stat-card">
                        <Building size={40} className="stat-icon" />
                        <h3>8 Cities</h3>
                        <p>Major Cities Served</p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll className="about-section">
                    <h2>Company Overview</h2>
                    <p>
                        Varna Green Technologies is a premier solar solutions provider. We specialize in comprehensive solar energy systems and related electronics, including <strong>solar panels, solar cameras, solar street lights, and high-quality BLDC fans</strong>.
                    </p>
                    <p>
                        We cater to the <strong>residential, commercial, and industrial</strong> sectors across 8 major cities, including heavy presence in <strong>U Solar Hyderabad (Suryapet)</strong>. We are committed to maintaining exceptional build quality in all our systems—specifically ensuring top-tier <strong>ACDB and DCDB</strong> components. We also facilitate On-Grid systems with government subsidies.
                    </p>
                </RevealOnScroll>

                <section className="mission-vision-grid mt-40">
                    <RevealOnScroll className="mv-card" delay={200}>
                        <h3>Our Mission</h3>
                        <p>
                            To protect the environment by significantly reducing CO2 emissions through the delivery of high-quality, reliable solar products. We strive to make green energy accessible to everyone by facilitating <strong>70% to 90% bank financing</strong> with flexible EMI options for our customers.
                        </p>
                    </RevealOnScroll>
                    <RevealOnScroll className="mv-card" delay={400}>
                        <h3>Our Vision</h3>
                        <p>
                            To be the most trusted name in renewable energy across Telangana and beyond, empowering homes and industries with cutting-edge electronics and sustainable solar power.
                        </p>
                    </RevealOnScroll>
                </section>

                <RevealOnScroll className="about-services-section mt-60" delay={200}>
                    <h2>Comprehensive Services</h2>
                    <ul className="services-list-plain">
                        {services.map((item, idx) => (
                            <li key={idx}><CheckCircle size={20} className="check-icon" /> {item}</li>
                        ))}
                    </ul>
                </RevealOnScroll>

                <RevealOnScroll className="clients-section mt-60" delay={300}>
                    <h2>Our Clients & Government Projects</h2>
                    <p>Over our 1 year of expertise, we have successfully managed both private and public sector requirements.</p>
                    <ul>
                        <li><strong>Major Clients:</strong> A mix of impactful commercial projects and government PM Solar initiatives.</li>
                        <li><strong>Government Contracts:</strong> Successfully completed tenders and installations for government entities, including PMO projects and PM Surya Ghar schemes.</li>
                    </ul>
                </RevealOnScroll>

                <RevealOnScroll className="location-section mt-60 mb-60 text-center" delay={400}>
                    <h2>Visit Us</h2>
                    <p>Locate Varna Green Technologies on the map.</p>
                    <a
                        href="https://google.com/maps/place/Varna+Green+Technologies/data=!4m2!3m1!1s0x0:0xb07b8fdcad1d185?sa=X&ved=1t:2428&ictx=111"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}
                    >
                        <MapPin size={20} /> View on Google Maps
                    </a>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default About;
