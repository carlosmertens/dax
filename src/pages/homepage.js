import React, { useState } from 'react';

import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logoCentro from '../img/logoCentro.png';
import iconVideos from '../img/IconVideos.png';

import openModal from '../actions/openModal';
import parteAction from '../actions/parteAction';

import Idioma from '../components/Idioma';
import Pais from '../components/Pais';
import Noparte from '../components/NoParte';

const Homepage = (props) => {
  const [cotizar, setCotizar] = useState(false);

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
                <Pais country={props.country} />
                <Idioma
                  language={props.language}
                  onChangeLanguage={props.onChangeLanguage}
                />
              </div>

              <div className='header-contenido'>
                <div className='container'>
                  <img className='logo-centro' src={logoCentro} alt='Dax Logo' />
                </div>

                <div className='container d-flex justify-content-center'>
                  <form
                    onSubmit={onSubmitSearch}
                    className='form-inline d-flex justify-content-center'>
                    <label>{props.idioma.home.leyendaBuscar}</label>
                    <input
                      type='text'
                      placeholder={props.idioma.home.campoBuscar}
                      onChange={(e) => parteAction(e.target.value)}
                    />
                    <button type='submit' className='btn btn-buscar'>
                      {props.idioma.home.botonBuscar}
                    </button>
                  </form>
                </div>

                <div className='container click-link'>
                  <button
                    type='button'
                    className='button-link'
                    onClick={() => {
                      props.openModal('open', <Noparte idioma={props.idioma} />);
                    }}>
                    <p className=''>{props.idioma.home.enlaceClick}</p>
                  </button>
                </div>

                <div className='container'>
                  <Link to='/aprender'>
                    <img
                      className='logo-tutorial'
                      src={iconVideos}
                      alt='Tutorial Logo'
                    />
                    <p className='tutorial-text'>
                      {props.idioma.home.leyendaTutorial}
                    </p>
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
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
