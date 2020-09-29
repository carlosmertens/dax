export default (state = '', action) => {
  if (action.type === 'COUNTRY') {
    return action.payload.country;
  } else {
    return state;
  }
};
