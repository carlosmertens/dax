import React from 'react';
import { ReactComponent as WhatsAppLogo } from '../img/whatsapp-icon.svg';
// import { FaWhatsappSquare } from 'react-icons/fa';

const WhatsApp = () => {
  return (
    <div className='fixed-bottom d-flex justify-content-end'>
      <a
        className='p-3'
        href='https://api.whatsapp.com/send?phone=4917677200357&text=Hola!'>
        {/* <FaWhatsappSquare size='60' color='#25D366' /> */}
        <WhatsAppLogo />
      </a>
    </div>
  );
};

export default WhatsApp;
