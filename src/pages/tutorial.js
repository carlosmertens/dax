import React from 'react';
import { Helmet } from 'react-helmet';

const Tutorial = ({ idioma }) => {
  const googleTagManager = (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-WLPRK4K');

  return (
    <React.Fragment>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          title='Tutoriales SEO Google Tag Manager'
          src='https://www.googletagmanager.com/ns.html?id=GTM-WLPRK4K'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <div className='container-fluid tutorial'>
        <Helmet>
          {/* <!-- Google Tag Manager --> */}
          {<script>{googleTagManager}</script>}
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
              {/* <div className='row'>
            <div className='col'>
              <iframe
                className='embed-responsive-item'
                title='EnglishDax'
                src='https://www.youtube.com/embed/L22Gk3eXE7I'></iframe>
            </div>
            <div className='col'>
              <span className='tutorial-video-texto'>Dax English</span>
            </div>
          </div> */}
              {/* <div className='row'>
            <div className='col'>
              <iframe
                className='embed-responsive-item'
                title='Demo'
                src='https://www.youtube.com/embed/j42UyjVCDuo'></iframe>
            </div>
            <div className='col'>
              <span className='tutorial-video-texto'>Demo</span>
            </div>
          </div> */}
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
