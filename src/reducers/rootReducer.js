import { combineReducers } from 'redux';
import siteModal from './siteModal';
import authReducer from './authReducer';
import parteReducer from './parteReducer';
import countryReducer from './countryReducer';
import paisesReducer from './paisesReducer';
import idiomaReducer from './idiomaReducer';
import marcasReducer from './marcasReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  siteModal: siteModal,
  parte: parteReducer,
  country: countryReducer,
  paises: paisesReducer,
  idioma: idiomaReducer,
  marcas: marcasReducer,
});

export default rootReducer;
