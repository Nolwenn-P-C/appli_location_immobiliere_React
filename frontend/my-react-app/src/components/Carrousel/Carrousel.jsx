import React, { useState } from 'react';

import './carrousel.css';

const Carrousel = ({ images }) => {
    if (!images || images.length === 0) {
        return <div className="carrousel">Aucune image disponible</div>;
    }

    const [indexActuel, setIndexActuel] = useState(0);

    const allerAuSuivant = () => {
        setIndexActuel((indexPrécédent) => (indexPrécédent + 1) % images.length);
    };

    const allerAuPrécédent = () => {
        setIndexActuel((indexPrécédent) => (indexPrécédent - 1 + images.length) % images.length);
    };

    return (
        <div className="carrousel">
            <div className="conteneur-image">
                <img src={images[indexActuel]} alt={`Slide ${indexActuel + 1}`} className="image-carrousel" />
                {images.length > 1 && (
                    <div className="indicateur-image">
                        {indexActuel + 1} / {images.length}
                    </div>
                )}
                {images.length > 1 && (
                    <>
                        <button className="bouton-carrousel bouton-carrousel--précédent" onClick={allerAuPrécédent} aria-label="Image précédente">
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="bouton-carrousel bouton-carrousel--suivant" onClick={allerAuSuivant} aria-label="Image suivante">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Carrousel;
