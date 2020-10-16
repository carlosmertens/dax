import React, { useEffect } from 'react';
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
// import spanish from './text/esp.json';
// import english from './text/eng.json';

import Panel from './pages/panelCliente';
import Comprar from './pages/comprarParte';
import countryAction from './actions/countryAction';
import idiomaAction from './actions/idiomaAction';

function App({ country, idioma, countryAction }) {
  // const [language, setLanguage] = useState('Español');

  // console.log(props);

  useEffect(() => {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(locationUrl).then((response) => {
      countryAction(response.data.country);
      // const userCountry = response.data.country;
      console.log('User is visiting from:', country);
    });
  }, [country, countryAction]);

  // const handleLanguage = (e) => {
  //   setLanguage(e.target.value);
  // };

  // let idioma = spanish;
  // if (language !== 'Español') {
  //   idioma = english;
  // }

  // useEffect(() => {
  //   props.idiomaAction(spanish);
  //   if (language !== 'Español') {
  //     props.idiomaAction(english);
  //     // console.log('idioma component call');
  //   }
  // }, [language]);

  return (
    <Router>
      <Route path='/' component={Modal} idioma={idioma} />
      <Route path='/' component={Navbar} />
      {/* <Route
        exact
        path='/'
        render={() => {
          return <Homepage language={language} handleLanguage={handleLanguage} />;
        }}
      /> */}
      <Route exact path='/' component={Homepage} />
      <Route path='/empresa' component={Empresa} />
      <Route path='/industrias' component={Industrias} />
      <Route path='/tutorial' component={Tutorial} />
      <Route path='/contacto' component={Contacto} />
      <Route path='/aprender' component={Aprender} />
      <Route path='/cotizacion' component={Cotizacion} />
      <Route path='/panel' component={Panel} />
      <Route path='/comprar' component={Comprar} />
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    country: state.country,
    idioma: state.idioma,
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
