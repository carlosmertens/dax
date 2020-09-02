import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import Ingresar from './Login';
import Buscamos2 from './Buscamos2';

const Buscamos = (props) => {
  const idioma = props.idioma;
  const [marcaEquipo, setMarcaEquipo] = useState('');
  const [modeloEquipo, setModeloEquipo] = useState('');
  const [serieEquipo, setSerieEquipo] = useState('');
  const [marcaMotor, setMarcaMotor] = useState('');
  const [modeloMotor, setModeloMotor] = useState('');
  const [serieMotor, setSerieMotor] = useState('');

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <hr />

      <div className='modal-body'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <h4>{idioma.buscamos.titulo1}</h4>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.marca}
              onChange={(e) => setMarcaEquipo(e.target.value)}
              value={marcaEquipo}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.modelo}
              onChange={(e) => setModeloEquipo(e.target.value)}
              value={modeloEquipo}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.serie}
              onChange={(e) => setSerieEquipo(e.target.value)}
              value={serieEquipo}
            />
          </div>

          <h4>{idioma.buscamos.titulo2}</h4>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.marcaMotor}
              onChange={(e) => setMarcaMotor(e.target.value)}
              value={marcaMotor}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.modeloMotor}
              onChange={(e) => setModeloMotor(e.target.value)}
              value={modeloMotor}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.serieMotor}
              onChange={(e) => setSerieMotor(e.target.value)}
              value={serieMotor}
            />
          </div>

          <div className='boton-form'>
            <button
              type='button'
              className='btn'
              onClick={() => {
                props.openModal(
                  'open',
                  <Buscamos2
                    idioma={props.idioma}
                    marcaEquipo={marcaEquipo}
                    modeloEquipo={modeloEquipo}
                    serieEquipo={serieEquipo}
                    marcaMotor={marcaMotor}
                    modeloMotor={modeloMotor}
                    serieMotor={serieMotor}
                  />
                );
              }}>
              {idioma.buscamos.botonContinuar}
            </button>
          </div>
        </form>
      </div>

      <div className='modal-footer d-flex justify-content-center'>
        <div>
          {idioma.buscamos.cambiarModal}{' '}
          <span
            className='pointer'
            onClick={() => {
              props.openModal('open', <Ingresar idioma={idioma} />);
            }}
            style={{ color: '#fca728' }}>
            {idioma.buscamos.cambiarEnlace}
          </span>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscamos);