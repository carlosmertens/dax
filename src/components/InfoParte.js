import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';

import Login from './Login';
import SignUp from './SignUp';

const InfoParte = (props) => {
  const [marca, setMarca] = useState([]);
  const [itemMarca, setItemMarca] = useState('CATERPILLAR');

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://www.wp.daxparts.com/api/marca/listado';
      const resp = await axios.get(url);
      setMarca(resp.data.dato);
    };
    fetchData();
  }, []);

  const optionsMarca = marca.map((item, index) => {
    return (
      <option key={index} value={item.NomMarca}>
        {item.NomMarca}
      </option>
    );
  });

  const handleChange = (e) => {
    setItemMarca(e.target.value);
  };

  // console.log(itemMarca);

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <div className='modal-header'>
          <h6 className=''>
            El item que ingresó no lo tenemos registrado, pero con su ayuda pronto
            lo tendremos. Por favor ayúdenos con esta sencilla información del
            fabricante:
          </h6>
        </div>
        <div className='modal-body'>
          <div className='form-group d-flex justify-content-center'>
            <select onChange={handleChange}>{optionsMarca}</select>
          </div>
          <div className='form-group d-flex justify-content-center'>
            <button
              type='button'
              className='btn'
              onClick={() => {
                props.openModal(
                  'open',
                  <Login
                    idioma={props.idioma}
                    itemMarca={itemMarca}
                    intCodRepuesto={0}
                    parte={props.parte}
                  />
                );
              }}>
              {props.idioma.navbar.botonTexto1}
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
                  <SignUp
                    idioma={props.idioma}
                    itemMarca={itemMarca}
                    intCodRepuesto={0}
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
