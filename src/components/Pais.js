import React from 'react';
import flagBolivia from '../img/bolivia.png';
import flagPeru from '../img/peru.png';
import flagParaguay from '../img/paraguay.png';
import flagUsa from '../img/usa.png';

const Pais = (props) => {
  // Logica para seleccionar pais del usuario
  // Logic to display the user's country
  if (props.country === 'Bolivia') {
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
  } else if (props.country === 'Peru') {
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
  } else if (props.country === 'Paraguay') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img src={flagParaguay} alt='Bandera Paraguay' className='pais-bandera' />
          <p className='pais-texto'>
            <strong>Paraguay</strong>
          </p>
        </div>
      </div>
    );
  } else if (props.country === 'United States') {
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