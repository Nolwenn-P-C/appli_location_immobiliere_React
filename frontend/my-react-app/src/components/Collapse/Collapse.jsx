import React, { useState } from 'react';

import './collapse.css';

const Collapse = ({ titre, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="collapse-titre">
                {titre}
                <i className="fa-solid fa-chevron-up collapse-icone"></i>
            </button>
            {isOpen && <div className="collapse-contenu">{children}</div>}
        </div>
    );
};

export default Collapse;
