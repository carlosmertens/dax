import { combineReducers } from 'redux';
import siteModal from './siteModal';
import parteReducer from './parteReducer';
import countryReducer from './countryReducer';
import paisesReducer from './paisesReducer';
import idiomaReducer from './idiomaReducer';
import marcasReducer from './marcasReducer';

const rootReducer = combineReducers({
  siteModal: siteModal,
  parte: parteReducer,
  country: countryReducer,
  paises: paisesReducer,
  idioma: idiomaReducer,
  marcas: marcasReducer,
});

export default rootReducer;
