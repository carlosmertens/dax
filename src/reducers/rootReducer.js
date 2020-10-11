import { combineReducers } from 'redux';
import siteModal from './siteModal';
import authReducer from './authReducer';
import parteReducer from './parteReducer';
import countryReducer from './countryReducer';
import idiomaReducer from './idiomaReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  siteModal: siteModal,
  parte: parteReducer,
  country: countryReducer,
  idioma: idiomaReducer,
});

export default rootReducer;
