import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Capabilities/Capabilities.css';
import './Quality.css';
import Footer from '../Footer/Footer';

/* ── Certifications data ── */
const certs = [
    {
        label: 'EASA Part 145 — Maintenance Organization Approval',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/anac-part-145.webp',
        pdf: '#',
    },
    {
        label: 'AAN EMAR/PMAR Part 145 — Military Maintenance Organization Approval',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-pmar-145-1-1-1-scaled.webp',
        pdf: '#',
    },
    {
        label: 'Certification NATO AQAP 2110',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-nato-aqap-scaled.webp',
        pdf: '#',
    },
    {
        label: 'AS9100:D / JISQ 9100:2016 / EN 9100:2018',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-as-9100-2024-scaled.webp',
        pdf: '#',
    },
    {
        label: 'ISO 9001 : 2015',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificado-iso-9001-2024-scaled.webp',
        pdf: '#',
    },
    {
        label: 'ARTex Programming and Battery Replacement Center Certification',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/acr-artex-2024-scaled.webp',
        pdf: '#',
    },
    {
        label: 'Kannad Approved Battery Replacement Center',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/certificate-kabrc-scaled.webp',
        pdf: '#',
    },
    {
        label: 'Procurement Policy',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/procurement-policy-scaled.webp',
        pdf: '#',
    },
    {
        label: 'Confidentiality Policy',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/confidentiality-policy-scaled.png',
        pdf: '#',
    },
    {
        label: 'General Terms and Conditions of Sale',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/general-terms-and-conditions-of-sale-scaled.webp',
        pdf: '#',
    },
    {
        label: 'Order Conditions to Subcontractor',
        img: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/order-conditions-to-subcontractor-scaled.webp',
        pdf: '#',
    },
];

/* ── Component ── */
const Quality = () => {
    const [active, setActive] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="cap-page qlt-page">

            {/* ── HEADER (shared) ── */}
            <header className="cap-header">
                <Link to="/design2" className="cap-back">← Orion Technik</Link>
                <nav className="cap-nav">
                    <Link to="/capabilities">Capabilities</Link>
                    <Link to="/quality" className="cap-nav--active">Quality</Link>
                    <Link to="/news-page">News</Link>
                    <Link to="/where-are-we">Where Are We</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
            </header>

            {/* ── HERO ── */}
            <section className="qlt-hero">
                <div className="qlt-hero-bg" />
                <div className="qlt-hero-content">
                    <span className="cap-label">Standards &amp; Certifications</span>
                    <h1>Quality</h1>
                    <p>Where precision meets trust. Our standards define the way we build, repair, and deliver.</p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="qlt-intro">
                <div className="qlt-container">
                    <h2>We pay attention to the detail</h2>
                    <p>
                        Orion Technik Maintenance and Engineering is registered as a Portuguese Ministry of Defense and NATO supplier
                        (CAGE Code: P3457) and manages the operations according to the Aerospace Industry Quality Management System
                        AS/EN 9100, ISO 9001, NATO AQAP 2110, the European Aerospace Authority (EASA) PART-145 and the European
                        Military Authority (EMAR) PMAR-145.
                    </p>
                </div>
            </section>

            {/* ── CERTIFICATIONS TABS ── */}
            <section className="qlt-certs">
                <div className="qlt-container">
                    <div className="qlt-tabs-shell">

                        {/* Sidebar tab list */}
                        <div className="qlt-tablist" role="tablist" aria-orientation="vertical">
                            {certs.map((c, i) => (
                                <button
                                    key={i}
                                    role="tab"
                                    className={`qlt-tab${active === i ? ' is-active' : ''}`}
                                    aria-selected={active === i}
                                    onClick={() => setActive(i)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); setActive((i + 1) % certs.length); }
                                        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); setActive((i - 1 + certs.length) % certs.length); }
                                        if (e.key === 'Home') { e.preventDefault(); setActive(0); }
                                        if (e.key === 'End') { e.preventDefault(); setActive(certs.length - 1); }
                                    }}
                                >
                                    {c.label}
                                </button>
                            ))}
                        </div>

                        {/* Panel */}
                        <div className="qlt-panel" key={active}>
                            <div className="qlt-card">
                                <div className="qlt-card-img">
                                    <img src={certs[active].img} alt={certs[active].label} />
                                </div>
                                <p className="qlt-card-caption">{certs[active].label}</p>
                                <a className="qlt-cta" href={certs[active].pdf} target="_blank" rel="noopener noreferrer">
                                    Download PDF
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CONTACT FORM ── */}
            <section className="qlt-contact">
                <div className="qlt-container qlt-contact-inner">
                    <div className="qlt-contact-text">
                        <span className="cap-label">Get In Touch</span>
                        <h2>Questions about our certifications?</h2>
                        <p>Our quality team is happy to provide documentation, answer audit queries, or discuss partnerships.</p>
                    </div>
                    <form className="qlt-form" onSubmit={handleSubmit}>
                        {sent ? (
                            <div className="qlt-success">
                                <span>✓</span>
                                <p>Message sent! We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <>
                                <div className="qlt-form-row">
                                    <div className="qlt-field">
                                        <label htmlFor="qlt-name">Name</label>
                                        <input
                                            id="qlt-name"
                                            type="text"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="qlt-field">
                                        <label htmlFor="qlt-email">Email</label>
                                        <input
                                            id="qlt-email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="qlt-field">
                                    <label htmlFor="qlt-msg">Message</label>
                                    <textarea
                                        id="qlt-msg"
                                        rows={5}
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <button type="submit" className="qlt-submit">Send Message →</button>
                            </>
                        )}
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Quality;
