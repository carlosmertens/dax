export default (obj) => {
  return {
    type: 'SESION_ACTION',
    payload: {
      sesion: obj,
    },
  };
};
