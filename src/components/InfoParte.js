import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import regAction from '../actions/regAction';
import navLogo from '../img/logoNav.png';

import LoginBuy from './LoginBuy';
import SignUpBuy from './SignUpBuy';

const InfoParte = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      const resp = axios.get('http://www.wp.daxparts.com/api/marca/listado');
      console.log(resp);
      // Responding a promise
    };
    fetchData();
  }, []);

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
              <select className='' value=''>
                <option>Catarpillar</option>
                <option>Case</option>
              </select>
            </div>
            <div className='form-group d-flex justify-content-center'>
              <button
                type='button'
                className='btn'
                onClick={() => {
                  props.openModal(
                    'open',
                    <LoginBuy
                      idioma={props.idioma}
                      intCodRepuesto={props.intCodRepuesto}
                    />
                  );
                }}>
                {props.idioma.navbar.botonTexto1}
              </button>

              <button
                type='button'
                className='btn'
                onClick={() => {
                  props.openModal(
                    'open',
                    <SignUpBuy
                      idioma={props.idioma}
                      intCodRepuesto={props.intCodRepuesto}
                    />
                  );
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
    // auth: state.auth,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
      regAction: regAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoParte);
