import React from 'react';
import { Helmet } from 'react-helmet';

const Empresa = ({ idioma }) => (
  <div className='somos-contenido'>
    <Helmet>
      <title>DaxParts | Empresa</title>
    </Helmet>
    <div className='container somos-titulo'>
      <h1>
        <strong>{idioma.empresa.titulo}</strong>
      </h1>
    </div>

    <div className='container somos-texto'>
      <p>{idioma.empresa.contenido}</p>
      <br />
      <p>{idioma.empresa.contenido2}</p>
      <br />
      <p>{idioma.empresa.contenido3}</p>
      <br />
      <p>{idioma.empresa.contenido4}</p>
      <br />
      <p>{idioma.empresa.contenido5}</p>
      <br />
    </div>
  </div>
);

export default Empresa;
