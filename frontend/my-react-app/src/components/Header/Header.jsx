import { NavLink } from 'react-router-dom';
import LOGO from "/LOGO.png";
import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className='header-conteneur'>
            <header className="enteteConteneur">
                <img className="logo-header" src={LOGO} alt="logo de l'agence Kasa" />
                <nav>
                    <ul>
                        <li><NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink></li>
                        <li><NavLink to="/apropos" className={({ isActive }) => isActive ? 'active' : ''}>A Propos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
