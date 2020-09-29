import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import openModal from '../actions/openModal';

import axios from 'axios';
import swal from 'sweetalert';

import navLogo from '../img/logoNav.png';
import SignUpBuy from './SignUpBuy';

const Login = (props) => {
  const idioma = props.idioma;
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [intCodCliente, setIntCodCliente] = useState({});
  const [logged, setLogged] = useState(false);

  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://www.wp.daxparts.com/api/sesion/validar';
    const data = {
      logusuario: usuario,
      clausuario: password,
    };

    const resp = await axios.post(url, data);
    // console.log(resp.data);

    if (resp.data.estado === 'OK') {
      setIntCodCliente(resp.data.dato[0].logusuario);
      // const url2 = `http://www.wp.daxparts.com/api/cotizacion/CrearCot/${intCodCliente}/${props.intCodRepuesto}`;
      // const resp2 = await axios.get(url2);
      setLogged(true);
    } else {
      swal({
        title: 'LOGIN INCORRECTO!',
        text: 'Email/Password equivocado o no registrado',
        icon: 'error',
      });
    }
    closeModal();
  };

  // console.log(props);
  // console.log(intCodCliente);

  console.log(props.intCodRepuesto);
  console.log(intCodCliente);

  return (
    <>
      {logged ? (
        <Redirect to='/comprar' />
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
                  props.openModal('open', <SignUpBuy idioma={idioma} />);
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
