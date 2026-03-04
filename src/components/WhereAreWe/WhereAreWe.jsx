import React, { useState, useCallback } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import '../Capabilities/Capabilities.css';
import './WhereAreWe.css';
import Footer from '../Footer/Footer';
import D2ContactSection from '../Design2/D2ContactSection';
import D2Header from '../Design2/D2Header';

/* ── Imagem de Background do Hero (Local / Dispositivo) ── */
import HERO_BG_IMAGE from '../../assets/hero_contacts_image.webp';

/* ── TopoJSON world atlas ── */
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

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

/* ── ISO 3166-1 numeric IDs for highlighted countries ── */
/* Global Presence countries (Orion Technik locations) */
const GLOBAL_PRESENCE_IDS = new Set([
    '620', // Portugal
    '724', // Spain
    '250', // France
    '528', // Netherlands
    '826', // United Kingdom
    '752', // Sweden
    '300', // Greece
    '056', // Belgium
    '616', // Poland
    '124', // Canada
    '840', // United States
    '152', // Chile
    '076', // Brazil
    '012', // Algeria
    '504', // Morocco
    '818', // Egypt
    '231', // Ethiopia
    '784', // UAE
    '360', // Indonesia
    '458', // Malaysia
    '764', // Thailand
    '410', // South Korea
    '158', // Taiwan
]);

/* NATO member states */
const NATO_IDS = new Set([
    '840', // United States
    '826', // United Kingdom
    '250', // France
    '276', // Germany
    '380', // Italy
    '124', // Canada
    '056', // Belgium
    '528', // Netherlands
    '442', // Luxembourg
    '578', // Norway
    '208', // Denmark
    '352', // Iceland
    '620', // Portugal
    '300', // Greece
    '792', // Turkey
    '724', // Spain
    '616', // Poland
    '203', // Czech Republic
    '348', // Hungary
    '100', // Bulgaria
    '642', // Romania
    '703', // Slovakia
    '705', // Slovenia
    '233', // Estonia
    '428', // Latvia
    '440', // Lithuania
    '191', // Croatia
    '008', // Albania
    '499', // Montenegro
    '807', // North Macedonia
    '246', // Finland
    '752', // Sweden
]);

const maps = [
    {
        id: 'global',
        tab: 'Global Presence',
        highlightedIds: GLOBAL_PRESENCE_IDS,
        highlightColor: '#3D5E6B',
        hoverColor: '#2a454f',
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
        highlightedIds: NATO_IDS,
        highlightColor: '#003478',
        hoverColor: '#002255',
        title: 'NATO countries',
        body: 'We are a NATO Supply & Procurement Agency, they trust us, so you can too.',
        metrics: [
            { value: '32', label: 'Members' },
            { value: '13 209', label: 'Planes' },
            { value: '7', label: 'Other' },
        ],
    },
];

/* ── Interactive Map Component ── */
const InteractiveMap = ({ highlightedIds, highlightColor, hoverColor }) => {
    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
    const [tooltipContent, setTooltipContent] = useState('');

    const handleZoomIn = useCallback(() => {
        setPosition((pos) => ({ ...pos, zoom: Math.min(pos.zoom * 1.4, 8) }));
    }, []);

    const handleZoomOut = useCallback(() => {
        setPosition((pos) => ({ ...pos, zoom: Math.max(pos.zoom / 1.4, 1) }));
    }, []);

    const handleMoveEnd = useCallback((pos) => {
        setPosition(pos);
    }, []);

    const handleReset = useCallback(() => {
        setPosition({ coordinates: [0, 0], zoom: 1 });
    }, []);

    return (
        <div className="waw-map-plate">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 130, center: [10, 30] }}
                className="waw-composable-map"
                data-tooltip-id="map-tooltip"
            >
                <ZoomableGroup
                    center={position.coordinates}
                    zoom={position.zoom}
                    onMoveEnd={handleMoveEnd}
                    minZoom={1}
                    maxZoom={8}
                    translateExtent={[[-200, -200], [1200, 800]]}
                >
                    <Geographies geography={GEO_URL}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const countryId = geo.id;
                                const isHighlighted = highlightedIds.has(countryId);

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            setTooltipContent(geo.properties.name || '');
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent('');
                                        }}
                                        data-tooltip-id="map-tooltip"
                                        data-tooltip-content={geo.properties.name || ''}
                                        style={{
                                            default: {
                                                fill: isHighlighted ? highlightColor : '#DDE4EA',
                                                stroke: '#fff',
                                                strokeWidth: 0.5,
                                                outline: 'none',
                                                transition: 'fill 0.2s ease',
                                            },
                                            hover: {
                                                fill: isHighlighted ? hoverColor : '#BCC5CE',
                                                stroke: '#fff',
                                                strokeWidth: 0.5,
                                                outline: 'none',
                                                cursor: 'pointer',
                                            },
                                            pressed: {
                                                fill: isHighlighted ? hoverColor : '#A8B2BC',
                                                stroke: '#fff',
                                                strokeWidth: 0.5,
                                                outline: 'none',
                                            },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>

            <Tooltip
                id="map-tooltip"
                place="top"
                className="waw-tooltip"
                float={true}
            />

            <div className="waw-zoom-controls">
                <button type="button" className="waw-zoom-btn" onClick={handleZoomIn} aria-label="Zoom in">+</button>
                <button type="button" className="waw-zoom-btn" onClick={handleZoomOut} aria-label="Zoom out">−</button>
                <button type="button" className="waw-zoom-btn waw-zoom-reset" onClick={handleReset} aria-label="Reset zoom">↺</button>
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
    const currentMap = maps[activeMap];

    return (
        <div className="cap-page waw-page">

            {/* ── HEADER ── */}
            <D2Header activePage="where-are-we" />

            {/* ── HERO ── */}
            <section className="waw-hero">
                <div
                    className="waw-hero-bg"
                    style={HERO_BG_IMAGE ? { backgroundImage: `url(${HERO_BG_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                />
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
                            <InteractiveMap
                                highlightedIds={currentMap.highlightedIds}
                                highlightColor={currentMap.highlightColor}
                                hoverColor={currentMap.hoverColor}
                            />
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

            <D2ContactSection />

            <Footer />
        </div>
    );
};

export default WhereAreWe;
