import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import swal from 'sweetalert';
import openModal from '../actions/openModal';
import regAction from '../actions/regAction';
import navLogo from '../img/logoNav.png';
import LoginBuy from './LoginBuy';

import { Redirect } from 'react-router-dom';

const SignUpBuy = (props) => {
  const idioma = props.idioma;

  // const [NomCliente, setNomCliente] = useState('');
  // const [NomContacto, setNomContacto] = useState('');
  // const [NumNit, setNumNit] = useState('');
  // const [CodPais, setCodPais] = useState('');
  // const [CodCiudad, setCodCiudad] = useState('');
  // const [Direccion, setDireccion] = useState('');
  // const [NumTel1, setNumTel1] = useState('');
  // const [NumTel2, setNumTel2] = useState('');
  const [Mail, setMail] = useState('');
  // const [NomUsuario, setNomUsuario] = useState('');
  // const [LogUsuario, setLogUsuario] = useState('');
  const [Contrasena, setContrasena] = useState('');

  // Funcion para cerrar el modal al enviar formulario
  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  // ============================= START TEST WITH AIRBNB-API============================== //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://airbnb-api.robertbunch.dev/users/signup';
    const data = {
      email: Mail,
      password: Contrasena,
    };
    const resp = await axios.post(url, data);

    if (resp.data.msg === 'userExists') {
      swal({
        title: 'Email Exists',
        text: 'Email provided is already registered!',
        icon: 'error',
      });
    } else if (resp.data.msg === 'invalidData') {
      swal({
        title: 'Invalid Email/Password',
        text: 'Please verify your email and password!',
        icon: 'error',
      });
    } else if (resp.data.msg === 'userAdded') {
      props.regAction(resp.data);
      closeModal();
    }
  };
  console.log(props.auth);
  // =============================END TEST WITH AIRBNB-API============================== //

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   closeModal();

  //   console.log(NomCliente);
  //   console.log(NomContacto);
  //   console.log(NumNit);
  //   console.log(CodPais);
  //   console.log(CodCiudad);
  //   console.log(Direccion);
  //   console.log(NumTel1);
  //   console.log(NumTel2);
  //   console.log(Mail);
  //   console.log(LogUsuario);
  //   console.log(Contrasena);

  //   ***** Llamar DaxParts API *****
  //   ***** Call DaxParts API *****
  //   const url = 'http://www.wp.daxparts.com/api/cliente/guardarCliente';
  //   const data = {
  //     IdCliente: '0',
  //     NomCliente: NomCliente,
  //     NomContacto: NomContacto,
  //     NumNit: NumNit,
  //     CodPais: CodPais,
  //     CodCiudad: CodCiudad,
  //     Direccion: Direccion,
  //     NumTel1: NumTel1,
  //     NumTel2: NumTel2,
  //     Mail: Mail,
  //     NomUsuario: NomUsuario,
  //     LogUsuario: LogUsuario,
  //     Contrasena: Contrasena,
  //   };
  //   ***** Enviar pedido POST a la API
  //   ***** Call POST request *****
  //   const response = await axios.post(url, data);
  //   console.log(response);
  // };

  return (
    <>
      {props.auth.email ? (
        <Redirect to='/comprar' />
      ) : (
        <>
          <div className='modal-logo d-flex justify-content-center'>
            <img src={navLogo} alt='Dax Logo' />
          </div>
          {/* =============================TEST START============================ */}
          <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <h4>{idioma.crear.titulo1}</h4>
              <div className='form-group d-flex justify-content-center'>
                <input
                  type='email'
                  className='form-control mr-sm-2'
                  placeholder='Email'
                  onChange={(e) => setMail(e.target.value)}
                  value={Mail}
                />
              </div>
              <div className='form-group d-flex justify-content-center'>
                <input
                  type='password'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.password1}
                  onChange={(e) => setContrasena(e.target.value)}
                  value={Contrasena}
                />
              </div>
              <div className='boton-form'>
                <button type='submit' className='btn'>
                  {idioma.crear.botonCrear}
                </button>
              </div>
            </form>
          </div>
          {/* =============================TEST END============================ */}

          {/* =========================START DAX CONTENT======================= */}
          {/* <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <h4>{idioma.crear.titulo1}</h4>
              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.empresa}
                  onChange={(e) => setNomCliente(e.target.value)}
                  value={NomCliente}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.nombre}
                  onChange={(e) => setNomContacto(e.target.value)}
                  value={NomContacto}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.numero}
                  onChange={(e) => setNumNit(e.target.value)}
                  value={NumNit}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.pais}
                  onChange={(e) => setCodPais(e.target.value)}
                  value={CodPais}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.ciudad}
                  onChange={(e) => setCodCiudad(e.target.value)}
                  value={CodCiudad}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder='Direccion'
                  onChange={(e) => setDireccion(e.target.value)}
                  value={Direccion}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.telefono1}
                  onChange={(e) => setNumTel1(e.target.value)}
                  value={NumTel1}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.telefono2}
                  onChange={(e) => setNumTel2(e.target.value)}
                  value={NumTel2}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='email'
                  className='form-control mr-sm-2'
                  placeholder='Email'
                  onChange={(e) => setMail(e.target.value)}
                  value={Mail}
                />
              </div>

              <h4>{idioma.crear.titulo2}</h4>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.nomUsuario}
                  onChange={(e) => setNomUsuario(e.target.value)}
                  value={NomUsuario}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.usuario}
                  onChange={(e) => setLogUsuario(e.target.value)}
                  value={LogUsuario}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='password'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.password1}
                  onChange={(e) => setContrasena(e.target.value)}
                  value={Contrasena}
                />
              </div>

              <div className='boton-form'>
                <button type='submit' className='btn'>
                  {idioma.crear.botonCrear}
                </button>
              </div>
            </form>
          </div> */}
          {/* =========================START DAX CONTENT======================= */}
          <div className='modal-footer d-flex justify-content-center'>
            <div>
              {idioma.crear.cambiarModal}{' '}
              <span
                className='pointer'
                onClick={() => {
                  props.openModal(
                    'open',
                    <LoginBuy
                      idioma={idioma}
                      intCodRepuesto={props.intCodRepuesto}
                    />
                  );
                }}
                style={{ color: '#fca728' }}>
                {idioma.crear.cambiarEnlace}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpBuy);
