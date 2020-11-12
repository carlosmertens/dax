import React, { useState } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import Buscamos2 from './Buscamos2';

const Buscamos = (props) => {
  const [marcaEquipo, setMarcaEquipo] = useState('');
  const [modeloEquipo, setModeloEquipo] = useState('');
  const [serieEquipo, setSerieEquipo] = useState('');
  const [marcaMotor, setMarcaMotor] = useState('');
  const [modeloMotor, setModeloMotor] = useState('');
  const [serieMotor, setSerieMotor] = useState('');

  return (
    <React.Fragment>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <div className='modal-header'>
          <h6 className=''>{props.idioma.buscamos.mensaje}</h6>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <br />
          <h4>{props.idioma.buscamos.titulo1}</h4>
          <div className='form-group d-flex justify-content-center'>
            <select
              className='custom-select'
              onChange={(e) => setMarcaEquipo(e.target.value)}>
              {props.marcas.map((option) => (
                <option value={option.NomMarca} key={option.CodMarca}>
                  {option.NomMarca}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.buscamos.modelo}
              onChange={(e) => setModeloEquipo(e.target.value)}
              value={modeloEquipo}
            />
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.buscamos.serie}
              onChange={(e) => setSerieEquipo(e.target.value)}
              value={serieEquipo}
            />
          </div>
          <br />
          <h4>{props.idioma.buscamos.titulo2}</h4>
          <div className='form-group d-flex justify-content-center'>
            <select
              className='custom-select'
              onChange={(e) => setMarcaMotor(e.target.value)}>
              {props.marcas.map((option) => (
                <option value={option.NomMarca} key={option.CodMarca}>
                  {option.NomMarca}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.buscamos.modeloMotor}
              onChange={(e) => setModeloMotor(e.target.value)}
              value={modeloMotor}
            />
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.buscamos.serieMotor}
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
              {props.idioma.buscamos.botonContinuar}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
    marcas: state.marcas,
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
