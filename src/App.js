import './styles/App.css';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import countryAction from './actions/countryAction';

import Homepage from './pages/homepage';
import Empresa from './pages/empresa';
import Aprender from './pages/aprender';
import Industrias from './pages/industrias';
import Contacto from './pages/contacto';
import Tutorial from './pages/tutorial';
import Cotizacion from './pages/cotizacion';

import Navbar from './components/Navbar';
import Modal from './components/Modal';

import spanish from './text/esp.json';
import english from './text/eng.json';
import idiomaAction from './actions/idiomaAction';

function App({ country, countryAction, idiomaAction }) {
  const [language, setLanguage] = useState('Español');

  useEffect(() => {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(locationUrl).then((response) => {
      countryAction(response.data.country);
    });
  }, [country, countryAction]);

  useEffect(() => {
    idiomaAction(spanish);
    if (language !== 'Español') {
      idiomaAction(english);
    }
  }, [language, idiomaAction]);

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Router>
      <Route path='/' component={Modal} />
      <Route path='/' component={Navbar} />
      <Route
        exact
        path='/'
        render={() => {
          return (
            <Homepage language={language} onChangeLanguage={onChangeLanguage} />
          );
        }}
      />
      <Route path='/empresa' component={Empresa} />
      <Route path='/industrias' component={Industrias} />
      <Route path='/tutorial' component={Tutorial} />
      <Route path='/contacto' component={Contacto} />
      <Route path='/aprender' component={Aprender} />
      <Route path='/cotizacion' component={Cotizacion} />
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    country: state.country,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      countryAction: countryAction,
      idiomaAction: idiomaAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
