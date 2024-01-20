import './Promo.css';
import logo from '../../images/logo_transparent.png'

function Promo(){
    return(
        <div className='promo'>
            <img className='promo__logo' src={logo}/>
            <h1 className='promo__title'>VY TÄHTITAPAHTUMAT OY</h1>
            <p className='promo__caption'>Jokainen päivä on syy juhlia</p>
        </div>
    )
}

export default Promo;