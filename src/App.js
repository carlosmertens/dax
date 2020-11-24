import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import countryAction from './actions/countryAction';
import paisesAction from './actions/paisesAction';
import marcasAction from './actions/marcasAction';
import idiomaAction from './actions/idiomaAction';
import Homepage from './pages/homepage';
import Empresa from './pages/empresa';
import Industrias from './pages/industrias';
import Contactos from './pages/contactos';
import Tutorial from './pages/tutorial';
import Cotizacion from './pages/cotizacion';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import spanish from './text/esp.json';
import english from './text/eng.json';

function App() {
  const country = useSelector((state) => state.country);
  const idioma = useSelector((state) => state.idioma);
  const dispatch = useDispatch();
  const [language, setLanguage] = useState('Español');

  if (language !== 'Español') {
    dispatch(idiomaAction(english));
  } else {
    dispatch(idiomaAction(spanish));
  }

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    const fetchData = async () => {
      const response = await axios.get(locationUrl);
      dispatch(countryAction(response.data.country));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const countriesUrl = `http://www.wp.daxparts.com/api/pais/listado3/${country}`;
    const fetchData = async () => {
      const response = await axios.get(countriesUrl);
      dispatch(paisesAction(response.data.dato));
      console.log(response.data.dato);
    };
    fetchData();
  }, [country, dispatch]);

  useEffect(() => {
    const brandsUrl = 'http://www.wp.daxparts.com/api/marca/listado3';
    const fetchData = async () => {
      const response = await axios.get(brandsUrl);
      dispatch(marcasAction(response.data.dato));
      console.log(response.data.dato);
    };
    fetchData();
  }, [dispatch]);

  return (
    <Router>
      <Route path='/' component={Modal} />

      <Route path='/'>
        <Navbar idioma={idioma} />
      </Route>

      <Route exact path='/'>
        <Homepage language={language} onChangeLanguage={onChangeLanguage} />
      </Route>

      <Route exact path='/empresa'>
        <Empresa idioma={idioma} />
      </Route>

      <Route exact path='/industrias'>
        <Industrias idioma={idioma} />
      </Route>

      <Route exact path='/contactos'>
        <Contactos idioma={idioma} />
      </Route>

      <Route exact path='/tutorial'>
        <Tutorial idioma={idioma} />
      </Route>

      <Route exact path='/cotizacion'>
        <Cotizacion />
      </Route>
    </Router>
  );
}

export default App;
