import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroBgSunset from '../../assets/hero-bg-creative.png';
import heroBgSunsetV2 from '../../assets/hero-bizjet-sunset.png';
import heroBgATR from '../../assets/hero-atr.png';
import heroBgHangar from '../../assets/hero-bizjet.png';
import heroBgHangarWide from '../../assets/hero-hangar-wide.png';
import heroBgOriginal from '../../assets/hero-bg-v2.png';

const heroImages = [
    heroBgSunset,
    heroBgSunsetV2,
    heroBgATR,
    // heroBgHangar, // Removed as per request (4th image)
    heroBgHangarWide,
    heroBgOriginal
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <section className="hero">
            <div className="hero-background-slider">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    The art of airworthiness<br />
                    is one that we are proud to master!
                </h1>
            </div>

            <div className="hero-controls">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
