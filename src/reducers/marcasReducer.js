export default (state = [], action) => {
  if (action.type === 'MARCAS_ACTION') {
    return action.payload;
  } else {
    return state;
  }
};
