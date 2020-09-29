export default (e) => {
  return {
    type: 'COUNTRY_USER',
    payload: {
      country: e,
    },
  };
};
