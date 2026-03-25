import React from 'react';
import { Sun, Home, Briefcase, Factory, Video, Lightbulb } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Sun size={32} />,
            title: "Solar Rooftop PV Systems",
            desc: "Expert residential, commercial, and industrial rooftop installations maximizing energy efficiency.",
            size: "large", // Spans 2 cols, 2 rows
            bgClass: "bg-gradient-image",
            bgImage: "/images/Amalapuram Rural, Andhra Pradesh,.jpeg"
        },
        {
            icon: <Home size={28} />,
            title: "On-Grid & Off-Grid Solutions",
            desc: "PM Surya Ghar subsidy support for On-Grid, plus reliable Off-Grid systems.",
            size: "wide",
            bgClass: "bg-gradient-image",
            bgImage: "/images/Ambedkar Konaseema, Andhra3.jpeg"
        },
        {
            icon: <Lightbulb size={28} />,
            title: "Solar Street Lights",
            desc: "High-quality, autonomous outdoor lighting powered directly by the sun.",
            size: "standard",
            bgClass: "bg-gradient-image",
            bgImage: "/images/Bhatnavilli, Andhra Pradesh,.jpeg"
        },
        {
            icon: <Video size={28} />,
            title: "Solar CCTV & Cameras",
            desc: "Smart security camera solutions that run 24/7 on dedicated solar power.",
            size: "standard",
            bgClass: "bg-gradient-image",
            bgImage: "/images/solar-camera.jpeg"
        },
        {
            icon: <Factory size={32} />,
            title: "BLDC Fans & Electronics",
            desc: "Energy-efficient electronics and robust ACDB/DCDB built quality for longevity.",
            size: "wide",
            bgClass: "bg-gradient-image",
            bgImage: "/images/WAAREE-solar-circuit.jpeg"
        },
        {
            icon: <Briefcase size={28} />,
            title: "Maintenance / AMC",
            desc: "Comprehensive long-term service, operations, and maintenance support.",
            size: "large",
            bgClass: "bg-gradient-image",
            bgImage: "/images/Kakinada,Andhra Pradesh,.jpeg"
        }
    ];

    return (
        <div className="page-container services-page">
            <div className="services-hero">
                <div className="container">
                    <span className="services-eyebrow">Our Expertise</span>
                    <h1>Comprehensive<br />Solar Solutions</h1>
                </div>
            </div>

            <div className="container">
                <div className="bento-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bento-card ${service.size} ${service.bgClass}`}
                            style={service.bgImage ? {
                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%), url("${service.bgImage}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            } : {}}
                        >
                            <div className="card-header">
                                <div className="icon-box">{service.icon}</div>
                                <div className="card-arrow">→</div>
                            </div>
                            <div className="card-content-glass">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
