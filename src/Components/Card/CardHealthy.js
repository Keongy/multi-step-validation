import React, { useState } from 'react';
import './card.css'

const CardHealthy = ({ onclick }) => {
    const [healthy, setHealthy] = useState({
        healthy: ''
    });

    const healthyLabel = {
        nothing: 'Pas de régime en particulier',
        omnivorous: 'Omnivore',
        vegetarian: 'Végétarien',
        vegan: 'Vegan'
    }

    const handleClick = (props) => {
        onclick(props, healthy)
    }

    const handleChange = (e) => {
        setHealthy({ healthy: e.target.value })
    }

    const preventFunc = (e) => e.preventDefault()

    return (
        <div className='card-container'>
            <h3 className='card-title'>Quelle est ton régime alimentaire ?</h3>
            <form onSubmit={preventFunc}>
                <div className='form-bg'>
                    <input
                        type="radio"
                        name="healthy"
                        id="nothing"
                        value={healthyLabel.nothing}
                        onChange={handleChange}
                    />
                    <label htmlFor="nothing">{healthyLabel.nothing}</label>
                </div>
                <div className='form-bg'>
                    <input
                        type="radio"
                        name="healthy"
                        id="omnivorous"
                        value={healthyLabel.omnivorous}
                        onChange={handleChange}
                    />
                    <label htmlFor="omnivorous">{healthyLabel.omnivorous}</label>
                </div>
                <div className='form-bg'>
                    <input
                        type="radio"
                        name="healthy"
                        id="vegetarian"
                        value={healthyLabel.vegetarian}
                        onChange={handleChange}
                    />
                    <label htmlFor="vegetarian">{healthyLabel.vegetarian}</label>
                </div>
                <div className='form-bg'>
                    <input
                        type="radio"
                        name="healthy"
                        id="vegan"
                        value={healthyLabel.vegan}
                        onChange={handleChange}
                    />
                    <label htmlFor="vegan">{healthyLabel.vegan}</label>
                </div>
                <button className='card-btn' onClick={() => handleClick(0)}>précédent</button>
                <button className='card-btn' onClick={() => handleClick(2)}>VALIDER</button>
            </form>
        </div>
    );
};

export default CardHealthy;