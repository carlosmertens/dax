import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import swal from 'sweetalert';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import LoginInfo from './LoginInfo';

const SignUpInfo = (props) => {
  const idioma = props.idioma;
  const [NomCliente, setNomCliente] = useState('');
  const [NomContacto, setNomContacto] = useState('');
  const [CodPais, setCodPais] = useState(props.country);
  const [CodCiudad, setCodCiudad] = useState('');
  const [NumTel1, setNumTel1] = useState('');
  const [Mail, setMail] = useState('');

  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://www.wp.daxparts.com/api/cliente/guardarCliente';
    const data = {
      IdCliente: '0',
      NomCliente: NomCliente,
      NomContacto: NomContacto,
      NumNit: '',
      CodPais: CodPais,
      CodCiudad: CodCiudad,
      Direccion: '',
      NumTel1: NumTel1,
      NumTel2: '',
      Mail: Mail,
      NomUsuario: '',
      LogUsuario: '',
      Contrasena: '',
    };
    const resp = await axios.post(url, data);
    console.log(resp);
    if (resp.data.estado === 'OK') {
      const url2 = `http://www.wp.daxparts.com/api/cotizacion/CotSinCosto/${resp.data.dato[0].IdCliente}/${props.parte}/${props.itemMarca}`;
      const resp2 = await axios.get(url2);
      console.log(resp2);
      if (resp2.data.estado === 'OK') {
        const coti = resp2.data.dato[0].NroCotizacion;
        swal({
          title: `${props.idioma.buscamos.swalTitle} ${coti}`,
          text: `${props.idioma.buscamos.swalText}`,
          icon: 'success',
        });
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
        title: 'REGISTRO INCORRECTO!',
        text:
          'Lo sentimos, no pudimos conectar con la base de datos. Intentalo de nuevo!',
        icon: 'error',
      });
    }
    closeModal();
  };

  return (
    <React.Fragment>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>
      <div className='modal-body'>
        <div className='modal-header'>
          <h6 className=''>{props.idioma.ingresar.titulo}</h6>
        </div>
        <form onSubmit={handleSubmit}>
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
            <select
              className='custom-select'
              value={CodPais}
              onChange={(e) => setCodPais(e.target.value)}>
              {props.paises.map((option) => (
                <option value={option.NomPais} key={option.CodPais}>
                  {option.NomPais}
                </option>
              ))}
            </select>
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
              placeholder={idioma.crear.telefono1}
              onChange={(e) => setNumTel1(e.target.value)}
              value={NumTel1}
              required
            />
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='email'
              className='form-control mr-sm-2'
              placeholder='Email'
              onChange={(e) => setMail(e.target.value)}
              value={Mail}
              required
            />
          </div>
          <div className='boton-form'>
            <button type='submit' className='btn'>
              {idioma.infoParte.botonEnviar}
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
              props.openModal(
                'open',
                <LoginInfo
                  idioma={props.idioma}
                  itemMarca={props.itemMarca}
                  parte={props.parte}
                />
              );
            }}
            style={{ color: '#fca728' }}>
            {idioma.crear.cambiarEnlace}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
    country: state.country,
    parte: state.parte,
    paises: state.paises,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpInfo);
