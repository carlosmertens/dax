import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
// import Ingresar from './Login';
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
  const [otroEquipo, setOtroEquipo] = useState(false);
  const [otroMotor, setOtroMotor] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://www.wp.daxparts.com/api/marca/listado2';
      const resp = await axios.get(url);
      setMarcas(resp.data.dato);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (marcaEquipo === '<<OTROS>>') {
      setOtroEquipo(true);
    } else if (marcaMotor === '<<OTROS>>') {
      setOtroMotor(true);
    }
  }, [marcaEquipo, marcaMotor]);

  // useEffect(() => {
  //   if (marcaMotor === '<<OTROS>>') {
  //     setOtroMotor(true);
  //   }
  // }, [marcaMotor]);

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

      <hr />

      <div className='modal-body'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <h4>{idioma.buscamos.titulo1}</h4>
          <div className='form-group d-flex justify-content-center'>
            {/* <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.marca}
              onChange={(e) => setMarcaEquipo(e.target.value)}
              value={marcaEquipo}
            /> */}
            <div className='form-group d-flex justify-content-center'>
              <select onChange={(e) => setMarcaEquipo(e.target.value)}>
                {optionsMarca}
              </select>
            </div>
          </div>

          {otroEquipo ? (
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.buscamos.marca}
                onChange={(e) => setMarcaEquipo(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}

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

          <h4>{idioma.buscamos.titulo2}</h4>

          <div className='form-group d-flex justify-content-center'>
            {/* <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.marcaMotor}
              onChange={(e) => setMarcaMotor(e.target.value)}
              value={marcaMotor}
            /> */}
            <div className='form-group d-flex justify-content-center'>
              <select onChange={(e) => setMarcaMotor(e.target.value)}>
                {optionsMarca}
              </select>
            </div>
          </div>

          {otroMotor ? (
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.buscamos.marcaMotor}
                onChange={(e) => setMarcaMotor(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}

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

      {/* <div className='modal-footer d-flex justify-content-center'>
        <div>
          {idioma.buscamos.cambiarModal}{' '}
          <span
            className='pointer'
            onClick={() => {
              props.openModal('open', <Ingresar idioma={idioma} />);
            }}
            style={{ color: '#fca728' }}>
            {idioma.buscamos.cambiarEnlace}
          </span>
        </div>
      </div> */}
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
