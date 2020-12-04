import { combineReducers } from 'redux';
import siteModal from './siteModal';
import parteReducer from './parteReducer';
import countryReducer from './countryReducer';
import paisesReducer from './paisesReducer';
import idiomaReducer from './idiomaReducer';
import marcasReducer from './marcasReducer';
import sesionReducer from './sesionReducer';

const rootReducer = combineReducers({
  siteModal: siteModal,
  parte: parteReducer,
  country: countryReducer,
  paises: paisesReducer,
  idioma: idiomaReducer,
  marcas: marcasReducer,
  sesion: sesionReducer,
});

export default rootReducer;
