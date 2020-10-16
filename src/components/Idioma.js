import React from 'react';

const Idioma = ({ language, handleLanguage }) => {
  return (
    <select className='btn btn-idioma' value={language} onChange={handleLanguage}>
      <option>Español</option>
      <option>English</option>
    </select>
  );
};

export default Idioma;
