import React from 'react';
import LOGO from "/LOGO.png";

import './footer.css';

const Footer = () => {
    return (
        <>
        <footer className="conteneur-footer">
            <img className="logo-footer" src={LOGO} alt="logo de l'agence Kasa" />
            <div className='footer-paragraphe'>
                <p>© 2020 Kasa. All <span className="footer-ligne">rights reserved</span></p>
            </div>
        </footer>
    </>
    );
};

export default Footer;