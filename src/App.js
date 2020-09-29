import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from 'axios';
import './styles/App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/homepage';
import Empresa from './pages/empresa';
import Aprender from './pages/aprender';
import Industrias from './pages/industrias';
import Contacto from './pages/contacto';
import Tutorial from './pages/tutorial';
import Cotizacion from './pages/cotizacion';
import Modal from './components/Modal';
import spanish from './text/esp.json';
import english from './text/eng.json';

import Panel from './pages/panelCliente';
import Comprar from './pages/comprarParte';

function App() {
  const [language, setLanguage] = useState('Español');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(locationUrl).then((response) => {
      const userCountry = response.data.country;
      // console.log('User is visiting from:', userCountry);
      setCountry(userCountry);
    });
  }, []);

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  let idioma = spanish;
  if (language !== 'Español') {
    idioma = english;
  }

  return (
    <Router>
      <Route path='/' component={Modal} idioma={idioma} />
      <Route
        path='/'
        render={() => {
          return <Navbar idioma={idioma} />;
        }}
      />
      <Route
        exact
        path='/'
        render={() => {
          return (
            <Homepage
              idioma={idioma}
              language={language}
              country={country}
              handleLanguage={handleLanguage}
            />
          );
        }}
      />
      <Route
        exact
        path='/empresa'
        render={() => {
          return <Empresa idioma={idioma} />;
        }}
      />
      <Route
        exact
        path='/industrias'
        render={() => {
          return <Industrias idioma={idioma} />;
        }}
      />
      <Route
        exact
        path='/aprender'
        render={() => {
          return <Aprender idioma={idioma} />;
        }}
      />

      <Route
        exact
        path='/contacto'
        render={() => {
          return <Contacto idioma={idioma} />;
        }}
      />
      <Route
        exact
        path='/tutorial'
        render={() => {
          return <Tutorial idioma={idioma} />;
        }}
      />
      <Route
        exact
        path='/cotizacion'
        render={() => {
          return <Cotizacion idioma={idioma} country={country} />;
        }}
      />
      <Route path='/panel' component={Panel} />
      <Route path='/comprar' component={Comprar} />
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    parte: state.parte,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      // openModal: openModal,
      // parteAction: parteAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
