import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import openModal from '../actions/openModal';
import Spinner from '../components/Spinner';
import LoginBuy from '../components/LoginBuy';
import InfoParte from '../components/InfoParte';

const Cotizacion = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const parte = useSelector((state) => state.parte);
  const idioma = useSelector((state) => state.idioma);
  const [busqueda, setBusqueda] = useState([]);
  const [showNew, setShowNew] = useState(false);
  const [showButton, setShowButton] = useState(true);

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

  useEffect(() => {
    const url = 'https://www.wp.daxparts.com/api/cotizacion/BuscarCodigo3';
    const data = {
      codpais: codpais,
      nroparte: `${parte}`,
    };
    const fetchData = async () => {
      const resp = await axios.post(url, data);
      if (resp.data.estado === 'NC') {
        setBusqueda(['']);
        setShowButton(false);
        dispatch(openModal('open', <InfoParte idioma={idioma} />));
      } else {
        setBusqueda(resp.data.dato);
        if (resp.data.dato[0].NroParte !== parte) {
          setShowNew(true);
        }
      }
    };
    fetchData();
  }, [idioma, dispatch, codpais, parte]);

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
          {showButton ? (
            <button
              type='button'
              className='btn btn-comprar'
              onClick={() => {
                dispatch(
                  openModal(
                    'open',
                    <LoginBuy idioma={idioma} intCodRepuesto={item.CodRepuesto} />
                  )
                );
              }}>
              {idioma.cotizacion.botonComprar}
            </button>
          ) : (
            <button className='btn disabled'>
              {idioma.cotizacion.botonComprar}
            </button>
          )}
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <div className='container-fluid cotizacion-contenido'>
        <Helmet>
          <title>DaxParts | Cotización</title>
        </Helmet>
        <div className='container cotizacion-title'>
          <p>
            <strong>
              {idioma.cotizacion.titulo} {parte}{' '}
              {showNew ? `⟹ ${busqueda[0].NroParte}` : ''}
            </strong>
          </p>
          <div style={{ paddingBottom: '10px' }}>
            <Link to='/' className='btn btn-nueva-busqueda'>
              {idioma.cotizacion.botonNuevo}
            </Link>
          </div>
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
    </React.Fragment>
  );
};

export default Cotizacion;
