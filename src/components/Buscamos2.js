import React, { useState } from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import Login3 from './Login3';

const Buscamos2 = (props) => {
  const idioma = props.idioma;

  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  // const [nombre, setNombre] = useState('');
  // const [pais, setPais] = useState('');
  // const [email, setEmail] = useState('');
  // const [telefono, setTelefono] = useState('');

  // const closeModal = () => {
  //   props.openModal('closed', '');
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const url = 'http://www.wp.daxparts.com/api/cotizacion/CrearCotSc';
  //   const data = {
  //     MarcaEquipo: props.marcaEquipo,
  //     ModeloEquipo: props.modeloEquipo,
  //     SerieEquipo: props.serieEquipo,
  //     MarcaMotor: props.marcaMotor,
  //     ModeloMotor: props.modeloMotor,
  //     SerieMotor: props.serieMotor,
  //     DesRep: descripcion,
  //     Cantidad: cantidad,
  //     CodCliente: 3,
  //   };

  //   const resp = await axios.post(url, data);
  //   console.log(resp);
  //   if (resp.data.estado === 'OK') {
  //     swal({
  //       title: 'Thank you!!!',
  //       text:
  //         'Se ha creado tu cotizacion. Puedes darle seguimiento en tu panel de usuario.',
  //       icon: 'success',
  //     });
  //   } else {
  //     swal({
  //       title: 'Upps!!!',
  //       text:
  //         'Lo siento, no logramos conectar con la base de datos. Intentalo de nuevo!',
  //       icon: 'error',
  //     });
  //   }

  //   closeModal();
  // };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <hr />

      <div className='modal-body'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <h4>{idioma.buscamos.titulo3}</h4>

          <div className='form-group d-flex justify-content-center'>
            <textarea
              type='text'
              className='description form-control mr-sm-2'
              placeholder={idioma.buscamos.descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}></textarea>
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              value={cantidad}
            />
          </div>

          <h4>{idioma.buscamos.titulo4}</h4>
          {/* <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.nombre}
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div> */}

          {/* <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.pais}
              onChange={(e) => setPais(e.target.value)}
              value={pais}
            />
          </div> */}

          {/* <div className='form-group d-flex justify-content-center'>
            <input
              type='email'
              className='form-control mr-sm-2'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div> */}

          {/* <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.telefono}
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
          </div> */}

          <div className='form-group d-flex justify-content-center'>
            <button
              type='button'
              className='btn'
              onClick={() => {
                props.openModal(
                  'open',
                  <Login3
                    idioma={props.idioma}
                    marcaEquipo={props.marcaEquipo}
                    modeloEquipo={props.modeloEquipo}
                    serieEquipo={props.serieEquipo}
                    marcaMotor={props.marcaMotor}
                    modeloMotor={props.modeloMotor}
                    serieMotor={props.serieMotor}
                    descripcion={descripcion}
                    cantidad={cantidad}
                  />
                );
              }}>
              {idioma.buscamos.botonCotizar}
            </button>
          </div>

          {/* <div className='boton-form'>
            <button type='submit' className='btn'>
              {idioma.buscamos.botonCotizar}
            </button>
          </div> */}
        </form>
      </div>

      <div className='modal-footer d-flex justify-content-center'>
        <div>
          {idioma.buscamos.cambiarModal}{' '}
          <span
            className='pointer'
            onClick={() => {
              props.openModal(
                'open',
                <Login3
                  idioma={props.idioma}
                  marcaEquipo={props.marcaEquipo}
                  modeloEquipo={props.modeloEquipo}
                  serieEquipo={props.serieEquipo}
                  marcaMotor={props.marcaMotor}
                  modeloMotor={props.modeloMotor}
                  serieMotor={props.serieMotor}
                  descripcion={descripcion}
                  cantidad={cantidad}
                />
              );
            }}
            style={{ color: '#fca728' }}>
            {idioma.buscamos.cambiarEnlace}
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

export default connect(mapStateToProps, mapDispatchToProps)(Buscamos2);
