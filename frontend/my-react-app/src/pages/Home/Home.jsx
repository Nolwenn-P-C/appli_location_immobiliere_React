import React, { useEffect, useState } from 'react';
import { API } from '@/_services/caller.service';
import './home.css';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API.APIProprietes()
            .then(res => {
                setProperties(res);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Erreur lors de la récupération des propriétés :", err);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='home'>
            {isLoading ? (
                <div>Chargement...</div>
            ) : (
                <div className="home-conteneur">
                    <div className="titre-conteneur-home">
                        <div className="image-titre-home"></div>
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                    <div className="home-affichage-photos">
                        {properties.map((property, id) => (
                            <div key={id} className="conteneur-logements">
                                <a href={`/fiche-logement/${property.id}`} className="card_lien">
                                    <article className="card_article">
                                        {property.pictures && property.pictures[0] && (
                                            <img
                                                src={property.pictures[0]}
                                                alt={property.title}
                                                className="card_image"
                                            />
                                        )}
                                        <div className="card_titre">{property.title}</div>
                                    </article>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
