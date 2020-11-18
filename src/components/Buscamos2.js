import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import SignUpBuscamos from './SignUpBuscamos';

const Buscamos2 = (props) => {
  const idioma = props.idioma;

  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');

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
            props.openModal(
              'open',
              <SignUpBuscamos
                idioma={props.idioma}
                marcaEquipo={props.marcaEquipo}
                modeloEquipo={props.modeloEquipo}
                serieEquipo={props.serieEquipo}
                marcaMotor={props.marcaMotor}
                modeloMotor={props.modeloMotor}
                serieMotor={props.serieMotor}
                descripcion={descripcion}
                cantidad={cantidad}
              />
            );
          }}>
          <h4>{idioma.buscamos.titulo3}</h4>
          <div className='form-group d-flex justify-content-center'>
            <textarea
              type='text'
              className='description form-control mr-sm-2'
              placeholder={idioma.buscamos.descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}
              required></textarea>
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              value={cantidad}
              required
            />
          </div>
          <div className='form-group d-flex justify-content-center'>
            <button
              type='submit'
              className='btn'
              // onClick={() => {
              //   props.openModal(
              //     'open',
              //     <SignUpBuscamos
              //       idioma={props.idioma}
              //       marcaEquipo={props.marcaEquipo}
              //       modeloEquipo={props.modeloEquipo}
              //       serieEquipo={props.serieEquipo}
              //       marcaMotor={props.marcaMotor}
              //       modeloMotor={props.modeloMotor}
              //       serieMotor={props.serieMotor}
              //       descripcion={descripcion}
              //       cantidad={cantidad}
              //     />
              //   );
              // }}
            >
              {idioma.buscamos.botonContinuar}
            </button>
          </div>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Buscamos2);
