const initState = '';
export default (state = initState, action) => {
  if (action.type === 'NRO_PARTE') {
    return action.payload.parte;
  } else {
    return state;
  }
};
