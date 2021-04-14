import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import openModal from '../actions/openModal';
import navLogoWhite from '../img/logoNavWhite.png';
import Ingresar from './Login';
import Crear from './SignUp';

const Navbar = () => {
  const dispatch = useDispatch();
  const idioma = useSelector((state) => state.idioma);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="btn-home navbar-brand">
        <NavLink to="/">
          <img src={navLogoWhite} alt="Dax Logo" />
        </NavLink>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink
              to="/empresa"
              className="nav-link text-white"
              activeClassName="Link-active-style"
            >
              {idioma.navbar.enlace1}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/industrias"
              className="nav-link text-white"
              activeClassName="Link-active-style"
            >
              {idioma.navbar.enlace2}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/tutorial"
              className="nav-link text-white"
              activeClassName="Link-active-style"
            >
              {idioma.navbar.enlace3}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contactos"
              className="nav-link text-white"
              activeClassName="Link-active-style"
            >
              {idioma.navbar.enlace4}
            </NavLink>
          </li>
        </ul>

        <div className="form-inline my-2 my-lg-0">
          <button
            type="button"
            className="btn-ingresar-home btn"
            onClick={() => {
              dispatch(openModal('open', <Ingresar idioma={idioma} />));
            }}
          >
            {idioma.navbar.boton1}
          </button>
          <button
            type="button"
            className="btn-crear-cuenta-home btn"
            onClick={() => {
              dispatch(openModal('open', <Crear idioma={idioma} />));
            }}
          >
            {idioma.navbar.boton2}
          </button>
        </div>
      </div>
      <style jsx="true">
        {`
          .Link-active-style {
            color: #fca728 !important;
          }
          .nav-link:hover {
            color: #fca728 !important;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
