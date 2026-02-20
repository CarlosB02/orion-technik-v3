import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Certificates.css';
import { Plane, Plus } from 'lucide-react';

import mtCamoFull from '../../assets/certificates/mt-camo-0107-full.png';
import bdaCamo from '../../assets/certificates/bda-camo-257.jpg';

const certificates = [
    { id: 1, src: bdaCamo, label: 'BDA CAMO 257', alt: 'BDA/CAMO/257 Approval Certificate', mode: 'fit' },
    { id: 2, src: mtCamoFull, label: 'MT.CAMO.0107', alt: 'MT.CAMO.0107 Certificate', mode: 'scroll' },
];

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <>
            {certificates.map((cert) => (
                <button
                    key={cert.id}
                    className="cert-button"
                    onClick={() => setSelectedCert(cert)}
                >
                    {cert.label} <Plus size={16} />
                </button>
            ))}

            {selectedCert && createPortal(
                <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal-frame" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="cert-close-btn"
                            onClick={() => setSelectedCert(null)}
                            title="Close"
                        >
                            <Plane size={24} className="plane-icon" />
                        </button>
                        <div className={`cert-scroll-area mode-${selectedCert.mode}`}>
                            <img src={selectedCert.src} alt={selectedCert.alt} />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Certificates;
