import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/orion-logo-new.png';

const Header = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    React.useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    // if scroll down hide the navbar
                    setIsVisible(false);
                } else {
                    // if scroll up show the navbar
                    setIsVisible(true);
                }
                // remember current page location to use in the next move
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header className={`header ${!isVisible ? 'header--hidden' : ''}`}>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Orion Technik Logo" className="logo-img" />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/meet-our-team">Meet Our Team</Link></li>
                    <li><Link to="/meet-our-team#contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
