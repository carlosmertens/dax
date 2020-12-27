import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import Login from './Login';
import Buscamos from '../components/Buscamos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSearch);
library.add(faPlayCircle);

const Noparte = ({ idioma }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(openModal('closed', ''));
  };

  return (
    <React.Fragment>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <div className='modal-header'>
          <h4 className='modal-title'>{idioma.home.modal.titulo}</h4>
        </div>
        <div className='modal-body d-flex justify-content-center'>
          <div className='row botones'>
            <div className='col-sm'>
              <button
                className='que-hacer-button'
                onClick={() => {
                  dispatch(openModal('open', <Buscamos idioma={idioma} />));
                }}>
                {idioma.home.modal.enlaceBuscamos}
                <br />
                <FontAwesomeIcon icon='search' size='2x' className='icon-video' />
              </button>
            </div>
            <div className='col-sm'>
              <Link to='/tutorial'>
                <button className='que-hacer-button' onClick={closeModal}>
                  {idioma.home.modal.enlaceTutorial}
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
          {idioma.home.modal.tienesCuenta}{' '}
          <span
            className='pointer'
            onClick={() => {
              dispatch(openModal('open', <Login idioma={idioma} />));
            }}
            style={{ color: '#fca728' }}>
            {idioma.home.modal.click}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Noparte;
