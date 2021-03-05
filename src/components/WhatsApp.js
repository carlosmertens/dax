import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as WhatsAppLogo } from '../img/whatsapp-icon.svg';

const WhatsApp = () => {
  const country = useSelector((state) => state.country);

  let showIcon = '';
  let phoneNumber = '';
  if (country === 'Bolivia') {
    phoneNumber = '59167898045';
  } else if (country === 'Peru') {
    phoneNumber = '51989003538';
  } else if (country === 'Paraguay') {
    phoneNumber = '595985686232';
  } else {
    showIcon = 'd-none';
  }
  return (
    <div className={`fixed-bottom d-flex justify-content-end `}>
      <a
        id='whatsapp'
        className={`p-3 ${showIcon}`}
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola!`}>
        <WhatsAppLogo />
      </a>
    </div>
  );
};

export default WhatsApp;
