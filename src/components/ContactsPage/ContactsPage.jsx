import React, { useState } from 'react';
import '../Capabilities/Capabilities.css';
import './ContactsPage.css';
import Footer from '../Footer/Footer';
import D2Header from '../Design2/D2Header';

/* ── Imagem de Background do Hero (Local / Dispositivo) ── */
// 1. Coloque a sua imagem na pasta: src/assets/
// 2. Importe a imagem abaixo alterando o nome do ficheiro (ex: 'minha-foto.jpg')
import HERO_BG_IMAGE from '../../assets/hero_contacts_image.webp';

const offices = [
    {
        region: 'Europe (HQ)',
        city: 'Lisbon, Portugal',
        address: 'Zona Industrial das Corredoras, Aveiro / Lisbon Engineering Office',
        phone: '+351 210 987 098',
        email: 'info@oriontechnik.pt',
        type: 'Engineering & HQ'
    },
    {
        region: 'Middle East',
        city: 'Dubai, UAE',
        address: 'Dubai South - Logistics District, Business Center',
        phone: '+971 4 800 ORION',
        email: 'dxb@oriontechnik.pt',
        type: 'Logistics Hub'
    },
    {
        region: 'Mediterranean',
        city: 'Luqa, Malta',
        address: 'Aviation District, Malta International Airport',
        phone: '+356 2122 0000',
        email: 'camo@orionaviation.com.mt',
        type: 'CAMO & Operations'
    }
];

const ContactsPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <div className="contacts-page">
            <D2Header activePage="contacts" />

            <main className="cnt-main">
                {/* HERO SECTION */}
                <section
                    className="cnt-hero"
                    style={HERO_BG_IMAGE ? { backgroundImage: `url(${HERO_BG_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'top' } : {}}
                >
                    <div className="cnt-hero-overlay" />
                    <div className="cnt-container">
                        <div className="cnt-hero-txt">
                            <span className="cap-label">Global Presence</span>
                            <h1>Global Reach. <br />Personal Support.</h1>
                            <p>Connect with our multidisciplinary teams of engineers and logistics experts across our strategic global hubs.</p>
                        </div>
                    </div>
                </section>

                {/* INTERACTION HUB */}
                <section className="cnt-hub">
                    <div className="cnt-container">
                        <div className="cnt-grid">

                            {/* LEFT: OFFICE LIST */}
                            <div className="cnt-offices">
                                <h2 className="cnt-sect-title">Our Offices</h2>
                                <div className="office-stack">
                                    {offices.map((off, idx) => (
                                        <div key={idx} className="office-card">
                                            <div className="office-header">
                                                <span className="office-region">{off.region}</span>
                                                <span className="office-type">{off.type}</span>
                                            </div>
                                            <h3>{off.city}</h3>
                                            <p className="office-addr">{off.address}</p>
                                            <div className="office-links">
                                                <a href={`tel:${off.phone}`}>
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                                                    {off.phone}
                                                </a>
                                                <a href={`mailto:${off.email}`}>
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                                    {off.email}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="cnt-support-box">
                                    <h4>24/7 AOG Support</h4>
                                    <p>In case of aircraft on ground emergencies, our specialized team is available around the clock.</p>
                                    <a href="mailto:aog@oriontechnik.pt" className="cnt-aog-btn">AOG Emergency Contact</a>
                                </div>
                            </div>

                            {/* RIGHT: CONTACT FORM */}
                            <div className="cnt-form-container">
                                <div className="cnt-form-card">
                                    {status === 'success' ? (
                                        <div className="cnt-success">
                                            <div className="success-icon">✓</div>
                                            <h2>Message Sent</h2>
                                            <p>Thank you for contacting Orion Technik. A representative will be in touch with you shortly.</p>
                                            <button className="cnt-reset-btn" onClick={() => setStatus('idle')}>Send another message</button>
                                        </div>
                                    ) : (
                                        <form className="cnt-form" onSubmit={handleSubmit}>
                                            <h2 className="cnt-form-title">Send Inquiry</h2>
                                            <div className="cnt-form-grid">
                                                <div className="cnt-input-group">
                                                    <label>Full Name</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Engineering Dept."
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                </div>
                                                <div className="cnt-input-group">
                                                    <label>Professional Email</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        placeholder="name@company.aero"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="cnt-input-group">
                                                <label>Company / Organization</label>
                                                <input
                                                    type="text"
                                                    placeholder="Airline or MRO Name"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                />
                                            </div>
                                            <div className="cnt-input-group">
                                                <label>Message</label>
                                                <textarea
                                                    rows="6"
                                                    required
                                                    placeholder="How can we support your operation?"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="cnt-submit-btn" disabled={status === 'sending'}>
                                                {status === 'sending' ? 'Transmitting...' : 'Send Message →'}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* MAP SECTION */}
                <section className="cnt-map-section">
                    <iframe
                        title="Orion Technik Location"
                        src="https://maps.google.com/maps?q=Aeroh%C3%A9lice,+Caminho+do+Parrau,+10+Zona+Industrial+das+Corredoras,+2630-369+Arruda+dos+Vinhos,+Portugal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactsPage;
