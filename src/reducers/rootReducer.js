import { combineReducers } from 'redux';
import siteModal from './siteModal';
import authReducer from './authReducer';
import parteReducer from './parteReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  siteModal: siteModal,
  parte: parteReducer,
  country: countryReducer,
});

export default rootReducer;
