import './Contacts.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import React from 'react';

function Contacts({language}){

    const coordinateList = [62.7875, 22.8655];
    
      return (
        <div className='contacts' id='contacts'>
            <h2 className='contacts__header'>—— &ensp; {language === 'fi' ? 'Yhteystiedot' : 'Contact us'} &ensp; ——</h2>
            <div className='contacts__data-container'>
                <ul className='contacts__info-list'>
                    <li className='contacts__info-element'>
                        <p className='contacts__text-row'>{language ==='fi' ? 'Osoite' : 'Address'}: <a className='contacts__link' href='https://www.google.com/maps/place/Yritt%C3%A4j%C3%A4ntie+2,+60100+Sein%C3%A4joki/@62.7875348,22.8632103,17z/data=!3m1!4b1!4m6!3m5!1s0x4687cb0a5e74a18b:0x5105a70d3a24dd59!8m2!3d62.7875324!4d22.8657852!16s%2Fg%2F11jsf363r6?entry=ttu' target='_blank' rel="noreferrer">Yrittäjäntie 2, 60100 Seinäjoki</a></p>
                        <p className='contacts__forward-icon'>&#8599;</p>
                        <a className='contacts__full-size-link' href='https://www.google.com/maps/place/Yritt%C3%A4j%C3%A4ntie+2,+60100+Sein%C3%A4joki/@62.7875348,22.8632103,17z/data=!3m1!4b1!4m6!3m5!1s0x4687cb0a5e74a18b:0x5105a70d3a24dd59!8m2!3d62.7875324!4d22.8657852!16s%2Fg%2F11jsf363r6?entry=ttu'> </a>
                    </li>
                    <li className='contacts__info-element contacts__info-element_hours'>
                        <p className='contacts__text-row'>{language === 'fi' ? 'Aukioloajat' : 'Working hours'}: 8.00 - 16.00</p>
                        <p className='contacts__forward-icon'>&#8599;</p>
                    </li>
                    <li className='contacts__info-element'>
                        <p className='contacts__text-row'>{language === 'fi' ? 'Puhelin' : 'Phone'}: <a className='contacts__link' href='tel:0401234678'>0401234678</a></p>
                        <p className='contacts__forward-icon'>&#8599;</p>
                        <a className='contacts__full-size-link' href='tel:0401234678'> </a>
                    </li>
                    <li className='contacts__info-element'>
                        <p className='contacts__text-row'>Email: <a className='contacts__link' href='mailto:VyTahtitapahtumatoy@seamk.fi'>VyTahtitapahtumatoy@seamk.fi</a></p>
                        <p className='contacts__forward-icon'>&#8599;</p>
                        <a className='contacts__full-size-link' href='mailto:VyTahtitapahtumatoy@seamk.fi'> </a>
                    </li>
                </ul>
                <p className='contacts__working-hours'>{language === 'fi' ? 'Aukioloajat' : 'Working hours'}: 8.00 - 16.00</p>
                <div className='contacts__map'>
                    <MapContainer center={coordinateList} zoom={15} scrollWheelZoom={true}>
                        <TileLayer
                            attribution=''
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        <Marker position={coordinateList}>
                            <Popup>
                            Yrittäjäntie 2
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
        
      )
}

export default Contacts;