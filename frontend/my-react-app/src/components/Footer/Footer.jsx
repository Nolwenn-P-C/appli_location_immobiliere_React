import './footer.css';

import React from 'react';
import LOGO from "/LOGO.png";

const Footer = () => {
    return (
        <>
        <footer className="conteneur-footer">
            <img className="logo-footer" src={LOGO} alt="logo de l'agence Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    </>
    );
};

export default Footer;