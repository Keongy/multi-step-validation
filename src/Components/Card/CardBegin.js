import React from 'react';
import './card.css'

const CardBegin = ({ onclick }) => {


    const handleClick = () => {
        onclick(1)
    }

    return (
        <div className='card-container'>
            <h1 className='card-title'>🍣 Aide-nous à ravir tes papilles 🌶️</h1>
            <button className='card-btn' onClick={handleClick}>COMMENCER</button>
        </div>
    );
};

export default CardBegin;