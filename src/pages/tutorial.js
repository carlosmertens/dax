import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const Tutorial = () => {
  const idioma = useSelector((state) => state.idioma);
  return (
    <React.Fragment>
      <div className='container-fluid tutorial'>
        <Helmet>
          <title>DaxParts | Tutorial</title>
        </Helmet>
        <div className='container tutorial-titulo'>
          <h1>
            <strong>{idioma.tutorial.titulo}</strong>
          </h1>
        </div>
        <div className='container tutorial-subtitulo'>
          <p>{idioma.tutorial.descripcion}</p>
        </div>
        <div className='container tutorial-contenido'>
          <div className='row'>
            <div className='col-sm'>
              <div className='container'>
                <div className='row'>
                  <p>
                    {idioma.tutorial.columna2Titulo} <br />
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <iframe
                    className='embed-responsive-item'
                    title='Castellano'
                    src='https://www.youtube.com/embed/4jnCVogNCtc'></iframe>
                </div>
                <div className='col video-label'>
                  <span className=''>Dax Castellano</span>
                </div>
              </div>
            </div>
            <div className='col-sm'>
              <div className='container'>
                <div className='row'>
                  <p>
                    {idioma.tutorial.columna1Titulo} <br />
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <iframe
                    className='embed-responsive-item'
                    title='John Deere'
                    src='https://www.youtube.com/embed/FkRyowhMekU'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>John Deere</span>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <iframe
                    className='embed-responsive-item'
                    title='Catarpillar'
                    src='https://www.youtube.com/embed/MaOpwIWJa0o'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>Caterpillar</span>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <iframe
                    className='embed-responsive-item'
                    title='CASE'
                    src='https://www.youtube.com/embed/nApCi2Y8w7Y'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>CASE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tutorial;
