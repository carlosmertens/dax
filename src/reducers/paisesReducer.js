const initState = [
  { NomPais: 'Bolivia', CodPais: 'bo' },
  { NomPais: 'Canadá', CodPais: 'ca' },
  { NomPais: 'Chile', CodPais: 'cl' },
  { NomPais: 'Colombia', CodPais: 'co' },
  { NomPais: 'Perú', CodPais: 'pe' },
  { NomPais: 'United States', CodPais: 'us' },
  { NomPais: '<<Otros>>', CodPais: 'ot' },
];

export default (state = initState, action) => {
  if (action.type === 'PAISES_ACTION') {
    return action.payload;
  } else {
    return state;
  }
};
