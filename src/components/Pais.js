import React from 'react';
import flagBolivia from '../img/bolivia.png';
import flagPeru from '../img/peru.png';
import flagParaguay from '../img/paraguay.png';
import flagUsa from '../img/usa.png';

const Pais = ({ country }) => {
  if (country === 'Bolivia') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img src={flagBolivia} alt='Bandera Bolivia' className='pais-bandera' />
          <p className='pais-texto'>
            <strong>Bolivia</strong>
          </p>
        </div>
      </div>
    );
  } else if (country === 'Peru') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img src={flagPeru} alt='Bandera Peru' className='pais-bandera' />
          <p className='pais-texto'>
            <strong>Peru</strong>
          </p>
        </div>
      </div>
    );
  } else if (country === 'Paraguay') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img
            src={flagParaguay}
            alt='Bandera Paraguay'
            className='pais-bandera'
          />
          <p className='pais-texto'>
            <strong>Paraguay</strong>
          </p>
        </div>
      </div>
    );
  } else if (country === 'United States') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img src={flagUsa} alt='Bandera Usa' className='pais-bandera' />
          <p className='pais-texto'>
            <strong>United States</strong>
          </p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Pais;
