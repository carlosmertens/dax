import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';

import LoginBuy from './LoginBuy';
import SignUpBuy from './SignUpBuy';

const InfoParte = (props) => {
  const [marca, setMarca] = useState([]);

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

  // console.log(props);

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
          <form>
            <div className='form-group d-flex justify-content-center'>
              <select>{optionsMarca}</select>
            </div>
            <div className='form-group d-flex justify-content-center'>
              <button
                type='button'
                className='btn'
                onClick={() => {
                  props.openModal('open', <LoginBuy idioma={props.idioma} />);
                }}>
                {props.idioma.navbar.botonTexto1}
              </button>

              <button
                type='button'
                className='btn'
                onClick={() => {
                  props.openModal('open', <SignUpBuy idioma={props.idioma} />);
                }}>
                {props.idioma.navbar.botonTexto2}
              </button>
            </div>
          </form>

          <div></div>
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
