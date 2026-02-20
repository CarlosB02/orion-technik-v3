import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import News from '../News/News';
import Footer from '../Footer/Footer';
import heroBg from '../../assets/hero-bg-final.png';

import camoImg from '../../assets/camo-services.png';
import maintenanceImg from '../../assets/maintenance-supervision.png';
import assetManagementImg from '../../assets/asset-management.png';
import otherImg from '../../assets/other-services.png';

// Placeholder data for sections


const repairData = {
    title: "Repair Capabilities",
    text: "Orion Technik Maintenance & Engineering is an EASA & EMAR Part 145 approved Repair Station",
    image: maintenanceImg,
    reversed: false
};

const supplyChainData = {
    title: "Supply Chain",
    text: "Orion Technik Maintenance & Engineering is a Global Distributor of different Brands and Manufacturers of Parts, Consumables, Tools and Support Equipment for the Aerospace Industry",
    image: assetManagementImg,
    reversed: true
};

const techSupportData = {
    title: "Technical and Engineering Support",
    text: "Through its multidisciplinary team, Orion Technik provides you a wide range of services.",
    image: camoImg,
    reversed: false
};

const fleetData = {
    title: "Supported Fleet",
    text: "From Military to Civil aviation, Orion Technik can provide support and services for various rotary and fixed-wing aircraft.",
    image: otherImg,
    reversed: true
};

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />

            <News />
            <Section {...repairData} />
            <Section {...supplyChainData} />
            <Section {...techSupportData} />
            <Section {...fleetData} />
            <Footer />
        </div>
    );
}

export default Home;
