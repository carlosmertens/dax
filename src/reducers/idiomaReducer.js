import spanish from '../text/esp.json';

const initState = spanish;

export default (state = initState, action) => {
  if (action.type === 'IDIOMA_ACTION') {
    return action.payload;
  } else {
    return state;
  }
};
