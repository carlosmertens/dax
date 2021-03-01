import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import WhatsApp from '../components/WhatsApp';

const Empresa = () => {
  const idioma = useSelector((state) => state.idioma);
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
        <WhatsApp />
      </div>
    </React.Fragment>
  );
};

export default Empresa;
