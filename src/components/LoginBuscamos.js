import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import axios from 'axios';
import swal from 'sweetalert';
import navLogo from '../img/logoNav.png';
import SignUpBuscamos from './SignUpBuscamos';

const LoginBuscamos = (props) => {
  const [logusuario, setLogusuario] = useState('');
  const [clausuario, setClausuario] = useState('');
  const [logged, setLogged] = useState(false);
  const [NroCotizacion, setNroCotizacion] = useState('');
  const [codcliente, setCodcliente] = useState('');

  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://www.wp.daxparts.com/api/sesion/validar';
    const data = { logusuario, clausuario };
    const resp = await axios.post(url, data);
    if (resp.data.estado === 'OK') {
      console.log(resp);
      setCodcliente(resp.data.dato[0].logusuario);
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
        console.log(resp2);
        setNroCotizacion(resp2.data.dato[0].NroCotizacion);
        setLogged(true);
        closeModal();
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
    // closeModal();
  };

  return (
    <>
      {logged ? (
        window.location.replace(
          `http://www.demo.daxparts.com/Clientes/frmCliCotDet.aspx?numcot=${NroCotizacion}&blnnu=False&codcliente=${codcliente}`
        )
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
                  {props.idioma.buscamos.botonCotizar}
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
                    <SignUpBuscamos
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginBuscamos);
