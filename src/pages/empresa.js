import React from 'react';
import { Helmet } from 'react-helmet';

const Empresa = ({ idioma }) => {
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
          title='Empresa SEO Google Tag Manager'
          src='https://www.googletagmanager.com/ns.html?id=GTM-WLPRK4K'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <div className='empresa-contenido'>
        <Helmet>
          {/* <!-- Google Tag Manager --> */}
          {<script>{googleTagManager}</script>}
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
      </div>
    </React.Fragment>
  );
};

export default Empresa;
