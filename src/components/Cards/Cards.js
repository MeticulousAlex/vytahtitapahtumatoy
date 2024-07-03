import './Cards.css';

function Cards({language}){
    return(
        <ul className='cards'>
            <h2 id='services' className='cards__header'>—— &ensp; {language ==='fi' ? 'Meidän palvelut' : 'Our services'} &ensp; ——</h2>
            <div className='cards__container'>
                <li className='cards__card cards__card_first'>
                    <div className='cards__icon-container'>
                        <p className="notranslate material-symbols-outlined ">star</p>
                        <p className="notranslate material-symbols-outlined">star</p>
                    </div>
                    <div className='cards__card-title-container'><p className='cards__card-title'>{language === 'fi' ? 'Tilaisuuden Suunnittelupaketti' : 'Event planning package'}</p></div>
                    <ul className='cards__card-description-list'>
                        <li className='cards__card-description'>{language === 'fi' ? 'Kattava suunnittelu seminaareihin, kokouksiin ja vuosijuhliin.' : 'Comprehensive planning for seminars, meetings and anniversaries'}</li>
                        <li className='cards__card-description'>{language === 'fi' ? 'Sisältää tilat, äänentoiston, cateringin ja tarvittavat esiintyjät.' : 'Includes facilities, sound system, catering and necessary performers'}</li>
                        <li className='cards__card-description'>{language === 'fi' ? 'Räätälöity juuri kyseisen tapahtuman tarpeisiin.' : 'Tailored specifically to the needs of the events in question'}</li>
                    </ul>
                </li>
                <li className='cards__card cards__card_second'>
                    <div className='cards__icon-container'>
                        <p className="notranslate material-symbols-outlined">star</p>
                        <p className='cards__star-chip'>&#8210;</p>
                        <p className='cards__star-chip'>&#8210;</p>
                        <p className='cards__star-chip'>&#8210;</p>
                        <p className='cards__star-chip'>&#8210;</p>
                        <p className='cards__star-chip'>&#8210;</p>
                    </div>
                    <div className='cards__card-title-container'><p className='cards__card-title'>Catering Deluxe</p></div>
                    <ul className='cards__card-description-list'>
                        <li className='cards__card-description'>{language === 'fi' ? 'Laadukas catering-palvelu monipuolisella ruokavaihtoehdolla.' : 'High quality catering service with a wide variety of food options.'}</li>
                        <li className='cards__card-description'>{language === 'fi' ? 'Sopii kaikenlaisiin tilaisuuksiin, aina kokouksista iltajuhliin.' : 'Suitable for all kinds of occasions, from meetings to evening parties.'}</li>
                        <li className='cards__card-description'>{language === 'fi' ? 'Huolellisesti suunniteltu tarjoilu pienille ja keskisuurille yrityksille.' : 'Carefully designed catering for small and medium-sized businesses.'}</li>
                    </ul>
                </li>
                <li className='cards__card cards__card_third'>
                    <div className='cards__icon-container'><div className='cards__logo-container'><div className='cards__logo'></div></div></div>
                    <div className='cards__card-title-container'><p className='cards__card-title'>{language === 'fi' ? 'Kulttuurin Mestari - Ohjelmakokonaisuus' : 'Master of Culture - Programme package'}</p></div>
                    <ul className='cards__card-description-list'>
                        <li className='cards__card-description'>{language === 'fi' ? 'Ainutlaatuinen ohjelmapaketti paikalliskulttuurin rikastuttamiseksi.' : 'A unique package of programmes to enrich local culture.'}</li>
                        <li className='cards__card-description'>{language === 'fi' ? 'Tarjoaa esityksiä laulajilta, koomikoilta ja juontajilta.' : 'Offers performances by singers, comedians and presenters.'}</li>
                        <li className='cards__card-description' >{language === 'fi' ? 'Täydellinen valinta luomaan unohtumattomia tapahtumia yrityksille.' : 'The perfect choice to create unforgettable events for businesses.'}</li>
                    </ul>
                </li>
            </div>
        </ul>
    )
}

export default Cards;