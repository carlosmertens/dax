import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import Ingresar from './Login';

// TODO: Wait for the API from DaxParts to know exactly what information is
// needed in this section and Buscamos2

const Buscamos2 = (props) => {
  const idioma = props.idioma;

  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nombre, setNombre] = useState('');
  const [pais, setPais] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  // Funcion para cerrar modal
  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  // Añadir async: const handleSubmit = async (e) => {
  // Add async
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    console.log(props.marcaEquipo);
    console.log(props.modeloEquipo);
    console.log(props.serieEquipo);
    console.log(props.marcaMotor);
    console.log(props.modeloMotor);
    console.log(props.serieMotor);
    console.log(cantidad);
    console.log(descripcion);
    console.log(nombre);
    console.log(pais);
    console.log(email);
    console.log(telefono);
    // ***** Llamar DaxParts API *****
    // ***** Call DaxParts API *****
    // const url = 'http://www.wp.daxparts.com/api/...';
    // const data = {
    //   campo1: props.marcaEquipo,
    //   campo2: props.modeloEquipo,
    //   campo3: props.serieEquipo,
    //   ... TODO: Copletar los campos
    // };

    // ***** Enviar pedido POST a la API
    // ***** Call POST request *****
    // const response = await axios.post(url, data);
    // console.log(response);
  };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <hr />

      <div className='modal-body'>
        <form onSubmit={handleSubmit}>
          <h4>{idioma.buscamos.titulo3}</h4>

          <div className='form-group d-flex justify-content-center'>
            <textarea
              type='text'
              className='description form-control mr-sm-2'
              placeholder={idioma.buscamos.descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}></textarea>
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              value={cantidad}
            />
          </div>

          <h4>{idioma.buscamos.titulo4}</h4>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.nombre}
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.pais}
              onChange={(e) => setPais(e.target.value)}
              value={pais}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='email'
              className='form-control mr-sm-2'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.telefono}
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
          </div>

          <div className='boton-form'>
            <button type='submit' className='btn'>
              {idioma.buscamos.botonCotizar}
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

export default connect(mapStateToProps, mapDispatchToProps)(Buscamos2);