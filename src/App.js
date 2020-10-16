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
import countryAction from './actions/countryAction';
import idiomaAction from './actions/idiomaAction';

function App(props) {
  const [language, setLanguage] = useState('Español');
  // const [country, setCountry] = useState('');
  console.log(props);

  useEffect(() => {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(locationUrl).then((response) => {
      const userCountry = response.data.country;
      // console.log('User is visiting from:', userCountry);
      // setCountry(userCountry);
      props.countryAction(userCountry);
    });
  }, [props]);

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  // let idioma = spanish;
  // if (language !== 'Español') {
  //   idioma = english;
  // }

  useEffect(() => {
    props.idiomaAction(spanish);
    if (language !== 'Español') {
      props.idiomaAction(english);
    }
  }, [language]);

  return (
    <Router>
      <Route path='/' component={Modal} idioma={props.idioma} />
      <Route path='/' component={Navbar} />
      <Route
        exact
        path='/'
        render={() => {
          return <Homepage language={language} handleLanguage={handleLanguage} />;
        }}
      />
      <Route
        exact
        path='/empresa'
        render={() => {
          return <Empresa idioma={props.idioma} />;
        }}
      />
      <Route
        exact
        path='/industrias'
        render={() => {
          return <Industrias idioma={props.idioma} />;
        }}
      />
      <Route
        exact
        path='/aprender'
        render={() => {
          return <Aprender idioma={props.idioma} />;
        }}
      />

      <Route
        exact
        path='/contacto'
        render={() => {
          return <Contacto idioma={props.idioma} />;
        }}
      />
      <Route
        exact
        path='/tutorial'
        render={() => {
          return <Tutorial idioma={props.idioma} />;
        }}
      />
      <Route
        exact
        path='/cotizacion'
        render={() => {
          return <Cotizacion idioma={props.idioma} />;
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
    country: state.country,
    idioma: state.idioma,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      // openModal: openModal,
      // parteAction: parteAction,
      countryAction: countryAction,
      idiomaAction: idiomaAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
