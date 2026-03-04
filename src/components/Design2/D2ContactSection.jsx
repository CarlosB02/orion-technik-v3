import React, { useEffect, useRef } from 'react';
import './Design2.css';

/* ── Intersection Observer hook for scroll animations ── */
const useFadeIn = () => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('d2-visible'); observer.disconnect(); } },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
};

/* ── SVG Icons ── */
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);

const PlaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
);

/* ── D2ContactSection ── */
const D2ContactSection = () => {
    const contactRef = useFadeIn();

    return (
        <section className="d2-contact" id="contact">
            <div className="d2-fade-in" ref={contactRef}>
                <div className="d2-contact-inner">
                    <div className="d2-contact-info">
                        <span className="d2-section-label">Get In Touch</span>
                        <h2>Let's Work Together</h2>
                        <p>Whether you need repair services, supply chain solutions, or technical support — our team is ready to assist you.</p>

                        <div className="d2-contact-detail">
                            <div className="d2-contact-detail-icon"><PhoneIcon /></div>
                            <div className="d2-contact-detail-text">
                                <h4>Phone</h4>
                                <p><a href="tel:+35621000000">+356 21 000 000</a></p>
                            </div>
                        </div>

                        <div className="d2-contact-detail">
                            <div className="d2-contact-detail-icon"><MailIcon /></div>
                            <div className="d2-contact-detail-text">
                                <h4>Email</h4>
                                <p><a href="mailto:Info@orionaviation.eu">Info@orionaviation.eu</a></p>
                            </div>
                        </div>

                        <div className="d2-contact-detail">
                            <div className="d2-contact-detail-icon"><MapPinIcon /></div>
                            <div className="d2-contact-detail-text">
                                <h4>Address</h4>
                                <p>Northlink Business Centre, Level 2<br />Burmarrad Road, Naxxar, Malta</p>
                            </div>
                        </div>
                    </div>

                    <div className="d2-contact-form">
                        <h3>Send a Message</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="d2-form-group">
                                <label htmlFor="d2-name">Name</label>
                                <input type="text" id="d2-name" placeholder="Your full name" />
                            </div>
                            <div className="d2-form-group">
                                <label htmlFor="d2-email">Email</label>
                                <input type="email" id="d2-email" placeholder="your@email.com" />
                            </div>
                            <div className="d2-form-group">
                                <label htmlFor="d2-subject">Subject</label>
                                <input type="text" id="d2-subject" placeholder="How can we help?" />
                            </div>
                            <div className="d2-form-group">
                                <label htmlFor="d2-message">Message</label>
                                <textarea id="d2-message" placeholder="Tell us about your project..." />
                            </div>
                            <button type="submit" className="d2-submit-btn">
                                Send Message <PlaneIcon />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default D2ContactSection;
