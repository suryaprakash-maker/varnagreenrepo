import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Zap, Battery } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "Residential Solar Setup",
            category: "Residential",
            location: "Suryapet, TS",
            desc: "A complete On-Grid PM Surya Ghar subsidized installation ensuring massive savings.",
            specs: ["3kW Capacity", "On-Grid System", "Net Metering"],
            image: "/images/Ambedkar Konaseema, Andhra3.jpeg"
        },
        {
            title: "Industrial Storage Facility",
            category: "Commercial",
            location: "Kakinada, AP",
            desc: "Comprehensive solar rooftop and smart Solar CCTV coverage for warehouse security.",
            specs: ["50kW Capacity", "Grid-Tied", "24/7 Monitoring"],
            image: "/images/Kakinada,Andhra Pradesh,.jpeg"
        },
        {
            title: "Rural Off-Grid Hub",
            category: "Industrial",
            location: "Kunavaram, AP",
            desc: "High-efficiency Off-Grid system providing consistent power independently.",
            specs: ["15kW Capacity", "Standalone", "Robust DCDB/ACDB"],
            image: "/images/Kunavaram, Andhra Pradesh,3.jpeg"
        },
        {
            title: "Community Street Lighting",
            category: "Commercial",
            location: "Bhatnavilli, AP",
            desc: "Installation of autonomous Solar Street Lights and high-grade BLDC fans for local facilities.",
            specs: ["20+ Lights", "Zero Export", "Autonomous"],
            image: "/images/Bhatnavilli, Andhra Pradesh,.jpeg"
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

    return (
        <div className="page-container projects-page">
            <div className="projects-hero">
                <div className="container">
                    <span className="eyebrow">Portfolio</span>
                    <h1>Featured Projects</h1>
                </div>
            </div>

            <div className="container">
                {/* Filter Tabs */}
                <div className="filter-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cinematic List */}
                <div className="projects-list">
                    {filteredProjects.map((project, index) => (
                        <div className="project-block" key={index}>
                            <div className="block-visual">
                                <div className="placeholder-image" style={{ padding: 0, overflow: 'hidden' }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                </div>
                                <div className="image-overlay"></div>
                                <button className="view-case-btn">
                                    View Case Study <ArrowUpRight size={18} />
                                </button>
                            </div>

                            <div className="block-content">
                                <div className="block-header">
                                    <span className="project-category">{project.category}</span>
                                    <h2>{project.title}</h2>
                                    <div className="project-location">
                                        <MapPin size={16} /> {project.location}
                                    </div>
                                </div>

                                <div className="specs-grid">
                                    {project.specs.map((spec, i) => (
                                        <span key={i} className="spec-badge">
                                            {i === 0 && <Zap size={14} />}
                                            {i === 1 && <Battery size={14} />}
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                <p className="project-desc">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
