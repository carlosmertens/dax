import { combineReducers } from 'redux';
import siteModal from './siteModal';
import authReducer from './authReducer';
import parteReducer from './parteReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  siteModal: siteModal,
  parte: parteReducer,
});

export default rootReducer;
