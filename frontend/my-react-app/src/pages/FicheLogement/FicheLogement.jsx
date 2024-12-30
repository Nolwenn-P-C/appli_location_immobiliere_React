import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '@/_services/caller.service';

import Carrousel from '@/components/Carrousel/Carrousel';
import Collapse from '@/components/Collapse/Collapse';

import './fichelogement.css';

const FicheLogement = () => {
    const { idlogement } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API.APILogementID(idlogement)
            .then((data) => {
                if (!data) {
                    navigate('/error'); 
                    return; 
                }
                setLogement(data); 
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                navigate('/error'); 
            });
    }, [idlogement, navigate]);

    return (
        <div className="fiche-logement-conteneur">
            {isLoading ? (
                <div>Chargement...</div>
                ) : (
                logement && (
                    <>
                        <Carrousel images={logement.pictures} />

                        <div className="fiche-details">
                            <div className="details-gauche">
                                <h1 className="titre">{logement.title}</h1>
                                <div className="emplacement">
                                    {logement.location.split(' - ').reverse().join(' - ')}
                                </div>
                                <div className="etiquettes">
                                    {logement.tags.map((tag, index) => (
                                        <span key={index} className="etiquette">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="details-droite">
                                <div className="hote">
                                    <div className="nom-hote">
                                        {logement.host.name.split(' ').map((part, index) => (
                                            <span key={index}>{part}<br /></span>
                                        ))}
                                    </div>

                                    <img
                                        src={logement.host.picture}
                                        alt={logement.host.name}
                                        className="photo-hote"
                                    />
                                </div>
                                <div className="evaluation">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span
                                            key={i}
                                            className={`etoile ${i < logement.rating ? 'remplie' : ''}`}
                                        >
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="sections-reduites">
                            <Collapse titre="Description">
                                <p>{logement.description}</p>
                            </Collapse>

                            <Collapse titre="Équipements">
                                <ul>
                                    {logement.equipments.map((equipement, index) => (
                                        <li key={index}>{equipement}</li>
                                    ))}
                                </ul>
                            </Collapse>
                        </div>
                    </>
                )
            )}
        </div>
    );
};

export default FicheLogement;
