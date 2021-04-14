import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import countryAction from './actions/countryAction';
import idiomaAction from './actions/idiomaAction';
import Navbar from './components/Navbar';
import WhatsApp from './components/WhatsApp';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import spanish from './text/esp.json';
import english from './text/eng.json';

import Homepage from './pages/homepage';
// const Homepage = lazy(() => import('./pages/homepage'));
const Empresa = lazy(() => import('./pages/empresa'));
const Industrias = lazy(() => import('./pages/industrias'));
const Contactos = lazy(() => import('./pages/contactos'));
const Tutorial = lazy(() => import('./pages/tutorial'));
const Cotizacion = lazy(() => import('./pages/cotizacion'));

function App() {
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

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Route path="/" component={Modal} />
        <Route path="" component={WhatsApp} />
        <Route path="/">
          <Navbar />
        </Route>
        <Switch>
          <Route exact path="/">
            <Homepage language={language} onChangeLanguage={onChangeLanguage} />
          </Route>

          <Route exact path="/empresa">
            <Empresa />
          </Route>

          <Route exact path="/industrias">
            <Industrias />
          </Route>

          <Route exact path="/contactos">
            <Contactos />
          </Route>

          <Route exact path="/tutorial">
            <Tutorial />
          </Route>

          <Route exact path="/cotizacion">
            <Cotizacion />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
