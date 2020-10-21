import React from 'react';

import { connect } from 'react-redux';

import usa from '../img/usa.png';
import bolivia from '../img/bolivia.png';
import peru from '../img/peru.png';
import paraguay from '../img/paraguay.png';
import mapa from '../img/mapaDAX.png';

const Contacto = ({ idioma }) => (
  <div className='container-fluid contacto-contenido'>
    <div className='container contacto-title'>
      <h1>
        <strong>{idioma.contacto.titulo}</strong>
      </h1>
    </div>

    <div className='container contacto-contenido'>
      <div className='row align-items-center'>
        <div className='col-md'>
          <div className='contacto-texto'>
            <p className='contacto-texto'>{idioma.contacto.contenido}</p>
            <p className='contacto-texto1'>{idioma.contacto.contenido2}</p>
          </div>
          <div className='contacto-country row'>
            <div className='contacto-grupo col-md'>
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
            <div className='contacto-grupo col-md'>
              <img src={bolivia} alt='Bandera Bolivia' />
              <h4>{idioma.contacto.bolivia.nombre}</h4>
              <a className='contacto-email' href='mailto:fabiola@daxparts.com'>
                {idioma.contacto.bolivia.email}
              </a>
              <br />
              <a className='contacto-telefono' href='tel:+59167898045'>
                {idioma.contacto.bolivia.telefono}
              </a>
            </div>
          </div>

          <div className='contacto-grupo row'>
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
            <div className='contacto-grupo col-md'>
              <img src={paraguay} alt='Bandera Paraguay' />
              <h4>{idioma.contacto.paraguay.nombre}</h4>
              <a className='contacto-email' href='mailto:ventaspy@daxparts.com'>
                {idioma.contacto.paraguay.email}
              </a>
              <br />
              <a className='contacto-telefono' href='tel:+59167898045'>
                {idioma.contacto.paraguay.telefono}
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
);

function mapStateToProps(state) {
  return {
    idioma: state.idioma,
  };
}

export default connect(mapStateToProps, null)(Contacto);
