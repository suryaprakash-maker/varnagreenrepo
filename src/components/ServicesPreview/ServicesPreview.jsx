import React from 'react';
import { Sun, Home, Briefcase, Factory, Video, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesPreview.css';

const ServicesPreview = () => {
    const services = [
        {
            icon: <Home size={32} />,
            title: "Solar Panel Installation",
            desc: "Expert residential, commercial, and industrial solar rooftop setups."
        },
        {
            icon: <Sun size={32} />,
            title: "On-Grid & Off-Grid Systems",
            desc: "PM Surya Ghar subsidy support for On-Grid, plus reliable Off-Grid solutions."
        },
        {
            icon: <Lightbulb size={32} />,
            title: "Solar Street Lights",
            desc: "High-quality, autonomous outdoor lighting powered by the sun."
        },
        {
            icon: <Video size={32} />,
            title: "Solar CCTV & Cameras",
            desc: "Smart security camera solutions that run 24/7 on solar power."
        },
        {
            icon: <Factory size={32} />,
            title: "BLDC Fans & Electronics",
            desc: "Energy-efficient electronics and robust ACDB/DCDB built quality."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Maintenance / AMC",
            desc: "Comprehensive long-term service, operations, and maintenance support."
        }
    ];

    return (
        <section className="section services-preview">
            <div className="container">
                <div className="text-center mb-60">
                    <h5 className="section-subtitle">What We Do</h5>
                    <h2 className="section-title">Our Services</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-40">
                    <Link to="/services" className="btn btn-secondary">
                        Explore All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
