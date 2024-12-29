import React, { useState } from 'react';

import './collapse.css';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="collapse-titre">
                {title}
                <i className="fa-solid fa-chevron-up collapse-icone"></i>
            </button>
            {isOpen && <div className="collapse-contenu">{children}</div>}
        </div>
    );
};

export default Collapse;
