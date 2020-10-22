import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from 'axios';
import swal from 'sweetalert';

import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import LoginBuscamos from './LoginBuscamos';

const SignUpBuscamos = (props) => {
  const [NomCliente, setNomCliente] = useState('');
  const [NomContacto, setNomContacto] = useState('');
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
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://www.wp.daxparts.com/api/pais/listado';
      const resp = await axios.get(url);
      setPaises(resp.data.dato);
    };
    fetchData();
  }, []);

  const optionsPais = paises.map((item, index) => {
    return (
      <option key={index} value={item.NomPais}>
        {item.NomPais}
      </option>
    );
  });

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
    const resp = await axios.post(url, data);

    if (resp.data.estado === 'OK') {
      const url2 = 'http://www.wp.daxparts.com/api/cotizacion/CrearCotSc';
      const data2 = {
        MarcaEquipo: props.marcaEquipo,
        ModeloEquipo: props.modeloEquipo,
        SerieEquipo: props.serieEquipo,
        MarcaMotor: props.marcaMotor,
        ModeloMotor: props.modeloMotor,
        SerieMotor: props.serieMotor,
        DesRep: props.descripcion,
        Cantidad: props.cantidad,
        CodCliente: resp.data.dato[0].logusuario,
      };
      const resp2 = await axios.post(url2, data2);

      if (resp2.data.estado === 'OK') {
        const coti = resp2.data.dato[0].NroCotizacion;
        swal({
          title: 'Thank you!!!',
          text: `Se ha creado tu cotizacion con número ${coti}. Puedes darle seguimiento en tu panel de usuario.`,
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
        title: 'LOGIN INCORRECTO!',
        text: 'Email/Password equivocado o no registrado',
        icon: 'error',
      });
    }

    closeModal();
  };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <form onSubmit={handleSubmit}>
          <h4>{props.idioma.crear.titulo1}</h4>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.empresa}
              onChange={(e) => setNomCliente(e.target.value)}
              value={NomCliente}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.nombre}
              onChange={(e) => setNomContacto(e.target.value)}
              value={NomContacto}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.numero}
              onChange={(e) => setNumNit(e.target.value)}
              value={NumNit}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <select onChange={(e) => setCodPais(e.target.value)}>
              {optionsPais}
            </select>
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.ciudad}
              onChange={(e) => setCodCiudad(e.target.value)}
              value={CodCiudad}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder='Dirección'
              onChange={(e) => setDireccion(e.target.value)}
              value={Direccion}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.telefono1}
              onChange={(e) => setNumTel1(e.target.value)}
              value={NumTel1}
              required
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.telefono2}
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
              required
            />
          </div>

          <h4>{props.idioma.crear.titulo2}</h4>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.nomUsuario}
              onChange={(e) => setNomUsuario(e.target.value)}
              value={NomUsuario}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.usuario}
              onChange={(e) => setLogUsuario(e.target.value)}
              value={LogUsuario}
              required
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='password'
              className='form-control mr-sm-2'
              placeholder={props.idioma.crear.password1}
              onChange={(e) => setContrasena(e.target.value)}
              value={Contrasena}
              required
            />
          </div>

          <div className='boton-form'>
            <button type='submit' className='btn'>
              {props.idioma.crear.botonCrear}
            </button>
          </div>
        </form>
      </div>

      <div className='modal-footer d-flex justify-content-center'>
        <div>
          {props.idioma.crear.cambiarModal}{' '}
          <span
            className='pointer'
            onClick={() => {
              props.openModal(
                'open',
                <LoginBuscamos
                  idioma={props.idioma}
                  marcaEquipo={props.marcaEquipo}
                  modeloEquipo={props.modeloEquipo}
                  serieEquipo={props.serieEquipo}
                  marcaMotor={props.marcaMotor}
                  modeloMotor={props.modeloMotor}
                  serieMotor={props.serieMotor}
                  descripcion={props.descripcion}
                  cantidad={props.cantidad}
                />
              );
            }}
            style={{ color: '#fca728' }}>
            {props.idioma.crear.cambiarEnlace}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpBuscamos);
