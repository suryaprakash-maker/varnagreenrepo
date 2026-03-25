import React from 'react';
import Hero from '../../components/Hero/Hero';
import AboutPreview from '../../components/AboutPreview/AboutPreview';
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview';
import CallToAction from '../../components/CallToAction/CallToAction';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <AboutPreview />
            <ServicesPreview />
            <CallToAction />
        </div>
    );
};

export default Home;
