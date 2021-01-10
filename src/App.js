import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import countryAction from './actions/countryAction';
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
      <Route path='/' component={Modal} />

      <Route path='/'>
        <Navbar />
      </Route>

      <Switch>
        <Route exact path='/'>
          <Homepage language={language} onChangeLanguage={onChangeLanguage} />
        </Route>

        <Route exact path='/empresa'>
          <Empresa />
        </Route>

        <Route exact path='/industrias'>
          <Industrias />
        </Route>

        <Route exact path='/contactos'>
          <Contactos />
        </Route>

        <Route exact path='/tutorial'>
          <Tutorial />
        </Route>

        <Route exact path='/cotizacion'>
          <Cotizacion />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
