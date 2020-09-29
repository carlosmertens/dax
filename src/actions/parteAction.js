export default (e) => {
  return {
    type: 'NRO_PARTE',
    payload: {
      parte: e,
    },
  };
};
