import './header.css';
import { Link } from 'react-router-dom';
import LOGO from "/LOGO.png";

import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="enteteConteneur">
                <img className="logo" src={LOGO} alt="logo de l'agence Kasa" />
                <nav>
                    <ul>
                        <li><Link to="/home">Accueil</Link></li>
                        <li><Link to="/service">A Propos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
