import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import Login from './Login';
import Buscamos from '../components/Buscamos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSearch);
library.add(faPlayCircle);

const Noparte = (props) => {
  // Crear funcion de cerrar modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <div className='modal-header'>
          <h4 className='modal-title'>{props.idioma.home.modal.titulo}</h4>
        </div>
        <div className='modal-body d-flex justify-content-center'>
          <div className='row botones'>
            <div className='col-sm'>
              <button
                className='que-hacer-button'
                onClick={() => {
                  props.openModal('open', <Buscamos idioma={props.idioma} />);
                }}>
                {props.idioma.home.modal.enlaceBuscamos}
                <br />
                <FontAwesomeIcon icon='search' size='2x' className='icon-video' />
              </button>
            </div>
            <div className='col-sm'>
              <Link to='/tutorial'>
                <button className='que-hacer-button' onClick={closeModal}>
                  {props.idioma.home.modal.enlaceTutorial}
                  <br />
                  <FontAwesomeIcon
                    icon='play-circle'
                    size='2x'
                    className='icon-video'
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='modal-footer d-flex justify-content-center'>
        <div>
          {props.idioma.home.modal.tienesCuenta}{' '}
          <span
            className='pointer'
            onClick={() => {
              props.openModal('open', <Login idioma={props.idioma} />);
            }}
            style={{ color: '#fca728' }}>
            {props.idioma.home.modal.click}
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

export default connect(mapStateToProps, mapDispatchToProps)(Noparte);