import React from 'react';

import { connect } from 'react-redux';

const Empresa = ({ idioma }) => (
  <div className='somos-contenido'>
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
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    idioma: state.idioma,
  };
}

export default connect(mapStateToProps, null)(Empresa);
