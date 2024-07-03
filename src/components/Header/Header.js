import './Header.css';
import globe from '../../images/globe.png'

function Header({language, setLanguage, screenSize, isMenuOpened, setIsMenuOpened}){

    function handleLanguageChange(e){
        const isFinnish = (e.target.classList.value.includes('language_fi'));
        isFinnish ? setLanguage('fi') : setLanguage('en');
        localStorage.setItem('lang', isFinnish ? 'fi' : 'en');
    }
        return(
            <header className='header'>
                <nav className='header__navigation'>
                    <a className='header__navigation-link' href='#services'>{language === 'fi' ? 'Meidän palvelut' : 'Our services'}</a>
                    <a className='header__navigation-link' href='#about'>{language === 'fi' ? 'Meistä' : 'About us'}</a>
                    <a className='header__navigation-link' href='#contacts'>{language === 'fi' ? 'Yhteystiedot' : 'Contacts'}</a>
                </nav>
                <div className='header__language-toggle'>
                    <img className='header__language-icon' src={globe} alt='language'/>
                    <p className={language === 'fi' ? 'header__language header__language_fi header__language_underlined' : 'header__language header__language_fi'} onClick={handleLanguageChange}>FI</p>
                    <p className={language === 'en' ? 'header__language header__language_en header__language_underlined' : 'header__language header__language_en'} onClick={handleLanguageChange}>EN</p>
                </div>
                <button className="account-tab__menu-button" tabIndex="0" onClick={() => setIsMenuOpened(!isMenuOpened)} type='button'>
                        <span className={isMenuOpened ? 'account-tab__icon-bar account-tab__icon-bar_opened' : 'account-tab__icon-bar'}></span>
                        <span className={isMenuOpened ? 'account-tab__icon-bar account-tab__icon-bar_opened' : 'account-tab__icon-bar'}></span>
                        <span className={isMenuOpened ? 'account-tab__icon-bar account-tab__icon-bar_opened' : 'account-tab__icon-bar'}></span>
                </button>
            </header>
        )
}

export default Header;