import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';

import LoginInfo from './LoginInfo';
import SignUpInfo from './SignUpInfo';

const InfoParte = (props) => {
  const [marcas, setMarcas] = useState([]);
  const [itemMarca, setItemMarca] = useState('');
  const [otros, setOtros] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://www.wp.daxparts.com/api/marca/listado2';
      const resp = await axios.get(url);
      setMarcas(resp.data.dato);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (itemMarca === '<<OTROS>>') {
      setOtros(true);
    }
  }, [itemMarca]);

  const optionsMarca = marcas.map((item, index) => {
    return (
      <option key={index} value={item.NomMarca}>
        {item.NomMarca}
      </option>
    );
  });

  const handleChange = (e) => {
    setItemMarca(e.target.value);
  };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <div className='modal-header'>
          <h6 className=''>
            No tenemos ese número de parte registrado. Por favor, selecciona la
            marca.
          </h6>
        </div>
        <div className='modal-body'>
          <div className='form-group d-flex justify-content-center'>
            <select onChange={handleChange}>{optionsMarca}</select>
          </div>
          {otros ? (
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Marca'
                onChange={(e) => setItemMarca(e.target.value)}
              />
            </div>
          ) : (
            <br />
          )}
          <div className='form-group d-flex justify-content-center'>
            <button
              type='button'
              className='btn'
              onClick={() => {
                props.openModal(
                  'open',
                  <LoginInfo
                    idioma={props.idioma}
                    itemMarca={itemMarca}
                    intCodRepuesto={0}
                    parte={props.parte}
                  />
                );
              }}>
              Cotizar
            </button>
          </div>
        </div>
        <div className='modal-footer d-flex justify-content-center'>
          <div>
            {props.idioma.ingresar.cambiarModal}{' '}
            <span
              className='pointer'
              onClick={() => {
                props.openModal(
                  'open',
                  <SignUpInfo
                    idioma={props.idioma}
                    itemMarca={itemMarca}
                    parte={props.parte}
                  />
                );
              }}
              style={{ color: '#fca728' }}>
              {props.idioma.ingresar.cambiarEnlace}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
    parte: state.parte,
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoParte);
