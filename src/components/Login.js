import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import axios from 'axios';
import navLogo from '../img/logoNav.png';
import SignUp from './SignUp';

const Login = (props) => {
  const idioma = props.idioma;
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  // Submit Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    closeModal();
    console.log(usuario);
    console.log(password);
    // ***** Llamar DaxParts API *****
    // ***** Call DaxParts API *****
    const url = 'http://www.wp.daxparts.com/api/sesion/validar';
    const data = {
      logususario: usuario,
      clausuario: password,
    };

    // ***** Enviar pedido POST a la API
    // ***** Call POST request *****
    const response = await axios.post(url, data);
    console.log(response);
    // Hacer algo con la respuesta del API (Usuario valido o no)
    // TODO: Do something with the response
  };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.ingresar.nombre}
              onChange={(e) => setUsuario(e.target.value)}
              value={usuario}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='password'
              className='form-control mr-sm-2'
              placeholder={idioma.ingresar.password}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* <div className='enlace-form'>
            <a className='me-olvide' href='/#'>
              {idioma.ingresar.olvide}
            </a>
          </div> */}

          <div className='boton-form'>
            <button type='submit' className='btn'>
              {idioma.ingresar.botonIngresar}
            </button>
          </div>
        </form>
      </div>

      <div className='modal-footer d-flex justify-content-center'>
        <div>
          {idioma.ingresar.cambiarModal}{' '}
          <span
            className='pointer'
            onClick={() => {
              props.openModal('open', <SignUp idioma={idioma} />);
            }}
            style={{ color: '#fca728' }}>
            {idioma.ingresar.cambiarEnlace}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);