import React from 'react';
import Collapse from '@/components/Collapse/Collapse';
import { AProposTableau } from '@/_utils/AProposTableau'; 
import './apropos.css';

const APropos = () => {
    return (
        <div className="apropos-conteneur">
            <div className="image-titre-apropos"></div>
            <div className="collapse-conteneur-apropos">
                {AProposTableau.map((item, index) => (
                    <Collapse key={index} title={item.titre}>
                        <p>{item.contenu}</p>
                    </Collapse>
                ))}
            </div>
        </div>
    );
};

export default APropos;