import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import openModal from '../actions/openModal';
import navLogoWhite from '../img/logoNavWhite.png';
import Ingresar from './Login';
import Crear from './SignUp';

const Navbar = ({ idioma }) => {
  const dispatch = useDispatch();
  return (
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
            <Link to='/empresa' className='nav-link text-white'>
              {idioma.navbar.enlace1}
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='industrias' className='nav-link text-white'>
              {idioma.navbar.enlace2}
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/tutorial' className='nav-link text-white'>
              {idioma.navbar.enlace3}
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='contactos' className='nav-link text-white'>
              {idioma.navbar.enlace4}
            </Link>
          </li>
        </ul>

        <div className='form-inline my-2 my-lg-0'>
          <button
            type='button'
            className='btn'
            onClick={() => {
              dispatch(openModal('open', <Ingresar idioma={idioma} />));
            }}>
            {idioma.navbar.boton1}
          </button>
          <button
            type='button'
            className='btn'
            onClick={() => {
              dispatch(openModal('open', <Crear idioma={idioma} />));
            }}>
            {idioma.navbar.boton2}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
