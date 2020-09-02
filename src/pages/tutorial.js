import React from 'react';
import { Link } from 'react-router-dom';

const Tutorial = ({ idioma }) => (
  <div className='container-fluid tutorial'>
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
        {/* === Columna 2 === */}
        <div className='col-sm'>
          <div className='container'>
            <div className='row'>
              <p>
                {idioma.tutorial.columna2Titulo} <br />
                <span>
                  {idioma.tutorial.columna2Texto} <br />
                  <Link to='/hacemos'>
                    <em className='tutorial-enlace'>
                      {idioma.tutorial.enlaceTutorial}
                    </em>
                  </Link>
                </span>
              </p>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col'>
                <iframe
                  width='121'
                  height='65'
                  title='Castellano'
                  src='https://www.youtube.com/embed/4jnCVogNCtc'></iframe>
              </div>
              <div className='col'>
                <span className='tutorial-video-texto'>Dax Castellano</span>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col'>
                <iframe
                  width='121'
                  height='65'
                  title='EnglishDax'
                  src='https://www.youtube.com/embed/L22Gk3eXE7I'></iframe>
              </div>
              <div className='col'>
                <span className='tutorial-video-texto'>Dax English</span>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col'>
                <iframe
                  width='121'
                  height='65'
                  title='Demo'
                  src='https://www.youtube.com/embed/j42UyjVCDuo'></iframe>
              </div>
              <div className='col'>
                <span className='tutorial-video-texto'>Demo</span>
              </div>
            </div>
          </div>
        </div>
        {/* === Columna 1 === */}
        <div className='col-sm'>
          <div className='container'>
            <div className='row'>
              <p>
                {idioma.tutorial.columna1Titulo} <br />
                <span>
                  {idioma.tutorial.columna1Texto} <br />
                  <Link to='/hacemos'>
                    <em className='tutorial-enlace'>
                      {idioma.tutorial.enlaceTutorial}
                    </em>
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <iframe
                  width='121'
                  height='65'
                  title='John Deere'
                  src='https://www.youtube.com/embed/FkRyowhMekU'></iframe>
              </div>
              <div className='col'>
                <span className='tutorial-video-texto'>John Deere</span>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col'>
                <iframe
                  width='121'
                  height='65'
                  title='Catarpillar'
                  src='src="https://www.youtube.com/embed/MaOpwIWJa0o"'></iframe>
              </div>
              <div className='col'>
                <span className='tutorial-video-texto'>Catarpillar</span>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col'>
                <iframe
                  width='121'
                  height='65'
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
  </div>
);

export default Tutorial;