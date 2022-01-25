import React, { useRef } from 'react';
import './card.css'

const CardLove = ({ onclick }) => {

    const handleClick = (props) => {
        let tmp = {
            love: []
        }

        allCheck.current.forEach(element => {
            if (element.checked) {
                tmp.love.push(element.value)
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

    const preventFunc = (e) => {
        e.preventDefault()

    }

    return (
        <div className='card-container'>
            <h3 className='card-title'>Quelles sont  tes cuisines préférés ?</h3>

            <form onSubmit={preventFunc}>
                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="italy" id="italy" value='Italienne' />
                    <label htmlFor="italy">Italienne</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="japanese" id="japanese" value='Japonaise' />
                    <label htmlFor="japanese">Japonaise</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="india" id="india" value='Indienne' />
                    <label htmlFor="india">Indienne</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="thai" id="thai" value='Thaïlandaise' />
                    <label htmlFor="thai">Thaïlandaise</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="french" id="french" value='Française' />
                    <label htmlFor="french">Française</label>
                </div>

                <div className='form-bg'>
                    <input ref={addCheck} type="checkbox" name="chinese" id="chinese" value='Chinoise' />
                    <label htmlFor="chinese">Chinoise</label>
                </div>

            </form>
            <button className='card-btn' onClick={() => handleClick(1)}>précédent</button>
            <button className='card-btn' onClick={() => handleClick(3)}>VALIDER</button>
        </div>
    );
};

export default CardLove;