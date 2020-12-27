import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import usa from '../img/usa.png';
import bolivia from '../img/bolivia.png';
import peru from '../img/peru.png';
import mapa from '../img/mapaDAX.png';

const Contacto = () => {
  const idioma = useSelector((state) => state.idioma);
  return (
    <React.Fragment>
      <div className='container-fluid contacto-contenido'>
        <Helmet>
          <title>DaxParts | Contacto</title>
        </Helmet>
        <div className='container contacto-title'>
          <h1>
            <strong>{idioma.contacto.titulo}</strong>
          </h1>
        </div>
        <div className='container contacto-contenido'>
          <div className='row align-items-center'>
            <div className='col-md'>
              <div className='contacto-texto'>
                <p className='contacto-texto text-justify'>
                  {idioma.contacto.contenido}
                </p>
                <p className='contacto-texto1 text-justify pb-4'>
                  {idioma.contacto.contenido2}
                </p>
              </div>
              <div className='contacto-country row'>
                <div className='contacto-grupo mb-4 col-md'>
                  <img src={usa} alt='Bandera Usa' />
                  <h4>{idioma.contacto.usa.nombre}</h4>
                  <a className='contacto-email' href='mailto:dax@daxparts.com'>
                    {idioma.contacto.usa.email}
                  </a>
                  <br />
                  <a className='contacto-telefono' href='tel:+59167898045'>
                    {idioma.contacto.usa.telefono}
                  </a>
                </div>
                <div className='contacto-grupo mb-4 col-md'>
                  <img src={bolivia} alt='Bandera Bolivia' />
                  <h4>{idioma.contacto.bolivia.nombre}</h4>
                  <a
                    className='contacto-email'
                    href='mailto:fabiola@daxparts.com'>
                    {idioma.contacto.bolivia.email}
                  </a>
                  <br />
                  <a className='contacto-telefono' href='tel:+59167898045'>
                    {idioma.contacto.bolivia.telefono}
                  </a>
                </div>
              </div>
              <div className='contacto-grupo mb-4 row'>
                <div className='contacto-grupo col-md'>
                  <img src={peru} alt='Bandera Peru' />
                  <h4>{idioma.contacto.peru.nombre}</h4>
                  <a className='contacto-email' href='mailto:em@daxparts.com'>
                    {idioma.contacto.peru.email}
                  </a>
                  <br />
                  <a className='contacto-telefono' href='tel:+59167898045'>
                    {idioma.contacto.peru.telefono}
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='contacto-mapa'>
                <img src={mapa} className='img-fluid' alt='Mapa' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacto;
