import React from 'react';

const Empresa = ({ idioma }) => (
  <div className='somos-contenido'>
    <div className='container somos-titulo'>
      <h1>
        <strong>{idioma.empresa.titulo}</strong>
      </h1>
    </div>

    <div className='container somos-texto'>
      <p>{idioma.empresa.contenido}</p>
      <br/>
      {/* <h2>{idioma.somos.titulo2}</h2> */}
      <p>{idioma.empresa.contenido2}</p>
      <br/>
      <p>{idioma.empresa.contenido3}</p>
      <br/>
      <p>{idioma.empresa.contenido4}</p>
    </div>
  </div>
);

export default Empresa;