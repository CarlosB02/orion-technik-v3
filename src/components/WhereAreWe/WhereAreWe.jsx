import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Capabilities/Capabilities.css';
import './WhereAreWe.css';
import Footer from '../Footer/Footer';

/* ── Data ── */
const row1Countries = [
    { code: 'pt', name: 'Portugal' },
    { code: 'es', name: 'Spain' },
    { code: 'fr', name: 'France' },
    { code: 'nl', name: 'The Netherlands' },
    { code: 'gb', name: 'Great Britain' },
    { code: 'se', name: 'Sweden' },
    { code: 'gr', name: 'Greece' },
    { code: 'be', name: 'Belgium' },
    { code: 'pl', name: 'Poland' },
    { code: 'ca', name: 'Canada' },
    { code: 'us', name: 'United States of America' },
    { code: 'cl', name: 'Chile' },
];

const row2Countries = [
    { code: 'br', name: 'Brazil' },
    { code: 'dz', name: 'Algeria' },
    { code: 'ma', name: 'Morocco' },
    { code: 'eg', name: 'Egypt' },
    { code: 'et', name: 'Ethiopia' },
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'id', name: 'Indonesia' },
    { code: 'my', name: 'Malaysia' },
    { code: 'th', name: 'Thailand' },
    { code: 'kr', name: 'South Korea' },
    { code: 'tw', name: 'Taiwan' },
];

const maps = [
    {
        id: 'global',
        tab: 'Global Presence',
        src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/World_Map_Global_Presence.svg',
        alt: 'Global Presence',
        title: 'Local support wherever you need',
        body: 'We have a solid network of locations ready to help you in whatever you need.',
        metrics: [
            { value: '23', label: 'Countries' },
            { value: '57', label: 'Facilities' },
            { value: '268', label: 'Staff' },
        ],
    },
    {
        id: 'nato',
        tab: 'NATO Countries',
        src: 'https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/NATO_World_Map.svg',
        alt: 'NATO world map',
        title: 'NATO countries',
        body: 'We are a NATO Supply & Procurement Agency, they trust us, so you can too.',
        metrics: [
            { value: '32', label: 'Members' },
            { value: '13 209', label: 'Planes' },
            { value: '7', label: 'Other' },
        ],
    },
];

/* ── Zoomable Map Component ── */
const ZoomableMap = ({ src, alt }) => {
    const stageRef = useRef(null);
    const imgRef = useRef(null);
    const stateRef = useRef({ scale: 1, x: 0, y: 0 });
    const dragRef = useRef({ dragging: false, startX: 0, startY: 0, panX: 0, panY: 0 });

    const apply = useCallback(() => {
        const s = stateRef.current;
        if (imgRef.current) {
            imgRef.current.style.transform = `translate(${s.x}px, ${s.y}px) scale(${s.scale})`;
        }
    }, []);

    const clampPos = useCallback(() => {
        const stage = stageRef.current;
        const img = imgRef.current;
        if (!stage || !img) return;
        const s = stateRef.current;
        const rect = stage.getBoundingClientRect();
        const baseW = rect.width;
        const baseH = img.naturalHeight ? rect.width * (img.naturalHeight / img.naturalWidth) : rect.height;
        const w = baseW * s.scale;
        const h = baseH * s.scale;
        s.x = Math.max(Math.min(0, rect.width - w), Math.min(0, s.x));
        s.y = Math.max(Math.min(0, rect.height - h), Math.min(0, s.y));
    }, []);

    const zoom = useCallback((factor) => {
        const s = stateRef.current;
        s.scale = Math.max(1, Math.min(5, s.scale * factor));
        clampPos();
        apply();
    }, [clampPos, apply]);

    const handlePointerDown = (e) => {
        stageRef.current?.setPointerCapture(e.pointerId);
        dragRef.current = { dragging: true, startX: e.clientX, startY: e.clientY, panX: stateRef.current.x, panY: stateRef.current.y };
    };

    const handlePointerMove = (e) => {
        if (!dragRef.current.dragging) return;
        const d = dragRef.current;
        stateRef.current.x = d.panX + (e.clientX - d.startX);
        stateRef.current.y = d.panY + (e.clientY - d.startY);
        clampPos();
        apply();
    };

    const handlePointerUp = () => { dragRef.current.dragging = false; };

    const handleDblClick = () => {
        stateRef.current = { scale: 1, x: 0, y: 0 };
        apply();
    };

    return (
        <div className="waw-map-plate">
            <div
                className="waw-zoom-stage"
                ref={stageRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onDoubleClick={handleDblClick}
            >
                <img className="waw-zoom-img" ref={imgRef} src={src} alt={alt} onLoad={apply} draggable={false} />
            </div>
            <div className="waw-zoom-controls">
                <button type="button" className="waw-zoom-btn" onClick={() => zoom(1.25)} aria-label="Zoom in">+</button>
                <button type="button" className="waw-zoom-btn" onClick={() => zoom(1 / 1.25)} aria-label="Zoom out">−</button>
            </div>
        </div>
    );
};

/* ── Flag Card ── */
const FlagCard = ({ code, name }) => (
    <span className="waw-flag-card" aria-label={name}>
        <img
            loading="lazy"
            src={`https://flagcdn.com/w80/${code}.png`}
            srcSet={`https://flagcdn.com/w160/${code}.png 2x`}
            alt={`${name} flag`}
        />
        <span>{name}</span>
    </span>
);

/* ── Main Component ── */
const WhereAreWe = () => {
    const [activeMap, setActiveMap] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

    const currentMap = maps[activeMap];

    return (
        <div className="cap-page waw-page">

            {/* ── HEADER ── */}
            <header className="cap-header">
                <Link to="/design2" className="cap-back">← Orion Technik</Link>
                <nav className="cap-nav">
                    <Link to="/capabilities">Capabilities</Link>
                    <Link to="/quality">Quality</Link>
                    <Link to="/news-page">News</Link>
                    <Link to="/where-are-we" className="cap-nav--active">Where Are We</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
            </header>

            {/* ── HERO ── */}
            <section className="waw-hero">
                <div className="waw-hero-bg" />
                <div className="waw-hero-content">
                    <span className="cap-label">Our Locations</span>
                    <h1>Global Presence, Local Support</h1>
                    <p>A global presence shaped by strategy, collaboration, and defence readiness.</p>
                </div>
            </section>

            {/* ── MAP TABS ── */}
            <section className="waw-maps">
                <div className="waw-container">
                    {/* Tab buttons */}
                    <div className="waw-tabs" role="tablist">
                        {maps.map((m, i) => (
                            <button
                                key={m.id}
                                role="tab"
                                className={`waw-tab${activeMap === i ? ' is-active' : ''}`}
                                aria-selected={activeMap === i}
                                onClick={() => setActiveMap(i)}
                            >
                                {m.tab}
                            </button>
                        ))}
                    </div>

                    {/* Panel */}
                    <div className="waw-mapwrap" key={currentMap.id}>
                        <figure className="waw-map">
                            <ZoomableMap src={currentMap.src} alt={currentMap.alt} />
                        </figure>

                        <aside className="waw-side">
                            <h3 className="waw-side-title">{currentMap.title}</h3>
                            <p className="waw-side-body">{currentMap.body}</p>
                            <ul className="waw-side-metrics">
                                {currentMap.metrics.map((m, i) => (
                                    <li key={i}>
                                        <strong>{m.value}</strong>
                                        <span>{m.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ── FLAG MARQUEE ── */}
            <section className="waw-countries">
                <div className="waw-marquee">
                    <div className="waw-row r1">
                        {[...row1Countries, ...row1Countries].map((c, i) => (
                            <FlagCard key={`r1-${i}`} code={c.code} name={c.name} />
                        ))}
                    </div>
                    <div className="waw-row r2">
                        {[...row2Countries, ...row2Countries].map((c, i) => (
                            <FlagCard key={`r2-${i}`} code={c.code} name={c.name} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT FORM ── */}
            <section className="waw-contact">
                <div className="waw-container waw-contact-inner">
                    <div className="waw-contact-text">
                        <span className="cap-label">Get In Touch</span>
                        <h2>Ready to work with us?</h2>
                        <p>Wherever you are, our team is close. Reach out and discover how we can support your operations.</p>
                    </div>
                    <form className="waw-form" onSubmit={handleSubmit}>
                        {sent ? (
                            <div className="waw-success">
                                <span>✓</span>
                                <p>Message sent! We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <>
                                <div className="waw-form-row">
                                    <div className="waw-field">
                                        <label htmlFor="waw-name">Name</label>
                                        <input id="waw-name" type="text" placeholder="Your name" value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                                    </div>
                                    <div className="waw-field">
                                        <label htmlFor="waw-email">Email</label>
                                        <input id="waw-email" type="email" placeholder="your@email.com" value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="waw-field">
                                    <label htmlFor="waw-msg">Message</label>
                                    <textarea id="waw-msg" rows={5} placeholder="How can we help you?" value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })} required />
                                </div>
                                <button type="submit" className="waw-submit">Send Message →</button>
                            </>
                        )}
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WhereAreWe;
