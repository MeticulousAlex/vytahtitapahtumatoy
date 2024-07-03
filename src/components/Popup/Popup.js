import './Popup.css';

function Popup({
    isPopupOpened,
    setIsPopupOpened,
    language
  }) {
    return (
      <section className={`popup ${isPopupOpened ? 'popup_opened' : ''}`}>
        <div className='popup__background' onClick={()=> setIsPopupOpened(false)}></div>
        <div className="popup__container">
          <div className="popup__content">
            <button
              aria-label="Закрыть"
              className="popup__button popup__button_type_cancel"
              type="button"
              onClick={() => setIsPopupOpened(false)}
            />
            <h2 className='popup__heading'>{language === 'fi' ? 'Tervetuloa päätösjuhliin!' : 'Welcome to the closing party!'}</h2>
            <pre className='popup__text-message'>{language === 'fi' ? 'Vy-vuoden viimeinen yhteinen tilaisuus eli päätösjuhla on maanantaina 22.4.2024 klo 12.15 alkaen Lasipalatsissa!' : "The last joint event of the Vy-year, the closing party, will take place on Monday 22.4.2024 at 12.15 pm at the Lasipalatsi!"}</pre>
          </div>
        </div>
      </section>
    );
  }

  export default Popup;