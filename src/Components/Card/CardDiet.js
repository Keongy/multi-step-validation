import React, { useState } from 'react';
import './card.css'

const CardDiet = ({ onclick }) => {
    const [diet, setDiet] = useState({
        diet: {
            love: '',
            hate: ''
        }
    });

    const handleClick = (props) => {
        onclick(props, diet)
    }

    const handleChange = (e) => {
        const name = e.target.attributes.name.nodeValue
        const text = e.target.value

        if (name === 'love') {
            setDiet({
                diet: {
                    ...diet.diet,
                    love: text
                }
            })
        } else {
            setDiet({
                diet: {
                    ...diet.diet,
                    hate: text
                }
            })
        }
    }

    const preventFunc = e => e.preventDefault()

    return (
        <div className='card-container'>
            <h3 className='card-title'>Parle-nous des aliments que tu préfères et que tu détestes ?</h3>
            <p>Tes aliments préférés séparés par une virgule:</p>
            <form onSubmit={preventFunc}>
                <textarea name="love" id="" cols="30" rows="5" placeholder='Un ou plusieurs, si tu en as' onChange={handleChange} value={diet.love}></textarea>

                <p>Les aliments que tu ne supportes pas, séparés par une virgule:</p>

                <textarea name="hate" id="" cols="30" rows="5" placeholder='Un ou plusieurs, si tu en as' onChange={handleChange} value={diet.hate}></textarea>
            </form>
            <button className='card-btn' onClick={() => handleClick(3)}>précédent</button>
            <button className='card-btn' onClick={() => handleClick(5)}>VALIDER</button>
        </div>
    );
};

export default CardDiet;