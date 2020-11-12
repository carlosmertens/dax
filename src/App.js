import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import countryAction from './actions/countryAction';
import paisesAction from './actions/paisesAction';
import marcasAction from './actions/marcasAction';
import Homepage from './pages/homepage';
import Empresa from './pages/empresa';
import Industrias from './pages/industrias';
import Contacto from './pages/contacto';
import Tutorial from './pages/tutorial';
import Cotizacion from './pages/cotizacion';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import spanish from './text/esp.json';
import english from './text/eng.json';
// import idiomaAction from './actions/idiomaAction';

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
    const fetchData = async () => {
      const url = `http://www.wp.daxparts.com/api/pais/listado3/${country}`;
      const resp = await axios.get(url);
      paisesAction(resp.data.dato);
    };
    fetchData();
  }, [paisesAction, country]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://www.wp.daxparts.com/api/marca/listado';
      const resp = await axios.get(url);
      marcasAction(resp.data.dato);
    };
    fetchData();
  }, [marcasAction]);

  // useEffect(() => {
  //   idiomaAction(spanish);
  //   if (language !== 'Español') {
  //     idiomaAction(english);
  //   }
  // }, [language, idiomaAction]);

  return (
    <Router>
      <Route path='/' component={Modal} />
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
              onChangeLanguage={onChangeLanguage}
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
          return <Cotizacion idioma={idioma} />;
        }}
      />
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    country: state.country,
    paises: state.paises,
    marcas: state.marcas,
    // idioma: state.idioma,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      countryAction: countryAction,
      paisesAction: paisesAction,
      marcasAction: marcasAction,
      // idiomaAction: idiomaAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
