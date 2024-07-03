import './Promo.css';
import logo from '../../images/logo_transparent.png'

function Promo({language}){
    return(
        <div className='promo'>
            <img className='promo__logo' src={logo} alt='main-logo'/>
            <h1 className='promo__title'>VY TÄHTITAPAHTUMAT OY</h1>
            <p className='promo__caption' id='about'>{language === 'fi' ? 'Jokainen päivä on syy juhlia' : 'Every day is a reason to celebrate'}</p>
        </div>
    )
}

export default Promo;