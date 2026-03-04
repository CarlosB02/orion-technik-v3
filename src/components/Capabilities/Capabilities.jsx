import React, { useState } from 'react';
import './Capabilities.css';
import Footer from '../Footer/Footer';
import D2ContactSection from '../Design2/D2ContactSection';
import D2Header from '../Design2/D2Header';

/* ── Imagem de Background do Hero (Local / Dispositivo) ── */
// 1. Coloque a sua imagem na pasta: src/assets/
// 2. Importe a imagem abaixo alterando o nome do ficheiro (ex: 'minha-foto.jpg')
import HERO_BG_IMAGE from '../../assets/hero-bg-v2.webp';

/* ── Imagens Reais de Aviões para as Cartas ── */
import FLEET_MILITARY from '../../assets/hero-bizjet-sunset.png';
import FLEET_CIVIL from '../../assets/hero-atr.png';
import FLEET_ROTARY from '../../assets/hero-bizjet.png';
import FLEET_ENGINE from '../../assets/hero-hangar-wide.png';

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
        image: FLEET_MILITARY,
    },
    {
        title: 'Fixed Wing \u2013 Civil',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 40l22-24 22 24M32 16v30M16 38l16 10 16-10" />
                <rect x="28" y="8" width="8" height="6" rx="2" />
            </svg>
        ),
        image: FLEET_CIVIL,
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
        image: FLEET_ROTARY,
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
        image: FLEET_ENGINE,
    },
];

/* ── Component ── */
const Capabilities = () => {
    const [activeCap, setActiveCap] = useState('Antennas');
    const [openAccordion, setOpenAccordion] = useState(null);

    const currentCap = capabilities.find(c => c.id === activeCap) || capabilities[0];
    const toggleAccordion = (i) => setOpenAccordion(openAccordion === i ? null : i);


    return (
        <div className="cap-page caps-page">

            {/* ── HEADER ── */}
            <D2Header activePage="capabilities" />

            {/* ── HERO ── */}
            <section className="caps-hero">
                <div
                    className="caps-hero-bg"
                    style={HERO_BG_IMAGE ? { backgroundImage: `url(${HERO_BG_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                />
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

            {/* ── SUPPORTED FLEET (OPTION 1) ── */}
            <section className="caps-fleet">
                <div className="caps-container">
                    <span className="cap-label">Aircraft</span>
                    <h2 className="caps-fleet-heading">Supported Fleet (Option 1)</h2>
                    <p className="caps-fleet-sub">
                        With a long experience and relationship with lead repair stations combined with our in-house repair capabilities,
                        at Orion Technik we deliver a worldwide repair solution from Defence to Civil aviation on fixed and rotary wing aircraft.
                    </p>

                    <div className="caps-fleet-grid">
                        {fleetCategories.map((cat, i) => (
                            <div className="caps-fleet-card" key={i}>
                                <div className="caps-fleet-card-bg" style={{ backgroundImage: `url(${cat.image})` }}></div>
                                <div className="caps-fleet-card-content">
                                    <div className="caps-fleet-icon">
                                        {cat.icon}
                                    </div>
                                    <h4>{cat.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SUPPORTED FLEET (OPTION 2 - CREATIVE ASTHETIC) ── */}
            <section className="caps-fleet-v2">
                <div className="caps-container">
                    <span className="cap-label">Aircraft</span>
                    <h2 className="caps-fleet-heading">Supported Fleet (Option 2)</h2>
                    <p className="caps-fleet-sub">
                        Alternative creative layout for the supported fleet using diagonal shapes,
                        dynamic masking, and offset hover reveals.
                    </p>

                    <div className="caps-fleet-v2-grid">
                        {fleetCategories.map((cat, i) => (
                            <div className="caps-fleet-v2-card" key={`v2-${i}`}>
                                <div className="v2-card-img-shell" style={{ backgroundImage: `url(${cat.image})` }}>
                                    <div className="v2-card-overlay"></div>
                                </div>

                                <div className="v2-card-data">
                                    <div className="v2-icon-wrap">
                                        {cat.icon}
                                    </div>
                                    <div className="v2-text-wrap">
                                        <h4>{cat.title}</h4>
                                        <div className="v2-line"></div>
                                        <p className="v2-discover">View Details &rarr;</p>
                                    </div>
                                </div>
                                <div className="v2-card-border-fx"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <D2ContactSection />
            <Footer />
        </div>
    );
};

export default Capabilities;
