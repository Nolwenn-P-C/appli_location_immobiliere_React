import './card.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ property }) => {
    const imageUrl = property.pictures && property.pictures[0] ? property.pictures[0] : null;

    return (
        <div className="conteneur-logements">
            <Link to={`/fiche-logement/${property.id}`} className="card_lien">
                <article className="card_article">
                    {imageUrl && (<img src={imageUrl}alt={property.title} className="card_image"/>)}
                    <div className="card_titre">
                        {property.title}
                    </div>
                </article>
            </Link>
        </div>
    );
};

export default Card;


