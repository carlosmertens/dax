export default (state = '', action) => {
  if (action.type === 'NRO_PARTE') {
    return action.payload.parte;
  } else {
    return state;
  }
};
