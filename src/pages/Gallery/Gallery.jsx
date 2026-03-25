import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import locationsData from '../../data/locations.json';
import './Gallery.css';
const Gallery = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 420; // Exact card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const photos = locationsData;

    return (
        <div className="page-container gallery-page">
            <div className="gallery-header">
                <span className="eyebrow">The Collection</span>
                <h1>Visual Journey</h1>
            </div>

            <div className="reel-container">
                <div className="reel-controls">
                    <button onClick={() => scroll('left')} className="control-btn left">
                        <ArrowLeft />
                    </button>
                    <button onClick={() => scroll('right')} className="control-btn right">
                        <ArrowRight />
                    </button>
                </div>

                <div className="gallery-track" ref={scrollContainerRef}>
                    {photos.map((photo) => (
                        <Link to={`/gallery/${photo.id}`} className="reel-card" key={photo.id}>
                            <div className="placehoder-visual" style={{ padding: 0, overflow: 'hidden' }}>
                                <img
                                    src={photo.coverImage}
                                    alt={photo.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="reel-info">
                                <h3>{photo.title}</h3>
                                <p>{photo.location} • {photo.images.length} Photos</p>
                            </div>
                        </Link>
                    ))}
                    {/* Padding card for end spacing */}
                    <div className="reel-spacer"></div>
                </div>
            </div>

            <div className="gallery-footer">
                <p>Swipe or drag to explore</p>
            </div>
        </div>
    );
};

export default Gallery;
