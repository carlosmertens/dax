const initState = [
  { NomMarca: 'Caterpillar', CodMarca: '1' },
  { NomMarca: 'John Deere', CodMarca: '16' },
  { NomMarca: 'Komatsu', CodMarca: '4' },
  { NomMarca: 'Cummins', CodMarca: '6' },
  { NomMarca: '<<Otros>>', CodMarca: '0' },
];

export default (state = initState, action) => {
  if (action.type === 'MARCAS_ACTION') {
    return action.payload;
  } else {
    return state;
  }
};
