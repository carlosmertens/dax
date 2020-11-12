export default (state = [], action) => {
  if (action.type === 'PAISES_ACTION') {
    return action.payload;
  } else {
    return state;
  }
};
