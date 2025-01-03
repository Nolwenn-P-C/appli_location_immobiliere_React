import React from 'react';
import { Link } from 'react-router-dom';

import './error.css';

const Error = () => {
    return (
        <div className="container">
            <h1 className='titre-erreur'>404</h1>
            <p className='texte-error'>Oups! La page que vous demandez n'existe pas.</p>
            <p ><Link to="/" className='redirection-error'>Retourner sur la page d’accueil</Link></p>
        </div>
    );
};

export default Error;
