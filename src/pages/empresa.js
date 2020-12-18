import React from 'react';
import { Helmet } from 'react-helmet';

const Empresa = ({ idioma }) => {
  return (
    <React.Fragment>
      <div className='empresa-contenido'>
        <Helmet>
          <title>DaxParts | Empresa</title>
        </Helmet>
        <div className='container empresa-titulo'>
          <h1>
            <strong>{idioma.empresa.titulo}</strong>
          </h1>
        </div>

        <div className='container text-justify empresa-texto'>
          <p>{idioma.empresa.contenido}</p>
          <p>{idioma.empresa.contenido2}</p>
          <p>{idioma.empresa.contenido3}</p>
          <p>{idioma.empresa.contenido4}</p>
          <p>{idioma.empresa.contenido5}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Empresa;
