const parte = '';

export default (state = parte, action) => {
  if (action.type === 'NRO_PARTE') {
    const newState = action.payload.parte;
    return newState;
  } else {
    return state;
  }
};
