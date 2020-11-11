import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import parteAction from '../actions/parteAction';
import Spinner from '../components/Spinner';
import LoginBuy from '../components/LoginBuy';
import InfoParte from '../components/InfoParte';

const Cotizacion = ({ idioma, openModal, country, parte }) => {
  const [busqueda, setBusqueda] = useState([]);

  let codpais = '';
  let monpais = '';
  if (country === 'Bolivia') {
    codpais = 'BO';
    monpais = 'Bolivia';
  } else if (country === 'Peru') {
    codpais = 'PE';
    monpais = 'Perú';
  } else if (country === 'Paraguay') {
    codpais = 'PY';
    monpais = 'Paraguay';
  } else {
    codpais = 'US';
    monpais = 'USA';
  }

  const url = `http://www.wp.daxparts.com/api/cotizacion/BuscarCodigo2/${parte}/${codpais}`;
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(url);
      if (resp.data.estado === 'NC') {
        setBusqueda(['']);
        openModal('open', <InfoParte idioma={idioma} />);
      } else {
        setBusqueda(resp.data.dato);
      }
    };

    fetchData();
  }, [url, idioma, openModal]);

  if (busqueda.length === 0) {
    return <Spinner idioma={idioma} />;
  }

  const cotizarGrid = busqueda.map((item, index) => {
    return (
      <tr key={index}>
        <th scope='row'>{item.DesRepuesto}</th>
        <td>{item.Aplicacion}</td>
        <td>{item.TipRepuesto}</td>
        <td>{item.Precio}</td>
        <td>{item.TiEntrega}</td>
        <td>
          <button
            type='button'
            className='btn'
            onClick={() => {
              openModal(
                'open',
                <LoginBuy idioma={idioma} intCodRepuesto={item.CodRepuesto} />
              );
            }}>
            {idioma.cotizacion.botonComprar}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className='container-fluid cotizacion-contenido'>
        <Helmet>
          <title>DaxParts | Cotización</title>
        </Helmet>
        <div className='container cotizacion-title'>
          <p>
            <strong>
              {idioma.cotizacion.titulo} {parte}
            </strong>
          </p>
          <p>
            <Link to='/' className='btn'>
              Nueva busqueda
            </Link>
          </p>
        </div>

        <div className='container cotizacion-table'>
          <div className='table-responsive'>
            <table className='table table-striped table-bordered'>
              <thead className='table-cells thead-dark'>
                <tr>
                  <th className='title-cells' scope='col'>
                    {idioma.cotizacion.tabla.col1}
                  </th>
                  <th className='title-cells' scope='col'>
                    {idioma.cotizacion.tabla.col2}
                  </th>
                  <th className='title-cells' scope='col'>
                    {idioma.cotizacion.tabla.col3}
                  </th>
                  <th scope='col'>
                    {idioma.cotizacion.tabla.col4} - {monpais}
                  </th>
                  <th scope='col'>{idioma.cotizacion.tabla.col5}</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>{cotizarGrid}</tbody>
            </table>
          </div>

          <div className='container nota-border bg-secondary'>
            <p className='nota text-white'>
              <span>{idioma.cotizacion.nota}:</span> {idioma.cotizacion.notaTexto}
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
    </>
  );
};

function mapStateToProps(state) {
  return {
    parte: state.parte,
    country: state.country,
    // idioma: state.idioma,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
      parteAction: parteAction,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cotizacion);
