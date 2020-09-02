import React from 'react';

const Hacemos = ({ idioma }) => (
  <div className='container-fluid hacemos'>
    <div className='container hacemos-titulo'>
      <h1>
        <strong>{idioma.hacemos.titulo}</strong>
      </h1>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-lg'>
          <p className='hacemos-texto'>{idioma.hacemos.contenido}</p>
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

export default Hacemos;