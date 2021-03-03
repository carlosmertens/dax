import React from 'react';
import { ReactComponent as WhatsAppLogo } from '../img/whatsapp-icon.svg';

const WhatsApp = () => {
  return (
    <div className='fixed-bottom d-flex justify-content-end'>
      <a
        className='p-3'
        href='https://api.whatsapp.com/send?phone=4917677200357&text=Hola!'>
        <WhatsAppLogo />
      </a>
    </div>
  );
};

export default WhatsApp;
