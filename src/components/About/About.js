import './About.css';

function About({language, screenSize}){
    return(
        <div className='about'>
            <div className='about__header-container'><h2 className='about__header'>{screenSize < 769 ? '——' : ''}&ensp; {language === 'fi' ? 'Meistä' : 'About us'}&ensp; {screenSize < 769 ? '——' : ''}</h2></div>
            <p className='about__description'>{language === 'fi' ? 'Vy Tähtitapahtumat Oy on viiden henkilön nuori kasvuyritys, joka tarjoaa Etelä-Pohjanmaan alueella pk-yrityksille, jotka haluavat pitää vuosijuhlia, seminaareja, kokouksia ja muita juhlia. Tarjoamme asiakkaille erilaisia tapahtumapaketteja sen mukaan, kuinka monta henkilöä yrityksessä on. Pyrimme huomioimaan ekologisuuden toiminnassamme. Hotellien lisäksi paikalle tarvittaessa esiintyjät ja catering-palvelut. Meidän kanssamme tapahtumasi tulee unohtumaton!' : 'Vy Tähtitapahtumat Oy is a young growth company of five people, which provides services to SMEs in the South Ostrobothnia region that want to hold annual parties, seminars, meetings and other celebrations. We offer customers different event packages depending on the number of people in the company. We strive to take ecology into account in our activities. In addition to hotels, we also provide performers and catering services on site if required. With us, your event will be unforgettable!'}</p>
        </div>
    )
}

export default About;