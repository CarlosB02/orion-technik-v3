import React, { useState } from 'react';
import '../Capabilities/Capabilities.css';
import './NewsPage.css';
import Footer from '../Footer/Footer';
import D2ContactSection from '../Design2/D2ContactSection';
import D2Header from '../Design2/D2Header';

/* ── Imagem de Background do Hero (Local / Dispositivo) ── */
// 1. Coloque a sua imagem na pasta: src/assets/
// 2. Importe a imagem abaixo alterando o nome do ficheiro (ex: 'minha-foto.jpg')
import HERO_BG_IMAGE from '../../assets/hero-bg-v2.png';

const newsItems = [
    {
        id: 1,
        category: 'Innovation',
        date: '24 Feb 2024',
        title: 'Precision Engineering: The Future of EASA Part 145 Standards',
        excerpt: 'How Orion Technik is leading the transition to next-generation maintenance protocols with digital twin integration.',
        image: '/src/assets/hero-bizjet-sunset.png',
        size: 'large'
    },
    {
        id: 2,
        category: 'Global',
        date: '18 Feb 2024',
        title: 'Dubai Hub Expansion: Strengthening Middle East Operations',
        excerpt: 'A new milestone in our global growth strategy, enhancing local support for our premium fleet customers.',
        image: '/src/assets/asset-management.png',
        size: 'small'
    },
    {
        id: 3,
        category: 'Defence',
        date: '12 Feb 2024',
        title: 'NATO AQAP 2110: Excellence in Tactical Reliability',
        excerpt: 'Orion Technik renews its commitment to defence readiness with enhanced quality management systems.',
        image: '/src/assets/engineering-support.png',
        size: 'small'
    },
    {
        id: 4,
        category: 'Sustainability',
        date: '05 Feb 2024',
        title: 'Green Aviation: Implementing Eco-Efficient MRO Practices',
        excerpt: 'Reducing our carbon footprint through optimized logistics and sustainable component life-cycling.',
        image: '/src/assets/hero-atr.png',
        size: 'wide'
    },
    {
        id: 5,
        category: 'Fleet',
        date: '30 Jan 2024',
        title: 'Rotary Wing Mastery: Expanding our H-Series Capabilities',
        excerpt: 'New specialized tooling and technician certifications approved for advanced helicopter avionics.',
        image: '/src/assets/hero-bizjet.png',
        size: 'small'
    },
    {
        id: 6,
        category: 'Training',
        date: '22 Jan 2024',
        title: 'Orion Academy: Nurturing the Next Generation of Engineers',
        excerpt: 'Our scholarship program welcomes 12 new apprentices to the engineering department.',
        image: '/src/assets/hero-bg-creative.png',
        size: 'small'
    }
];

const NewsPage = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Innovation', 'Global', 'Defence', 'Sustainability', 'Fleet'];

    const filteredNews = filter === 'All'
        ? newsItems
        : newsItems.filter(item => item.category === filter);

    return (
        <div className="news-page">
            <D2Header activePage="news" />

            <section className="news-hero">
                <div
                    className="news-hero-bg"
                    style={HERO_BG_IMAGE ? { backgroundImage: `url(${HERO_BG_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                />
                <div className="news-hero-content">
                    <span className="news-badge">Pulse of Orion</span>
                    <h1>Aviation Insight & Intelligence</h1>
                    <p>Tracking the evolution of aerospace engineering, global partnerships, and technical excellence.</p>
                </div>
            </section>

            <section className="news-feed">
                <div className="news-container">
                    <div className="news-filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`news-filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="news-grid">
                        {filteredNews.map(item => (
                            <div key={item.id} className={`news-card ${item.size}`}>
                                <div className="news-card-image">
                                    <img src={item.image} alt={item.title} />
                                    <div className="news-card-overlay" />
                                </div>
                                <div className="news-card-content">
                                    <div className="news-card-meta">
                                        <span className="news-card-category">{item.category}</span>
                                        <span className="news-card-date">{item.date}</span>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.excerpt}</p>
                                    <button className="news-read-more">Read Full Insight →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="news-subscribe">
                <div className="news-container">
                    <div className="news-subscribe-box">
                        <h2>Join the Inner Circle</h2>
                        <p>Receive exclusive technical bulletins and corporate updates directly from our engineering team.</p>
                        <form className="news-subscribe-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="professional@email.com" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>

            <D2ContactSection />
            <Footer />
        </div>
    );
};

export default NewsPage;
