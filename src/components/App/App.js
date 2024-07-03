import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Popup from '../Popup/Popup';
import Promo from '../Promo/Promo';
import Cards from '../Cards/Cards';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

function App() {

  const [language, setLanguage] = React.useState('fi');
  const [screenSize, setScreenSize] = React.useState();
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);

  function handleResize(){
    setScreenSize(window.screen.width);
  }

  function handlePopupOpen(){
    setIsMenuOpened(false);
    setIsPopupOpened(true);
    localStorage.setItem('advert', 'true');
  }

  React.useEffect(() => {
    const preloadedLanguage = localStorage.getItem('lang');
    preloadedLanguage ? setLanguage(preloadedLanguage) : setLanguage('fi');
    handleResize();
    setTimeout(handlePopupOpen, 15000);
  },[])

  window.onresize = handleResize;

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} screenSize={screenSize} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>
      <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} language={language} setLanguage={setLanguage}/>
      <Popup isPopupOpened={isPopupOpened} setIsPopupOpened={setIsPopupOpened} language={language}/>
      <Promo language={language}/>
      <About language={language} screenSize ={screenSize}/>
      <Cards language={language}/>
      <Contacts language={language}/>
      <Footer/>
    </div>
  );
}

export default App;
