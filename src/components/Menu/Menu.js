import './Menu.css';
import globe from '../../images/globe.png'

function Menu({isMenuOpened, setIsMenuOpened, language, setLanguage}){

    function handleForward(){
        setIsMenuOpened(false);
    }

    function handleLanguageChange(e){
        const isFinnish = (e.target.classList.value.includes('language_fi'));
        isFinnish ? setLanguage('fi') : setLanguage('en');
        localStorage.setItem('lang', isFinnish ? 'fi' : 'en');
    }

    document.body.style.cssText = isMenuOpened ? 'position: fixed; overflow-y: scroll' : 'position: static; overflow-y: auto';

    return(
        <section className={isMenuOpened ? 'menu-container menu-container_opened' : 'menu-container'}>
                <div className="menu__background" onClick={() => setIsMenuOpened(false)}></div>
                <div className={isMenuOpened ? 'menu__content menu__content_opened' : 'menu__content'}>
                    <div className='menu__link-list'>
                        <a href='#about' className='menu__link' onClick={handleForward}>{language === 'fi' ? 'Meistä' : 'About us'}</a>
                        <a href='#services' className='menu__link' onClick={handleForward}>{language === 'fi' ? 'Meidän palvelut' : 'Our services'}</a>
                        <a href='#contacts' className='menu__link' onClick={handleForward}>{language === 'fi' ? 'Yhteystiedot' : 'Contacts'}</a>
                        <div className='menu__link menu__link_language'>
                            <img className='menu__language-icon' src={globe} alt='language-menu'/>
                            <p className={language === 'fi' ? 'menu__language menu__language_fi menu__language_underlined' : 'menu__language menu__language_fi'} onClick={handleLanguageChange}>FI</p>
                            <p className={language === 'en' ? 'menu__language menu__language_en menu__language_underlined' : 'menu__language menu__language_en'} onClick={handleLanguageChange}>EN</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Menu;