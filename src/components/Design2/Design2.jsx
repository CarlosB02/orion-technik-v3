import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import News from '../News/News';
import Footer from '../Footer/Footer';
import Certificates from '../Certificates/Certificates';
import capabilitiesImg from '../../assets/capabilities.png';
import qualityImg from '../../assets/quality.png';
import camoImg from '../../assets/camo-services.png';
import maintenanceImg from '../../assets/maintenance-supervision.png';
import engineeringImg from '../../assets/engineering-support.png';
import otherImg from '../../assets/other-services.png';
import './Design2.css';

// Data placeholders mirroring Home.jsx
const capabilitiesData = {
    title: "Capabilities",
    text: "Based in Lisbon, Portugal, Orion Technik is an EASA & EMAR 145 (PT.145.037) approved repair station specialized in Avionics, Instruments, Wheels and Brakes, Lighting, Antennas, Electronics, Galley, Electro-Mechanical, Hydraulic, Mechanical and Radar components for defense and commercial platforms.",
    image: capabilitiesImg,
    reversed: false
};

const qualityData = {
    title: "Quality",
    text: "Orion Technik is registered as a Portuguese Ministry of Defense and NATO supplier (CAGE Code: P3457) and manages the operations according to the Aerospace Industry Quality Management System AS/EN 9100, ISO 9001, NATO AQAP 2110, the European Aerospace Authority (EASA) PART-145 and the European Military Authority (EMAR) EMAR-145.",
    image: qualityImg,
    reversed: true
};

const camoData = {
    title: "CAMO Services",
    subtitle: "under TM-CAD approval MT.CAMO.0107 and BDA CAMO 257",
    text: "Aircraft Management, Airworthiness Management, Development and approval of maintenance programs, Technical Support, and more.",
    image: camoImg,
    id: "camo"
};

const maintenanceData = {
    title: "Maintenance Supervision",
    subtitle: "Technical representation",
    text: "Pre-Purchase Inspections, Aircraft Phase In & Phase out supervision, Mid-life surveys, and Base Maintenance Inspections.",
    image: maintenanceImg,
    id: "maintenance"
};

const engineeringData = {
    title: "Engineering Support",
    subtitle: "Modifications & Repairs",
    text: "Evaluation of existing modifications, Development and approval of Minor Changes, and Support in complications.",
    image: engineeringImg,
    id: "engineering"
};

const otherData = {
    title: "Other Services",
    subtitle: "Consulting & Inspection",
    text: "Aircraft valuation, appraisals, physical inspections, Continuing airworthiness audits, and General Aviation Consulting.",
    image: otherImg,
    id: "other"
};

const Design2 = () => {
    return (
        <div className="design2-page">
            <Header />
            <Hero />

            <Section {...capabilitiesData} />

            <News />

            {/* Redesigned Services Section */}
            <div className="d2-services-section">
                <div className="d2-section-header">
                    <h2>Our Specialized Services</h2>
                    <p>Comprehensive solutions for your aviation needs</p>
                </div>

                <div className="d2-services-row">
                    <div className="d2-service-card">
                        <div className="d2-card-image" style={{ backgroundImage: `url(${camoData.image})` }}></div>
                        <div className="d2-card-content">
                            <h3>{camoData.title}</h3>
                            <span className="d2-card-subtitle">{camoData.subtitle}</span>
                            <p>{camoData.text}</p>
                            <div className="d2-card-footer">
                                <Certificates />
                            </div>
                        </div>
                    </div>

                    <div className="d2-service-card">
                        <div className="d2-card-image" style={{ backgroundImage: `url(${maintenanceData.image})` }}></div>
                        <div className="d2-card-content">
                            <h3>{maintenanceData.title}</h3>
                            <span className="d2-card-subtitle">{maintenanceData.subtitle}</span>
                            <p>{maintenanceData.text}</p>
                            <div className="d2-card-footer">
                                <Link to="/meet-our-team#contact" className="d2-learn-more-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="d2-service-card">
                        <div className="d2-card-image" style={{ backgroundImage: `url(${engineeringData.image})` }}></div>
                        <div className="d2-card-content">
                            <h3>{engineeringData.title}</h3>
                            <span className="d2-card-subtitle">{engineeringData.subtitle}</span>
                            <p>{engineeringData.text}</p>
                            <div className="d2-card-footer">
                                <Link to="/meet-our-team#contact" className="d2-learn-more-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="d2-service-card">
                        <div className="d2-card-image" style={{ backgroundImage: `url(${otherData.image})` }}></div>
                        <div className="d2-card-content">
                            <h3>{otherData.title}</h3>
                            <span className="d2-card-subtitle">{otherData.subtitle}</span>
                            <p>{otherData.text}</p>
                            <div className="d2-card-footer">
                                <Link to="/meet-our-team#contact" className="d2-learn-more-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Section {...qualityData} />

            <Footer />
        </div>
    );
};

export default Design2;
