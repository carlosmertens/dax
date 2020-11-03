import React from 'react';

import { Helmet } from 'react-helmet';

// import { connect } from 'react-redux';

const Empresa = (props) => (
  <div className='somos-contenido'>
    <Helmet>
      <title>DaxParts | Empresa</title>
    </Helmet>
    <div className='container somos-titulo'>
      <h1>
        <strong>{props.idioma.empresa.titulo}</strong>
      </h1>
    </div>

    <div className='container somos-texto'>
      <p>{props.idioma.empresa.contenido}</p>
      <br />
      <p>{props.idioma.empresa.contenido2}</p>
      <br />
      <p>{props.idioma.empresa.contenido3}</p>
      <br />
      <p>{props.idioma.empresa.contenido4}</p>
      <br />
      <p>{props.idioma.empresa.contenido5}</p>
      <br />
    </div>
  </div>
);

export default Empresa;

// function mapStateToProps(state) {
//   return {
//     idioma: state.idioma,
//   };
// }

// export default connect(mapStateToProps, null)(Empresa);
