import React, { useState, useEffect, useRef } from 'react';
import heroBg from '../../assets/hero-hangar-wide.png';
import cardImg1 from '../../assets/hero-bg-creative.png';
import cardImg2 from '../../assets/hero-atr.png';
import cardImg3 from '../../assets/hero-bizjet.png';
import cardImg4 from '../../assets/hero-bizjet-sunset.png';
import videoHero from '../../assets/Orion video.mp4';
import './Design2.css';
import Footer from '../Footer/Footer';
import D2ContactSection from './D2ContactSection';
import D2Header from './D2Header';

/* ── Intersection Observer hook for scroll animations ── */
const useFadeIn = () => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('d2-visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
};

/* ── SVG Icons (inline for zero dependencies) ── */
const Icons = {
    Wrench: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    ),
    Link: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    Headphones: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
    ),
    Plane: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
    ),
    ArrowRight: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
    ),
    Phone: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    Mail: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
    ),
    MapPin: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
    ),
    Linkedin: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
        </svg>
    ),
    Send: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    ),
};

/* ── Data ── */
const services = [
    {
        icon: <Icons.Wrench />,
        title: 'Repair Capabilities',
        text: 'EASA & EMAR Part 145 approved Repair Station specialized in Avionics, Instruments, Wheels & Brakes, Lighting, Antennas, and Electro-Mechanical components.',
    },
    {
        icon: <Icons.Link />,
        title: 'Supply Chain',
        text: 'Global Distributor of Parts, Consumables, Tools and Support Equipment for the Aerospace Industry from leading manufacturers worldwide.',
    },
    {
        icon: <Icons.Headphones />,
        title: 'Technical Support',
        text: 'Through its multidisciplinary team, Orion Technik provides a wide range of engineering, consulting and technical support services.',
    },
    {
        icon: <Icons.Plane />,
        title: 'Supported Fleet',
        text: 'From Military to Civil aviation, providing support and services for various rotary and fixed-wing aircraft platforms globally.',
    },
];

const videoServices = [
    {
        image: cardImg1,
        title: 'Repair Capabilities',
        text: 'Orion Technik Maintenance & Engineering is an EASA & EMAR Part 145 approved Repair Station.',
        cta: 'Check Our Capabilities',
    },
    {
        image: cardImg2,
        title: 'Supply Chain',
        text: 'We are a Global Distributor of different Brands and Manufacturers.',
        cta: 'Discover More',
    },
    {
        image: cardImg3,
        title: 'Technical and Engineering Support',
        text: 'Expert support that keeps your operations running at peak performance.',
        cta: 'Book a Diagnostic',
    },
    {
        image: cardImg4,
        title: 'Supported Fleet',
        text: 'From Military to Civil aviation, we provide support for various rotary and fixed-wing aircraft.',
        cta: 'Check Compatibility',
    },
];

const YOUTUBE_VIDEO_ID = 'LbNP0FUItjI';

const VideoServiceCard = ({ image, title, text, cta, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`d2-vcard d2-vcard--${index}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="d2-vcard-img" style={{ backgroundImage: `url(${image})` }} />
            <div className={`d2-vcard-video ${hovered ? 'd2-vcard-video--active' : ''}`}>
                {hovered && (
                    <iframe
                        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                        title={title}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}
            </div>
            <div className="d2-vcard-overlay" />
            <div className="d2-vcard-content">
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="d2-vcard-cta">{cta}</span>
            </div>
        </div>
    );
};

const certImages = [
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/iso-9001.jpg', label: 'ISO 9001' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-anac.jpg', label: 'ANAC' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-nato-aqap-2110.jpg', label: 'NATO AQAP 2110' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-pmar-145.png', label: 'PMAR 145' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-acr-artex.jpg', label: 'ACR Artex' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/as-9100.jpg', label: 'AS 9100' },
];

const partnerLogos = [
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/partners-edit-scaled.webp', name: 'Partners' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/Chemetall-BASF-_logo_landscape_2363x592px_RGB-scaled.webp', name: 'Chemetall BASF' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/arrow2.webp', name: 'Arrow' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/3M-scaled.webp', name: '3M' },
    { src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/artex-scaled.webp', name: 'Artex' },
];

/* ── Center-Focused Certification Carousel ── */
const CertCarousel = ({ items }) => {
    const [active, setActive] = useState(0);
    const total = items.length;
    const timerRef = useRef(null);

    const go = (idx) => {
        setActive((idx + total) % total);
    };

    // Auto-advance
    useEffect(() => {
        timerRef.current = setInterval(() => go(active + 1), 3500);
        return () => clearInterval(timerRef.current);
    }, [active]);

    // Determine position offset relative to active: -2 -1 0 1 2
    const getOffset = (i) => {
        let diff = i - active;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return diff;
    };

    return (
        <div className="d2-cert-focus-carousel">
            <div className="d2-cert-focus-track">
                {items.map((item, i) => {
                    const offset = getOffset(i);
                    const isActive = offset === 0;
                    const isVisible = Math.abs(offset) <= 2;
                    if (!isVisible) return null;

                    return (
                        <div
                            key={i}
                            className={`d2-cert-focus-card ${isActive ? 'd2-cert-focus-card--active' : ''}`}
                            style={{ '--offset': offset }}
                            onClick={() => go(i)}
                        >
                            <img src={item.src} alt={item.label} loading="lazy" />
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </div>

            {/* Dots */}
            <div className="d2-cert-focus-dots">
                {items.map((_, i) => (
                    <button
                        key={i}
                        className={`d2-cert-focus-dot ${i === active ? 'd2-cert-focus-dot--active' : ''}`}
                        onClick={() => go(i)}
                        aria-label={`Go to certificate ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

/* ── Component ── */
const Design2 = () => {
    // Refs for fade-in sections
    const showcaseRef = useFadeIn();
    const svcRef = useFadeIn();
    const trustRef = useFadeIn();
    const partnerRef = useFadeIn();
    const contactRef = useFadeIn();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="d2-page">
            {/* ── HEADER ── */}
            <D2Header activePage="home" />

            {/* ── HERO ── */}
            <section className="d2-hero" id="hero">
                <div className="d2-hero-bg">
                    <video
                        src={videoHero}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="d2-hero-video"
                    />
                </div>
                <div className="d2-hero-content">
                    <h1>
                        <span>Your Security?</span>
                        <span>Our Priority!</span>
                    </h1>
                </div>
                <div className="d2-hero-scroll-indicator">
                    <span>Scroll</span>
                    <div className="d2-scroll-line" />
                </div>
            </section>

            {/* ── VIDEO SHOWCASE SERVICES ── */}
            <section className="d2-showcase" id="showcase">
                <div className="d2-fade-in" ref={showcaseRef}>
                    <h2 className="d2-showcase-title">Precision Engineering for Performance</h2>
                    <div className="d2-showcase-grid">
                        {videoServices.map((svc, i) => (
                            <VideoServiceCard key={i} index={i} {...svc} />
                        ))}
                    </div>
                </div>
            </section>


            {/* ── TRUST / CERTIFICATIONS ── */}
            <section className="d2-trust" id="trust">
                <div className="d2-fade-in" ref={trustRef}>
                    <span className="d2-section-label">Certifications</span>
                    <h2 className="d2-section-title">Certified Excellence</h2>
                    <p className="d2-section-subtitle">Meeting and exceeding the most rigorous international standards in aerospace quality and safety.</p>

                    <CertCarousel items={certImages} />
                </div>
            </section>

            {/* ── PARTNERS ── */}
            <section className="d2-partners" id="partners">
                <div className="d2-fade-in" ref={partnerRef}>
                    <span className="d2-section-label">OEM Partners</span>
                    <h2 className="d2-section-title">Trusted by Industry Leaders</h2>
                    <p className="d2-section-subtitle">Authorized distributor and service provider for the world's top aerospace manufacturers.</p>

                    <div className="d2-partners-marquee-outer">
                        {/* Duplicate for seamless loop */}
                        <div className="d2-partners-marquee-track">
                            {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((p, i) => (
                                <div className="d2-partner-logo-item" key={i}>
                                    <img src={p.src} alt={p.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <D2ContactSection />

            {/* ── CLOSING STATEMENT ── */}
            <section className="d2-closing">
                <div className="d2-closing-bg" style={{ backgroundImage: `url(${cardImg4})` }} />
                <div className="d2-closing-overlay" />
                <div className="d2-closing-content">
                    <p className="d2-closing-eyebrow">Orion Technik Maintenance &amp; Engineering</p>
                    <h2 className="d2-closing-headline">
                        <span>Certified Quality.</span>
                        <span>Airworthy Performance.</span>
                    </h2>
                    <div className="d2-closing-line" />
                    <a
                        href="#hero"
                        className="d2-closing-link"
                        onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
                    >
                        Back to Top ↑
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Design2;
