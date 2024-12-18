import React, { useEffect, useRef, useState } from 'react';
import { API } from '@/_services/caller.service';
import Card from '@/components/Card/Card';
import Image_entete from "/Image-entete.png";
import './home.css';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const flag = useRef(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (flag.current === false) {
            setIsLoading(true);
            API.APIPropriétés()
                .then(res => {
                    setProperties(res);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error("Erreur lors de la récupération des propriétés :", err);
                    setIsLoading(false);
                });
        }
        return () => flag.current = true;
    }, []);

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    return (
<div className='home'>
            <div className="home-conteneur">
                <div className="image-conteneur">
                    <img src={Image_entete} alt="océan évasion" />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className="home_grid with_padding">
                    {
                        properties.map((property, id) => (
                            <Card key={id} property={property} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
