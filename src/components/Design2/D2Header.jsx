import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-orion-technik-tagline-blue.png';

/**
 * Shared Design2 header used across all pages.
 * @param {string} activePage - one of: 'home' | 'capabilities' | 'quality' | 'news' | 'where-are-we' | 'contacts'
 */
const D2Header = ({ activePage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        // Trigger once on mount so inner pages (which start scrolled) get solid bg
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { to: '/', label: 'Home', key: 'home' },
        { to: '/capabilities', label: 'Capabilities', key: 'capabilities' },
        { to: '/quality', label: 'Quality', key: 'quality' },
        { to: '/news-page', label: 'News', key: 'news' },
        { to: '/where-are-we', label: 'Where Are We', key: 'where-are-we' },
        { to: '/contacts', label: 'Contacts', key: 'contacts' },
    ];

    return (
        <header className={`d2-header ${scrolled ? 'd2-header--scrolled' : ''}`}>
            <div className="d2-header-logo">
                <Link to="/"><img src={logo} alt="Orion Technik" /></Link>
            </div>

            <ul className={`d2-header-nav ${mobileNav ? 'd2-nav-open' : ''}`}>
                {navLinks.map(({ to, label, key }) => (
                    <li key={key}>
                        <Link
                            to={to}
                            className={activePage === key ? 'd2-nav-active' : ''}
                            onClick={() => setMobileNav(false)}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            <button
                className="d2-hamburger"
                onClick={() => setMobileNav(!mobileNav)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>
        </header>
    );
};

export default D2Header;
