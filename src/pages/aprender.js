import React from 'react';

import { Helmet } from 'react-helmet';

// import { connect } from 'react-redux';

const Aprender = ({ idioma }) => (
  <div className='container-fluid hacemos'>
    <Helmet>
      <title>DaxParts | Aprender</title>
    </Helmet>
    <div className='container hacemos-titulo'>
      <h1>
        <strong>{idioma.aprender.titulo}</strong>
      </h1>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-lg'>
          <p className='hacemos-texto'>{idioma.aprender.contenido}</p>
        </div>
        <div className='col-lg'>
          <div className='dax-video embed-responsive embed-responsive-16by9'>
            <iframe
              className='embed-responsive-item'
              title='Venta de Repuestos DAX'
              src='https://www.youtube.com/embed/4jnCVogNCtc'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Aprender;

// function mapStateToProps(state) {
//   return {
//     idioma: state.idioma,
//   };
// }

// export default connect(mapStateToProps, null)(Aprender);
