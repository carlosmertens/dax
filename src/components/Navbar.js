import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import { Link } from 'react-router-dom';
import navLogoWhite from '../img/logoNavWhite.png';
import Ingresar from './Login';
import Crear from './SignUp';

const Navbar = (props) => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <div className='navbar-brand'>
      <Link to='/'>
        <img src={navLogoWhite} alt='Dax Logo' />
      </Link>
    </div>

    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mx-auto'>
        <li className='nav-item'>
          <Link to='/somos' className='nav-link text-white'>
            {props.idioma.navbar.enlace1}
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/hacemos' className='nav-link text-white'>
            {props.idioma.navbar.enlace2}
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='ofrecemos' className='nav-link text-white'>
            {props.idioma.navbar.enlace3}
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='contacto' className='nav-link text-white'>
            {props.idioma.navbar.enlace4}
          </Link>
        </li>
      </ul>

      <div className='form-inline my-2 my-lg-0'>
        <button
          type='button'
          className='btn'
          onClick={() => {
            props.openModal('open', <Ingresar idioma={props.idioma} />);
          }}>
          {props.idioma.navbar.botonTexto1}
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => {
            props.openModal('open', <Crear idioma={props.idioma} />);
          }}>
          {props.idioma.navbar.botonTexto2}
        </button>
      </div>
    </div>
  </nav>
);

// Action dispacher to call up modal
// Accion dispacher para mostrar modal
function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(null, mapDispatchToProps)(Navbar);