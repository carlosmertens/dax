import './styles/App.css';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Spinner from './components/Spinner';
import countryAction from './actions/countryAction';
import paisesAction from './actions/paisesAction';
import marcasAction from './actions/marcasAction';
// import Homepage from './pages/homepage';
// import Empresa from './pages/empresa';
// import Industrias from './pages/industrias';
// import Contacto from './pages/contacto';
// import Tutorial from './pages/tutorial';
// import Cotizacion from './pages/cotizacion';
// import Navbar from './components/Navbar';
// import Modal from './components/Modal';
import spanish from './text/esp.json';
import english from './text/eng.json';

const Homepage = lazy(() => import('./pages/homepage'));
const Empresa = lazy(() => import('./pages/empresa'));
const Industrias = lazy(() => import('./pages/industrias'));
const Contacto = lazy(() => import('./pages/contacto'));
const Tutorial = lazy(() => import('./pages/tutorial'));
const Cotizacion = lazy(() => import('./pages/cotizacion'));
const Navbar = lazy(() => import('./components/Navbar'));
const Modal = lazy(() => import('./components/Modal'));

function App({ country, countryAction, paisesAction, marcasAction }) {
  const [language, setLanguage] = useState('Español');

  let idioma = spanish;
  if (language !== 'Español') {
    idioma = english;
  }

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(locationUrl).then((response) => {
      countryAction(response.data.country);
    });
  }, [countryAction]);

  useEffect(() => {
    const url = `http://www.wp.daxparts.com/api/pais/listado3/${country}`;
    axios.get(url).then((response) => {
      paisesAction(response.data.dato);
    });
  }, [paisesAction, country]);

  useEffect(() => {
    const url = 'http://www.wp.daxparts.com/api/marca/listado3';
    axios.get(url).then((response) => {
      marcasAction(response.data.dato);
    });
  }, [marcasAction]);

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Route path='/' component={Modal} />

        <Route path='/'>
          <Navbar idioma={idioma} />
        </Route>

        <Route exact path='/'>
          <Homepage
            idioma={idioma}
            language={language}
            onChangeLanguage={onChangeLanguage}
          />
        </Route>

        <Route exact path='/empresa'>
          <Empresa idioma={idioma} />
        </Route>

        <Route exact path='/industrias'>
          <Industrias idioma={idioma} />
        </Route>

        <Route exact path='/contacto'>
          <Contacto idioma={idioma} />
        </Route>

        <Route exact path='/tutorial'>
          <Tutorial idioma={idioma} />
        </Route>

        <Route exact path='/cotizacion'>
          <Cotizacion idioma={idioma} />
        </Route>
      </Suspense>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    country: state.country,
    paises: state.paises,
    marcas: state.marcas,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      countryAction: countryAction,
      paisesAction: paisesAction,
      marcasAction: marcasAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
