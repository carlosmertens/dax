import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoCentro from '../img/logoCentro.png';
import iconVideos from '../img/IconVideos.png';
import openModal from '../actions/openModal';
import parteAction from '../actions/parteAction';
import Idioma from '../components/Idioma';
import Pais from '../components/Pais';
import Noparte from '../components/NoParte';

const Homepage = ({ idioma, language, onChangeLanguage }) => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const [cotizar, setCotizar] = useState(false);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (cotizar !== '') {
      setCotizar(true);
    }
  };

  return (
    <React.Fragment>
      {cotizar ? (
        <Redirect to='/cotizacion' />
      ) : (
        <header className='container-fluid'>
          <Helmet>
            <title>Dax Parts | Repuestos para Maquinaria Pesada</title>
          </Helmet>
          <div className='container-fluid d-flex justify-content-between pais-idioma'>
            <Pais country={country} />
            <Idioma language={language} onChangeLanguage={onChangeLanguage} />
          </div>
          <div className='header-contenido'>
            <div className='container'>
              <img className='logo-centro' src={logoCentro} alt='Dax Logo' />
            </div>
            <div className='container d-flex justify-content-center'>
              <form
                onSubmit={onSubmitSearch}
                className='form-inline d-flex justify-content-center'>
                <label htmlFor='buscar-numero'>{idioma.home.leyendaBuscar}</label>
                <input
                  id='buscar-numero'
                  type='text'
                  placeholder={idioma.home.campoBuscar}
                  onChange={(e) => dispatch(parteAction(e.target.value))}
                />
                <button type='submit' className='btn btn-buscar'>
                  {idioma.home.botonBuscar}
                </button>
              </form>
            </div>
            <div className='container click-link'>
              <button
                type='button'
                className='button-link'
                onClick={() => {
                  dispatch(openModal('open', <Noparte idioma={idioma} />));
                }}>
                <p className=''>{idioma.home.enlaceClick}</p>
              </button>
            </div>
            <div className='container'>
              <Link to='/tutorial'>
                <img
                  className='logo-tutorial'
                  src={iconVideos}
                  alt='Tutorial Logo'
                />
                <p className='tutorial-text'>{idioma.home.leyendaTutorial}</p>
              </Link>
            </div>
          </div>
        </header>
      )}
    </React.Fragment>
  );
};

export default Homepage;
