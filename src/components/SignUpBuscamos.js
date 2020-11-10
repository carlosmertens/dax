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
  const [CodPais, setCodPais] = useState(props.country);
  const [CodCiudad, setCodCiudad] = useState('');
  const [NumTel1, setNumTel1] = useState('');
  const [Mail, setMail] = useState('');
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://www.wp.daxparts.com/api/pais/listado3/${props.country}`;
      const resp = await axios.get(url);
      setPaises(resp.data.dato);
    };
    fetchData();
  }, [props.country]);

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
        title: 'LOGIN INCORRECTO!',
        text: 'Email/Password equivocado o no registrado',
        icon: 'error',
      });
    }
    closeModal();
  };

  console.log(CodPais);

  return (
    <>
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
              placeholder={props.idioma.crear.telefono1}
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
              {props.idioma.buscamos.botonCotizar}
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
    country: state.country,
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
