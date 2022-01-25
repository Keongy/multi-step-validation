import step1 from '../../assets/stepIcons/healthy.svg'
import step2 from '../../assets/stepIcons/love.svg'
import step3 from '../../assets/stepIcons/allergy.svg'
import step4 from '../../assets/stepIcons/diet.svg'
import step5 from '../../assets/stepIcons/thumb.svg'
import './stepper.css'

const Stepper = (props) => {
    const { width } = props


    return (
        <div className='container'>
            <div className="icons">
                <img src={step1} alt="healthy" />
            </div>
            <div className="icons">
                <img src={step2} alt="healthy" />
            </div>
            <div className="icons">
                <img src={step3} alt="healthy" />
            </div>
            <div className="icons">
                <img src={step4} alt="healthy" />
            </div>
            <div className="icons">
                <img src={step5} alt="healthy" />
            </div>
            <div className="line" style={{ width: `${width}%` }}></div>
            <div className="underline"></div>
        </div>
    );
};

export default Stepper;