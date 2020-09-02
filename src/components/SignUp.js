import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import Login from './Login';

// TODO: Wait for API from DaxParts to know exactly what information is
// needed to be submitted in this section.
// Set up API submit POST using async and wait

const SignUp = (props) => {
  const idioma = props.idioma;

  const [NomCliente, setNomCliente] = useState('');
  const [NomContacto, setNomContacto] = useState('');
  // const [id, setId] = useState('Cedula de identidad');
  const [NumNit, setNumNit] = useState('');
  const [CodPais, setCodPais] = useState('');
  const [CodCiudad, setCodCiudad] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [NumTel1, setNumTel1] = useState('');
  const [NumTel2, setNumTel2] = useState('');
  const [Mail, setMail] = useState('');
  const [NomUsuario, setNomUsuario] = useState('');
  const [LogUsuario, setLogUsuario] = useState('');
  const [Contrasena, setContrasena] = useState('');
  // const [password2, setPassword2] = useState('');

  // Funcion para cerrar el modal al enviar formulario
  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    closeModal();

    console.log(NomCliente);
    console.log(NomContacto);
    console.log(NumNit);
    console.log(CodPais);
    console.log(CodCiudad);
    console.log(Direccion);
    console.log(NumTel1);
    console.log(NumTel2);
    console.log(Mail);
    console.log(LogUsuario);
    console.log(Contrasena);

    // ***** Llamar DaxParts API *****
    // ***** Call DaxParts API *****
    const url = 'http://www.wp.daxparts.com/api/sesion/validar';
    const data = {
      IdCliente: '0',
      NomCliente: NomCliente,
      NomContacto: NomContacto,
      NumNit: NumNit,
      CodPais: CodPais,
      CodCiudad: CodCiudad,
      Direccion: Direccion,
      NumTel1: NumTel1,
      NumTel2: NumTel2,
      Mail: Mail,
      NomUsuario: NomUsuario,
      LogUsuario: LogUsuario,
      Contrasena: Contrasena,
    };
    // ***** Enviar pedido POST a la API
    // ***** Call POST request *****
    const response = await axios.post(url, data);
    console.log(response);
    // url
  };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <hr />

      <div className='modal-body'>
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

          {/* API no lo requiere 
            TODO: Confirm with Dax since API does not request it */}

          {/* <div className='form-group d-flex justify-content-center'>
            <select
              className='form-control'
              onChange={(e) => setId(e.target.value)}
              value={id}>
              <option>{idioma.crear.cedula}</option>
              <option>NIT</option>
              <option>{idioma.crear.pasaporte}</option>
              <option>RUC</option>
            </select>
          </div> */}

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

          {/* API no lo requiere 
            TODO: Confirm with Dax since API does not request it */}

          {/* <div className='form-group d-flex justify-content-center'>
            <input
              type='password'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.password2}
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
          </div> */}

          <div className='boton-form'>
            <button type='submit' className='btn'>
              {idioma.crear.botonCrear}
            </button>
          </div>
        </form>
      </div>

      <div className='modal-footer d-flex justify-content-center'>
        <div>
          {idioma.crear.cambiarModal}{' '}
          <span
            className='pointer'
            onClick={() => {
              props.openModal('open', <Login idioma={idioma} />);
            }}
            style={{ color: '#fca728' }}>
            {idioma.crear.cambiarEnlace}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);