import React from 'react';

const Somos = ({ idioma }) => (
  <div className='somos-contenido'>
    <div className='container somos-titulo'>
      <h1>
        <strong>{idioma.somos.titulo}</strong>
      </h1>
    </div>

    <div className='container somos-texto'>
      <p>{idioma.somos.contenido}</p>
      <h2>{idioma.somos.titulo2}</h2>
      <p>{idioma.somos.contenido2}</p>
    </div>
  </div>
);

export default Somos;