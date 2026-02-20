import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import logo from '../../assets/orion-logo-new.png';

const Footer = () => {
    return (
        <footer className="footer" id="contacts">
            <div className="footer-content">
                <div className="footer-column logo-column">
                    <img src={logo} alt="Orion Technik Logo" className="footer-logo-img" />
                </div>

                <div className="footer-column">
                    <h4>ADDRESS</h4>
                    <p>Northlink Business Centre, Level 2</p>
                    <p>Burmarrad Road</p>
                    <p>Naxxar, Malta</p>
                </div>

                <div className="footer-column">
                    <div className="contact-block">
                        <h4>EMAIL ADDRESS</h4>
                        <p><a href="mailto:Info@orionaviation.eu" className="footer-link">Info@orionaviation.eu</a></p>
                    </div>

                    <div className="contact-block">
                        <h4>FOLLOW US</h4>
                        <a href="https://www.linkedin.com/company/orionaviation-camo/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
