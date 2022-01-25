import React from 'react';
import { useRef } from 'react/cjs/react.development';
import './card.css'

const CardAllergies = ({ onclick }) => {

    const handleClick = (props) => {
        let tmp = {
            allergies: []
        }

        allCheck.current.forEach(element => {
            if (element.checked) {
                tmp.allergies.push(element.value)
            }
        });
        onclick(props, tmp)
    }

    const allCheck = useRef([])

    const addCheck = (el) => {
        if (el && !allCheck.current.includes(el)) {
            allCheck.current.push(el)
        }
    }

    const preventFunc = e => e.preventDefault()

    return (
        <div className='card-container'>
            <h3>As-tu des allergies ?</h3>
            <p className='card-title'>Choix multiples</p>

            <form onSubmit={preventFunc}>
                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="milk" value='Lait' id="milk" />
                    <label htmlFor="milk">Lait</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="pollen" value='Pollen' id="pollen" />
                    <label htmlFor="pollen">Pollen</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="nuts" value='Noix' id="nuts" />
                    <label htmlFor="nuts">Noix</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="egg" value='Oeufs' id="egg" />
                    <label htmlFor="egg">Oeufs</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="seafood" value='Fruit de mer' id="seafood" />
                    <label htmlFor="seafood">Fruit de mer</label>
                </div>
            </form>
            <button className='card-btn' onClick={() => handleClick(2)}>précédent</button>
            <button className='card-btn' onClick={() => handleClick(4)}>VALIDER</button>
        </div>
    );
};

export default CardAllergies;