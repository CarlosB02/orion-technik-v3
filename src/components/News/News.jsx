import React, { useState, useEffect } from 'react';
import './News.css';
import { Plus } from 'lucide-react';

const News = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // 1. Fetch RSS Feed
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://eco.sapo.pt/eradar/feed');
                const data = await response.json();

                // 2. Process & Translate Items
                const recentNews = await Promise.all(data.items.slice(0, 3).map(async (item) => {
                    // Try to find image in enclosure, thumbnail, or regex match in description/content
                    let imageUrl = item.thumbnail || item.enclosure?.link;
                    if (!imageUrl && item.description) {
                        const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
                        if (imgMatch) {
                            imageUrl = imgMatch[1];
                        }
                    }

                    const cleanDescription = item.description
                        ? item.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...'
                        : '';

                    // --- TRANSLATION FUNCTION ---
                    const translateText = async (text) => {
                        try {
                            if (!text) return '';
                            // Use user email to increase limit to 50k words/day
                            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pt|en&de=geral@enimble.pt`);
                            const data = await res.json();

                            const translated = data.responseData.translatedText;

                            // Check for usage limit warning and fallback to original text
                            if (translated && (translated.startsWith('MYMEMORY WARNING') || data.responseStatus === 429)) {
                                console.warn('Translation quota exceeded, using original text.');
                                return text;
                            }

                            return translated || text;
                        } catch (e) {
                            console.warn('Translation failed:', e);
                            return text;
                        }
                    };

                    // Translate Title and Description
                    const [translatedTitle, translatedDesc] = await Promise.all([
                        translateText(item.title),
                        translateText(cleanDescription)
                    ]);

                    return {
                        title: translatedTitle,
                        link: item.link,
                        image: imageUrl || null,
                        description: translatedDesc
                    };
                }));

                setNewsItems(recentNews);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError("Could not load latest news.");
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div className="news" style={{ color: 'white', textAlign: 'center' }}>Loading news...</div>;
    if (error) return <div className="news" style={{ color: 'white', textAlign: 'center' }}>{error}</div>;

    return (
        <section className="news" id="news">
            <h2 className="news-title">What's new</h2>
            <div className="news-grid">
                {newsItems.map((item, index) => (
                    <div className="news-item" key={index}>
                        {item.image && (
                            <div className="news-image-container">
                                <img src={item.image} alt={item.title} className="news-image" />
                            </div>
                        )}
                        <div className="news-content">
                            <h3>{item.title}</h3>
                        </div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Learn more <Plus size={14} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default News;
