import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import openModal from '../actions/openModal';
import regAction from '../actions/regAction';
import axios from 'axios';
import swal from 'sweetalert';
import navLogo from '../img/logoNav.png';
import SignUp from './SignUp';

// TEST API: https://airbnb-api.robertbunch.dev

const Login = (props) => {
  const idioma = props.idioma;
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  // ============================= START TEST WITH AIRBNB-API============================== //
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://airbnb-api.robertbunch.dev/users/login';
    const data = {
      email: usuario,
      password: password,
    };
    const resp = await axios.post(url, data);

    if (resp.data.msg === 'noEmail') {
      swal({
        title: 'That email is not registered.',
        icon: 'error',
      });
    } else if (resp.data.msg === 'badPass') {
      swal({
        title: 'Invalid email/password',
        text: "We don't have a match for that user name and password.",
        icon: 'error',
      });
    } else if (resp.data.msg === 'loggedIn') {
      props.regAction(resp.data);
      closeModal();
    }
  };
  console.log(props.auth);
  // =============================END TEST WITH AIRBNB-API============================== //

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   closeModal();

  //   const url = 'http://www.wp.daxparts.com/api/sesion/validar';
  //   const data = {
  //     logususario: usuario,
  //     clausuario: password,
  //   };

  //   const resp = await axios.post(url, data);
  //   console.log(resp);
  // };

  return (
    <>
      {props.auth.email ? (
        <Redirect to='/panel' />
      ) : (
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
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
    auth: state.auth,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
      regAction: regAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
