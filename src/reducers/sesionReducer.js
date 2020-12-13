const initState = '0';
export default (state = initState, action) => {
  if (action.type === 'SESION_ACTION') {
    return action.payload.sesion;
  } else {
    return state;
  }
};
