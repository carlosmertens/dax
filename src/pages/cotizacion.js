import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import Spinner from '../components/Spinner';
import axios from 'axios';
import Ingresar from '../components/Login';

const Cotizacion = (props) => {
  const idioma = { ...props.idioma };
  const strNroParte = props.strNroParte;
  const codpais = props.codpais;
  const [busqueda, setBusqueda] = useState([]);

  // Obtener busqueda de la API
  // Fetch data from API
  useEffect(() => {
    const apiUrl = `http://www.wp.daxparts.com/api/cotizacion/BuscarCodigo2/${strNroParte}/${codpais}`;
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      setBusqueda(response.data.dato);
    };

    fetchData();
  }, [strNroParte, codpais]);

  console.log(codpais);
  console.log(strNroParte);

  // Mientras "buscar state" este vacio, spinner va a correr
  // Run spinner while the API return the search
  if (busqueda.length === 0) {
    return <Spinner idioma={props.idioma} />;
  }

  // Bucle el resultado y formar las lineas de la tabla
  // Map through the API results
  const cotizarGrid = busqueda.map((item, index) => {
    return (
      <tr key={index}>
        <th scope='row'>{item.DesRepuesto}</th>
        <td>{item.Aplicacion}</td>
        <td>{item.TipRepuesto}</td>
        <td>{item.Precio} USD</td>
        <td>{item.TiEntrega}</td>
        <td>
          <button
            type='button'
            className='btn'
            onClick={() => {
              props.openModal(
                'open',
                <Ingresar idioma={props.idioma} codigo={item.CodRepuesto} />
              );
            }}>
            {idioma.cotizacion.botonComprar}
          </button>
        </td>
      </tr>
    );
  });

  // Retorno del componente Cotizacion
  // Return for the component Cotizacion
  return (
    <div className='container-fluid cotizacion-contenido'>
      <div className='container cotizacion-title'>
        <p>
          {idioma.cotizacion.titulo} {strNroParte}
        </p>
      </div>

      <div className='container cotizacion-table'>
        <div className='table-responsive'>
          <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>{idioma.cotizacion.tabla.col1}</th>
                <th scope='col'>{idioma.cotizacion.tabla.col2}</th>
                <th scope='col'>{idioma.cotizacion.tabla.col3}</th>
                <th scope='col'>{idioma.cotizacion.tabla.col4}</th>
                <th scope='col'>{idioma.cotizacion.tabla.col5}</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>{cotizarGrid}</tbody>
          </table>
        </div>

        <div className='container bg-secondary'>
          <p className='nota text-white'>
            <span>{idioma.cotizacion.nota}</span> {idioma.cotizacion.notaTexto}
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='col-md-8 offset-md-2 bg-dark beneficios'>
          <div className='container row'>
            <h4 className='titulo-jumbo'>{idioma.cotizacion.tituloComprar}</h4>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <p className='beneficios-jumbo'>{idioma.cotizacion.beneficio1}</p>
              <p className='beneficios-jumbo'>{idioma.cotizacion.beneficio2}</p>
              <p className='beneficios-jumbo'>{idioma.cotizacion.beneficio3}</p>
            </div>
            <div className='col-sm'>
              <p className='beneficios-jumbo'>{idioma.cotizacion.beneficio4}</p>
              <p className='beneficios-jumbo'>{idioma.cotizacion.beneficio5}</p>
              <p className='beneficios-jumbo'>{idioma.cotizacion.beneficio6}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Funcion para llamar el modal de Ingresar
// Function to call up modal Ingresar
function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(null, mapDispatchToProps)(Cotizacion);