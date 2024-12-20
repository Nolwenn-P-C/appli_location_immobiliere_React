import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '@/_services/caller.service';

import Carrousel from '@/components/Carrousel/Carrousel';
import Collapse from '@/components/Collapse/Collapse';

import './fichelogement.css';

const FicheLogement = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
                navigate('/error'); 
            });
    }, [id, navigate]);

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return null;
    }

    if (!property) {
        return <div>Propriété non trouvée</div>;
    }

    return (
        <div className="fiche-logement-conteneur">
            <Carrousel images={property.pictures} />

            <div className="fiche-details">
                <div className="details-gauche">
                    <h1 className="titre">{property.title}</h1>
                    <div className='emplacement'>
                        {property.location.split(' - ').reverse().join(' - ')}
                    </div>
                    <div className="etiquettes">
                        {property.tags.map((tag, index) => (
                            <span key={index} className="etiquette">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="details-droite">
                    <div className="hote">
                    <div className="nom-hote">
                        {property.host.name.split(' ').map((part, index) => (
                            <span key={index}>{part}<br /></span>
                        ))}
                    </div>

                        <img src={property.host.picture} alt={property.host.name} className="photo-hote" />
                    </div>
                    <div className="evaluation">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={`etoile ${i < property.rating ? 'remplie' : ''}`}>
                                <i className="fa-solid fa-star"></i>
                            </span>
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
