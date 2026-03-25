import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import locationsData from '../../data/locations.json';
import './LocationGallery.css';

const LocationGallery = () => {
    const { id } = useParams();
    const location = locationsData.find(loc => loc.id.toString() === id);

    if (!location) {
        return (
            <div className="page-container gallery-not-found">
                <div className="container text-center">
                    <h2>Location not found</h2>
                    <Link to="/gallery" className="btn btn-primary mt-20">Back to Gallery</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container location-gallery-page">
            <div className="container">
                <div className="location-header">
                    <Link to="/gallery" className="back-link">
                        <ArrowLeft size={20} /> Back to Gallery
                    </Link>
                    <h1>{location.title}</h1>
                    <p className="location-subtitle">{location.location} • {location.images.length} Photos</p>
                </div>

                <div className="photo-grid">
                    {location.images.map((img, index) => (
                        <div className="photo-card" key={index}>
                            <img src={img} alt={`${location.title} - Photo ${index + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationGallery;
