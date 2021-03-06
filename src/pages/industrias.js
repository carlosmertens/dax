import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ReactComponent as Bulldozer } from '../img/bulldozer.svg';
import { ReactComponent as Crane } from '../img/crane.svg';
import { ReactComponent as Machine } from '../img/machine.svg';
import { ReactComponent as Page } from '../img/Page-1.svg';
import { ReactComponent as Harvester } from '../img/harvester.svg';
import { ReactComponent as Truck } from '../img/truck.svg';

const Industrias = () => {
  const idioma = useSelector((state) => state.idioma);
  return (
    <React.Fragment>
      <div className='container-fluid ofrecemos-contenido'>
        <Helmet>
          <title>DaxParts | Industrias</title>
        </Helmet>
        <div className='container ofrecemos-titulo'>
          <h1>
            <strong>{idioma.industrias.titulo}</strong>
          </h1>
        </div>

        <div className='container ofrecemos-subtitle'>
          <h4>{''}</h4>
        </div>

        <div className='container ofrecemos-contenido'>
          <div className='row ofrecemos-opciones align-items-center'>
            <div className='col-md'>
              <div className='container oferta'>
                <div className='row'>
                  <div className='col ofrecemos-icono'>
                    <Bulldozer />
                  </div>
                  <div className='col ofrecemos-texto'>
                    <p>
                      <span>
                        <strong>{idioma.industrias.span.a1}</strong>
                      </span>{' '}
                      {idioma.industrias.span.a2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='container oferta'>
                <div className='row'>
                  <div className='col ofrecemos-icono'>
                    <Crane />
                  </div>
                  <div className='col ofrecemos-texto'>
                    <p>
                      <span>
                        <strong>{idioma.industrias.span.b1}</strong>
                      </span>{' '}
                      {idioma.industrias.span.b2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='container oferta'>
                <div className='row'>
                  <div className='col ofrecemos-icono'>
                    <Page />
                  </div>
                  <div className='col ofrecemos-texto'>
                    <p>
                      <span>
                        <strong>{idioma.industrias.span.c1}</strong>
                      </span>{' '}
                      {idioma.industrias.span.c2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row ofrecemos-opciones align-items-center'>
            <div className='col-md'>
              <div className='container oferta'>
                <div className='row'>
                  <div className='col ofrecemos-icono'>
                    <Machine />
                  </div>
                  <div className='col ofrecemos-texto'>
                    <p>
                      <span>
                        <strong>{idioma.industrias.span.d1}</strong>
                      </span>{' '}
                      {idioma.industrias.span.d2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='container oferta'>
                <div className='row'>
                  <div className='col ofrecemos-icono'>
                    <Harvester />
                  </div>
                  <div className='col ofrecemos-texto'>
                    <p>
                      <span>
                        <strong>{idioma.industrias.span.e1}</strong>
                      </span>{' '}
                      {idioma.industrias.span.e2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='container oferta'>
                <div className='row'>
                  <div className='col ofrecemos-icono'>
                    <Truck />
                  </div>
                  <div className='col ofrecemos-texto'>
                    <p>
                      <span>
                        <strong>{idioma.industrias.span.f1}</strong>
                      </span>{' '}
                      {idioma.industrias.span.f2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Industrias;
