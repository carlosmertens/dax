export default (e) => {
  console.log(e);
  return {
    type: 'NRO_PARTE',
    payload: {
      parte: e,
    },
  };
};
