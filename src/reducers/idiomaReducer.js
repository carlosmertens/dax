export default (state = {}, action) => {
  if (action.type === 'IDIOMA_ACTION') {
    return action.payload;
  } else {
    return state;
  }
};
