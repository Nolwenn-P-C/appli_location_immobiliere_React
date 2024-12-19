import React from 'react';
import imageEnteteHome from "/imageEnteteHome.png";

import './banner.css'


const Banner = () => {
    return (
        <div className="image-conteneur">
            <img src={imageEnteteHome} alt="océan évasion" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;