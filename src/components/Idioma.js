import React from 'react';

const Idioma = ({ language, onChangeLanguage }) => {
  return (
    <select
      className='btn btn-idioma'
      value={language}
      onChange={onChangeLanguage}>
      <option>Español</option>
      <option>English</option>
    </select>
  );
};

export default Idioma;
