import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
// import Spinner from '../components/Spinner';
import axios from 'axios';
import BuyPart from '../components/BuyPart';

const Cotizacion = (props) => {
  const [busqueda, setBusqueda] = useState([]);

  let codpais = '';
  if (props.country === 'Bolivia') {
    codpais = 'BO';
  } else if (props.country === 'Peru') {
    codpais = 'PE';
  } else if (props.country === 'Paraguay') {
    codpais = 'PY';
  } else {
    codpais = 'US';
  }

  useEffect(() => {
    const apiUrl = `http://www.wp.daxparts.com/api/cotizacion/BuscarCodigo2/${props.parte}/${codpais}`;
    const fetchData = async () => {
      const resp = await axios.get(apiUrl);
      setBusqueda(resp.data.dato);
    };

    fetchData();
  }, [props.parte, codpais]);

  // console.log(busqueda);

  // if (busqueda.length === 0) {
  //   return <Spinner idioma={idioma} />;
  // }

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
                <BuyPart
                  idioma={props.idioma}
                  intCodRepuesto={item.CodRepuesto}
                />
              );
            }}>
            {props.idioma.cotizacion.botonComprar}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className='container-fluid cotizacion-contenido'>
      <div className='container cotizacion-title'>
        <p>
          {props.idioma.cotizacion.titulo} {props.parte}
        </p>
      </div>

      <div className='container cotizacion-table'>
        <div className='table-responsive'>
          <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>{props.idioma.cotizacion.tabla.col1}</th>
                <th scope='col'>{props.idioma.cotizacion.tabla.col2}</th>
                <th scope='col'>{props.idioma.cotizacion.tabla.col3}</th>
                <th scope='col'>{props.idioma.cotizacion.tabla.col4}</th>
                <th scope='col'>{props.idioma.cotizacion.tabla.col5}</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>{cotizarGrid}</tbody>
          </table>
        </div>

        <div className='container bg-secondary'>
          <p className='nota text-white'>
            <span>{props.idioma.cotizacion.nota}</span>{' '}
            {props.idioma.cotizacion.notaTexto}
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='col-md-8 offset-md-2 bg-dark beneficios'>
          <div className='container row'>
            <h4 className='titulo-jumbo'>
              {props.idioma.cotizacion.tituloComprar}
            </h4>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <p className='beneficios-jumbo'>
                {props.idioma.cotizacion.beneficio1}
              </p>
              <p className='beneficios-jumbo'>
                {props.idioma.cotizacion.beneficio2}
              </p>
              <p className='beneficios-jumbo'>
                {props.idioma.cotizacion.beneficio3}
              </p>
            </div>
            <div className='col-sm'>
              <p className='beneficios-jumbo'>
                {props.idioma.cotizacion.beneficio4}
              </p>
              <p className='beneficios-jumbo'>
                {props.idioma.cotizacion.beneficio5}
              </p>
              <p className='beneficios-jumbo'>
                {props.idioma.cotizacion.beneficio6}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    parte: state.parte,
    country: state.country,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cotizacion);
