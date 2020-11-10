import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import Buscamos2 from './Buscamos2';

const Buscamos = (props) => {
  const idioma = props.idioma;
  const [marcaEquipo, setMarcaEquipo] = useState('');
  const [modeloEquipo, setModeloEquipo] = useState('');
  const [serieEquipo, setSerieEquipo] = useState('');
  const [marcaMotor, setMarcaMotor] = useState('');
  const [modeloMotor, setModeloMotor] = useState('');
  const [serieMotor, setSerieMotor] = useState('');
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://www.wp.daxparts.com/api/marca/listado';
      const resp = await axios.get(url);
      setMarcas(resp.data.dato);
      setMarcaEquipo(resp.data.dato[0].NomMarca);
      setMarcaMotor(resp.data.dato[0].NomMarca);
    };
    fetchData();
  }, []);

  const optionsMarca = marcas.map((item, index) => {
    return (
      <option key={index} value={item.NomMarca}>
        {item.NomMarca}
      </option>
    );
  });

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <div className='modal-header'>
          <h6 className=''>{idioma.buscamos.mensaje}</h6>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <br />
          <h4>{idioma.buscamos.titulo1}</h4>
          <div className='form-group d-flex justify-content-center'>
            <div className='form-group d-flex justify-content-center'>
              <select onChange={(e) => setMarcaEquipo(e.target.value)}>
                {optionsMarca}
              </select>
            </div>
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.modelo}
              onChange={(e) => setModeloEquipo(e.target.value)}
              value={modeloEquipo}
            />
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.serie}
              onChange={(e) => setSerieEquipo(e.target.value)}
              value={serieEquipo}
            />
          </div>
          <br />
          <h4>{idioma.buscamos.titulo2}</h4>
          <div className='form-group d-flex justify-content-center'>
            <div className='form-group d-flex justify-content-center'>
              <select onChange={(e) => setMarcaMotor(e.target.value)}>
                {optionsMarca}
              </select>
            </div>
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.modeloMotor}
              onChange={(e) => setModeloMotor(e.target.value)}
              value={modeloMotor}
            />
          </div>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.serieMotor}
              onChange={(e) => setSerieMotor(e.target.value)}
              value={serieMotor}
            />
          </div>
          <div className='boton-form'>
            <button
              type='button'
              className='btn'
              onClick={() => {
                props.openModal(
                  'open',
                  <Buscamos2
                    idioma={props.idioma}
                    marcaEquipo={marcaEquipo}
                    modeloEquipo={modeloEquipo}
                    serieEquipo={serieEquipo}
                    marcaMotor={marcaMotor}
                    modeloMotor={modeloMotor}
                    serieMotor={serieMotor}
                  />
                );
              }}>
              {idioma.buscamos.botonContinuar}
            </button>
          </div>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Buscamos);
