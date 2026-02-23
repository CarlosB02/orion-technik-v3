import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Capabilities.css';
import Footer from '../Footer/Footer';

/* ── Hotspot capability data ── */
const capabilities = [
    { id: 'Antennas', title: 'Antennas', text: 'Maintained for reliable communication and navigation across all platforms.', pos: { top: '58%', left: '39%' } },
    { id: 'Avionics', title: 'Avionics', text: 'Precision-tested systems for mission-critical performance in defence and civil platforms.', pos: { top: '45%', left: '15%' } },
    { id: 'Electro_Mechanical', title: 'Electro-Mechanical', text: 'Serviced for stable, high-load operation under demanding conditions.', pos: { top: '42%', left: '80%' } },
    { id: 'Electronics', title: 'Electronics', text: 'Repaired and verified to the most stringent aerospace standards.', pos: { top: '60%', left: '25%' } },
    { id: 'Galley', title: 'Galley', text: 'Serviced for safe, dependable cabin operation across commercial fleets.', pos: { top: '45%', left: '35%' } },
    { id: 'Hydraulic', title: 'Hydraulic', text: 'Maintained for consistent pressure and actuation reliability.', pos: { top: '53%', left: '65%' } },
    { id: 'Indicators', title: 'Indicators', text: 'Calibrated for accurate cockpit feedback and flight safety.', pos: { top: '55%', left: '7%' } },
    { id: 'Lightning', title: 'Lightning', text: 'Serviced for optimal visibility and on-board safety compliance.', pos: { top: '53%', left: '16%' } },
    { id: 'Mechanical', title: 'Mechanical', text: 'Maintained to extend lifecycle, durability and operational readiness.', pos: { top: '50%', left: '50%' } },
    { id: 'Pneumatic', title: 'Pneumatic', text: 'Serviced for stable airflow and pressure control throughout the aircraft.', pos: { top: '70%', left: '70%' } },
    { id: 'Radar', title: 'Radar', text: 'Tested for accurate detection, tracking and surveillance performance.', pos: { top: '60%', left: '60%' } },
    { id: 'Wheels_Brakes', title: 'Wheels & Brakes', text: 'Inspected and tested for reliable stopping performance and ground safety.', pos: { top: '67%', left: '25%' } },
];

/* ── Tech & Engineering data ── */
const techServices = [
    {
        title: 'Global Services (Dubai)',
        summary: 'Independent company in Dubai offering tailored aerospace services and project support.',
        body: 'ORION TECHNIK GLOBAL SERVICES is an independent company located in Dubai, offering a suite of services focused on the customer\u2019s specific needs and expectations. We support a wide range of projects including airline structure solutions, software selection and implementation, in-house and 3rd party Maintenance oversight, organization improvement, Material and Logistics Support, general Engineering support in areas such as modifications, repairs, reliability, as well as Technical Records auditing.',
    },
    {
        title: 'CAMO (Malta)',
        summary: 'CAMO approved continuing airworthiness management with 40+ years of combined experience.',
        body: 'With more than 40 years of combined civil and military aviation experience, ORION AVIATION offers Maintenance and Components Support, Flight Operation solutions, Safety and Compliance Audits, as well as broad Technical and Financial Consultancy Services for all types of aviation businesses \u2014 Lessors, Financiers, Aircraft owners, Commercial Airlines, Business Aviation Companies, MROs, Governments and Air Forces.\n\nOrion Aviation has received its CAMO approval MT.CAMO.0107 from the Transport Malta \u2013 Civil Aviation Directorate (TM-CAD). This approval recognizes our commitment to maintain the highest standards of airworthiness and safety, expanding our capabilities to support clients further with their asset needs.',
    },
    {
        title: 'Special Projects',
        summary: 'Aircraft disassembly, spare parts consignment and exchange pool management.',
        body: 'Aircraft Disassembling and Dismantling \u2014 Complete disassemble, ID, pack, crating and shipping of 2 P-3 Orion aircrafts from Portugal to United States.\n\nSpare Parts Consignment and Exchange Pool Management \u2014 Full management of T-56 Spare Parts, C-130 & P-3 Spare Parts consignment and Exchange Pool to support 24/7, 365 days a C-130 & P-3 Service Center.',
    },
];

/* ── Fleet categories ── */
const fleetCategories = [
    {
        title: 'Fixed Wing \u2013 Military',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 38l24-22 24 22M32 16v32M14 36l18 12 18-12" />
                <circle cx="32" cy="12" r="3" />
            </svg>
        ),
    },
    {
        title: 'Fixed Wing \u2013 Civil',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 40l22-24 22 24M32 16v30M16 38l16 10 16-10" />
                <rect x="28" y="8" width="8" height="6" rx="2" />
            </svg>
        ),
    },
    {
        title: 'Rotary Wing',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="32" cy="32" rx="12" ry="10" />
                <line x1="32" y1="22" x2="32" y2="8" />
                <line x1="12" y1="10" x2="52" y2="10" />
                <path d="M26 42l-8 14h28l-8-14" />
            </svg>
        ),
    },
    {
        title: 'Engine & Propulsion System',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="32" cy="32" r="14" />
                <circle cx="32" cy="32" r="5" />
                <path d="M32 18v-8M32 54v-8M18 32h-8M54 32h-8M22 22l-5-5M47 47l-5-5M42 22l5-5M17 47l5-5" />
            </svg>
        ),
    },
];

/* ── Component ── */
const Capabilities = () => {
    const [activeCap, setActiveCap] = useState('Antennas');
    const [openAccordion, setOpenAccordion] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const currentCap = capabilities.find(c => c.id === activeCap) || capabilities[0];

    const toggleAccordion = (i) => setOpenAccordion(openAccordion === i ? null : i);
    const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

    return (
        <div className="cap-page caps-page">

            {/* ── HEADER ── */}
            <header className="cap-header">
                <Link to="/design2" className="cap-back">&larr; Orion Technik</Link>
                <nav className="cap-nav">
                    <Link to="/capabilities" className="cap-nav--active">Capabilities</Link>
                    <Link to="/quality">Quality</Link>
                    <Link to="/news-page">News</Link>
                    <Link to="/where-are-we">Where Are We</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
            </header>

            {/* ── HERO ── */}
            <section className="caps-hero">
                <div className="caps-hero-bg" />
                <div className="caps-hero-content">
                    <span className="cap-label">What We Do</span>
                    <h1>Engineering.<br />Repair.<br />Performance.</h1>
                </div>
            </section>

            {/* ── HOTSPOTS ── */}
            <section className="caps-hotspots">
                <div className="caps-container">
                    <div className="caps-hs-shell">
                        <div className="caps-hs-layout">

                            {/* Left: image + dots */}
                            <div className="caps-hs-plane">
                                <div className="caps-hs-plane-inner">
                                    <img
                                        src="https://enimble.pt/oriontechnik/wp-content/uploads/2025/11/image-gen-2-1.jpg"
                                        alt="Aircraft blueprint with component hotspots"
                                        className="caps-hs-plane-img"
                                        loading="lazy"
                                    />
                                    {capabilities.map(c => (
                                        <button
                                            key={c.id}
                                            className={`caps-hs-spot${activeCap === c.id ? ' is-active' : ''}`}
                                            style={c.pos}
                                            aria-label={c.title}
                                            onClick={() => setActiveCap(c.id)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Right: card + tags */}
                            <div className="caps-hs-panel">
                                <article className="caps-hs-card" key={activeCap}>
                                    <h3>{currentCap.title}</h3>
                                    <p>{currentCap.text}</p>
                                    <a href="#" className="caps-hs-cta" onClick={e => e.preventDefault()}>Learn more</a>
                                </article>

                                <div className="caps-hs-tags">
                                    {capabilities.map(c => (
                                        <button
                                            key={c.id}
                                            className={`caps-hs-tag${activeCap === c.id ? ' is-active' : ''}`}
                                            onClick={() => setActiveCap(c.id)}
                                        >
                                            {c.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── TECH & ENGINEERING SUPPORT ── */}
            <section className="caps-tech">
                <div className="caps-container">
                    <span className="cap-label">Services</span>
                    <h2 className="caps-tech-heading">Technical and Engineering Support</h2>
                    <p className="caps-tech-sub">
                        At Orion Technik we offer a suite of services tailored to our clients' requirements,
                        with our in-house team of technicians and aerospace engineering expertise.
                    </p>

                    <div className="caps-accordion">
                        {techServices.map((svc, i) => (
                            <div className={`caps-acc-item${openAccordion === i ? ' is-open' : ''}`} key={i}>
                                <button className="caps-acc-header" onClick={() => toggleAccordion(i)}>
                                    <div>
                                        <h4>{svc.title}</h4>
                                        <p>{svc.summary}</p>
                                    </div>
                                    <span className="caps-acc-icon">{openAccordion === i ? '−' : '+'}</span>
                                </button>
                                {openAccordion === i && (
                                    <div className="caps-acc-body">
                                        {svc.body.split('\n\n').map((para, j) => (
                                            <p key={j}>{para}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SUPPORTED FLEET ── */}
            <section className="caps-fleet">
                <div className="caps-container">
                    <span className="cap-label">Aircraft</span>
                    <h2 className="caps-fleet-heading">Supported Fleet</h2>
                    <p className="caps-fleet-sub">
                        With a long experience and relationship with lead repair stations combined with our in-house repair capabilities,
                        at Orion Technik we deliver a worldwide repair solution from Defence to Civil aviation on fixed and rotary wing aircraft.
                    </p>

                    <div className="caps-fleet-grid">
                        {fleetCategories.map((cat, i) => (
                            <div className="caps-fleet-card" key={i}>
                                <div className="caps-fleet-icon">
                                    {cat.icon}
                                </div>
                                <h4>{cat.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT FORM ── */}
            <section className="caps-contact">
                <div className="caps-container caps-contact-inner">
                    <div className="caps-contact-text">
                        <span className="cap-label">Get In Touch</span>
                        <h2>Need repair or engineering support?</h2>
                        <p>Our team is ready to discuss your requirements and deliver tailored solutions.</p>
                    </div>
                    <form className="caps-form" onSubmit={handleSubmit}>
                        {sent ? (
                            <div className="caps-success">
                                <span>&#10003;</span>
                                <p>Message sent! We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <>
                                <div className="caps-form-row">
                                    <div className="caps-field">
                                        <label htmlFor="caps-name">Name</label>
                                        <input id="caps-name" type="text" placeholder="Your name" value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                                    </div>
                                    <div className="caps-field">
                                        <label htmlFor="caps-email">Email</label>
                                        <input id="caps-email" type="email" placeholder="your@email.com" value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="caps-field">
                                    <label htmlFor="caps-msg">Message</label>
                                    <textarea id="caps-msg" rows={5} placeholder="How can we help you?" value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })} required />
                                </div>
                                <button type="submit" className="caps-submit">Send Message &rarr;</button>
                            </>
                        )}
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Capabilities;
