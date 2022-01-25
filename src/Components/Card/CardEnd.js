import './card.css'

const CardEnd = ({ onclick, data }) => {


    const handleClick = (props) => {
        onclick(props)
    }

    return (
        <div className='card-container'>
            <h1 className='card-title'>Bravissimo !</h1>

            <p>On peut mainstenant te proposer des plats en fonction de tes goûts !</p>
            <ul>
                <li>
                    <h2>Quelle est ton régime alimentaire ?</h2>
                    <p>{data.healthy}</p>
                    <hr />
                </li>
                <li>
                    <h2>Quelles sont tes cuisines préférés ?</h2>
                    {data.love.map((element, index) => {
                        return <p key={index}>{element}</p>
                    })}
                    <hr />
                </li>
                <li>
                    <h2>As-tu des allergies ?</h2>
                    {data.allergies.map((element, index) => {
                        return <p key={index}>{element}</p>
                    })}
                    <hr />
                </li>
                <li>
                    <h2>Parle-nous des aliments que tu préfères et que tu détestes ?</h2>
                    <p>Aliments préférés : {data.diet.love}</p>
                    <p>Aliments détestés : {data.diet.hate}</p>
                    <hr />
                </li>
            </ul>
            <button className='card-btn' onClick={() => handleClick(0)}>RETOUR</button>
        </div>
    );
};

export default CardEnd;