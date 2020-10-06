import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import regAction from '../actions/regAction';
import navLogo from '../img/logoNav.png';

import LoginBuy from './LoginBuy';
import SignUpBuy from './SignUpBuy';

const BuyPart = (props) => {
  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <div className='modal-header d-flex justify-content-center'>
          <h4 className='modal-title'>Ingresa a tu cuenta!</h4>
        </div>
        <div className='modal-body d-flex justify-content-center'>
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
        </div>
        <div className='modal-footer d-flex justify-content-center'>
          <div>
            {props.idioma.ingresar.cambiarModal}{' '}
            <span
              className='pointer'
              onClick={() => {
                props.openModal(
                  'open',
                  <SignUpBuy
                    idioma={props.idioma}
                    intCodRepuesto={props.intCodRepuesto}
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
    auth: state.auth,
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

export default connect(mapStateToProps, mapDispatchToProps)(BuyPart);
