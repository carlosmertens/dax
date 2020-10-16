import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logoCentro from '../img/logoCentro.png';
import iconVideos from '../img/IconVideos.png';

import spanish from '../text/esp.json';
import english from '../text/eng.json';

import openModal from '../actions/openModal';
import parteAction from '../actions/parteAction';
import idiomaAction from '../actions/idiomaAction';

import Idioma from '../components/Idioma';
import Pais from '../components/Pais';
import Noparte from '../components/NoParte';

const Homepage = ({ country, idioma, idiomaAction, openModal, parteAction }) => {
  const [language, setLanguage] = useState('Español');
  const [cotizar, setCotizar] = useState(false);

  useEffect(() => {
    idiomaAction(spanish);
    if (language !== 'Español') {
      idiomaAction(english);
    }
  }, [language, idiomaAction]);

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const onChangeSearch = (e) => {
    parteAction(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (cotizar !== '') {
      setCotizar(true);
    }
  };

  return (
    <>
      {cotizar ? (
        <Redirect to='/cotizacion' />
      ) : (
        <div className='Homepage'>
          <header className='Homepage-header'>
            <div className='container-fluid'>
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
                    <label>{idioma.home.leyendaBuscar}</label>
                    <input
                      type='text'
                      placeholder={idioma.home.campoBuscar}
                      onChange={onChangeSearch}
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
                      openModal('open', <Noparte idioma={idioma} />);
                    }}>
                    <p className=''>{idioma.home.enlaceClick}</p>
                  </button>
                </div>

                <div className='container'>
                  <Link to='/aprender'>
                    <img
                      className='logo-tutorial'
                      src={iconVideos}
                      alt='Tutorial Logo'
                    />
                    <p className='tutorial-text'>{idioma.home.leyendaTutorial}</p>
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    country: state.country,
    idioma: state.idioma,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
      parteAction: parteAction,
      idiomaAction: idiomaAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
