import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '@/_services/caller.service';

import Carrousel from '@/components/Carrousel/Carrousel';
import Collapse from '@/components/Collapse/Collapse';

import './fichelogement.css';

const FicheLogement = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        API.APIProprieteID(id)
            .then((data) => {
                setProperty(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError("Erreur lors du chargement des données");
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!property) {
        return <div>Propriété non trouvée</div>;
    }

    return (
        <div className="fiche-logement">
            <Carrousel images={property.pictures} />

            <div className="fiche-détails">
                <div className="détails-gauche">
                    <h1 className="titre">{property.title}</h1>
                    <p className="emplacement">{property.location}</p>
                    <div className="étiquettes">
                        {property.tags.map((tag, index) => (
                            <span key={index} className="étiquette">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="détails-droite">
                    <div className="hôte">
                        <span className="nom-hôte">{property.host.name}</span>
                        <img src={property.host.picture} alt={property.host.name} className="photo-hôte" />
                    </div>
                    <div className="évaluation">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={`étoile ${i < property.rating ? 'remplie' : ''}`}>★</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="sections-reduites">
                <Collapse title="Description">
                    <p>{property.description}</p>
                </Collapse>

                <Collapse title="Équipements">
                    <ul>
                        {property.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
};

export default FicheLogement;
