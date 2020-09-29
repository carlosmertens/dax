export default (state = '', action) => {
  if (action.type === 'COUNTRY_USER') {
    return action.payload.country;
  } else {
    return state;
  }
};
