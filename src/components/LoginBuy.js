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
  const [logusuario, setLogusuario] = useState('');
  const [clausuario, setClausuario] = useState('');
  const [logged, setLogged] = useState(false);

  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://www.wp.daxparts.com/api/sesion/validar';
    const data = { logusuario, clausuario };

    const resp = await axios.post(url, data);
    if (resp.data.estado === 'OK') {
      const url2 = `http://www.wp.daxparts.com/api/cotizacion/CrearCot/${resp.data.dato[0].logusuario}/${props.intCodRepuesto}`;
      const resp2 = await axios.get(url2);
      if (resp2.data.estado === 'OK') {
        //Redirect user to "Panel del Cliente"
        setLogged(true);
      } else {
        swal({
          title: 'Upps!!!',
          text:
            'Lo siento, no logramos conectar con la base de datos. Intentalo de nuevo!',
          icon: 'error',
        });
      }
    } else {
      swal({
        title: 'LOGIN INCORRECTO!',
        text: 'Email/Password equivocado o no registrado',
        icon: 'error',
      });
    }

    closeModal();
  };

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
                  placeholder={props.idioma.ingresar.nombre}
                  onChange={(e) => setLogusuario(e.target.value)}
                  value={logusuario}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='password'
                  className='form-control mr-sm-2'
                  placeholder={props.idioma.ingresar.password}
                  onChange={(e) => setClausuario(e.target.value)}
                  value={clausuario}
                />
              </div>

              <div className='boton-form'>
                <button type='submit' className='btn'>
                  {props.idioma.ingresar.botonIngresar}
                </button>
              </div>
            </form>
          </div>

          <div className='modal-footer d-flex justify-content-center'>
            <div>
              {props.idioma.ingresar.cambiarModal}{' '}
              <span
                className='pointer'
                onClick={() => {
                  props.openModal(
                    'open',
                    <SignUpBuy
                      idioma={props.idioma}
                      intCodRepuesto={props.intCodRepuesto}
                    />
                  );
                }}
                style={{ color: '#fca728' }}>
                {props.idioma.ingresar.cambiarEnlace}
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
