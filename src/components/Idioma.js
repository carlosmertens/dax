import React from 'react';

const Idioma = ({ language, onChangeLanguage }) => {
  return (
    <React.Fragment>
      <select
        className='btn btn-idioma'
        value={language}
        onChange={onChangeLanguage}>
        <option>Español</option>
        <option>English</option>
      </select>
      <style jsx='true'>
        {`
          .pais-idioma {
            margin-top: 15px;
          }
          .btn-idioma {
            font-size: 18px !important;
            height: 32px !important;
            border-radius: 15px !important;
            margin-top: 0px !important;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Idioma;
