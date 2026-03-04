import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="d2-footer">
            <div className="d2-footer-inner">

                {/* Col 1 – Brand */}
                <div className="d2-footer-brand">
                    <img
                        src="https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/logo-orion.png"
                        alt="Orion Technik"
                        className="d2-footer-logo"
                    />
                </div>

                {/* Col 2 – Links */}
                <div className="d2-footer-col">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><Link to="/capabilities" onClick={scrollToTop}>Capabilities</Link></li>
                        <li><Link to="/quality" onClick={scrollToTop}>Quality</Link></li>
                        <li><Link to="/news-page" onClick={scrollToTop}>News</Link></li>
                        <li><Link to="/where-are-we" onClick={scrollToTop}>Where We Are</Link></li>
                        <li><Link to="/contacts" onClick={scrollToTop}>Contacts</Link></li>
                    </ul>
                </div>

                {/* Col 3 – Contacts */}
                <div className="d2-footer-col">
                    <h4>Contacts</h4>
                    <ul className="d2-footer-contact-list">
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>Zona Industrial das Corredoras</span>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                            <span>+351 210 987 098</span>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            <span>info@oriontechnik.com</span>
                        </li>
                    </ul>
                </div>

                {/* Col 4 – Social + Funding */}
                <div className="d2-footer-col d2-footer-right">
                    <div className="d2-footer-social">
                        <a href="#" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/orionaviation-camo/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="#" aria-label="YouTube">
                            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
                        </a>
                    </div>
                    <div className="d2-footer-funding">
                        <img src="https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/pt2030_cofinanciamento.webp" alt="PT 2030" />
                        <img src="https://enimble.pt/oriontechnik/wp-content/uploads/2025/10/Centro2030-scaled.webp" alt="Centro 2030" />
                    </div>
                </div>
            </div>

            <div className="d2-footer-bottom">
                <a href="#">Privacy policy</a>
                <span>|</span>
                <a href="#">Terms of use</a>
                <span>|</span>
                <a href="#">Cookies Settings</a>
            </div>
        </footer>
    );
};

export default Footer;
