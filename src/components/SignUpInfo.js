import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import swal from 'sweetalert';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import LoginInfo from './LoginInfo';

const SignUpInfo = (props) => {
  const idioma = props.idioma;

  const [NomCliente, setNomCliente] = useState('');
  const [NomContacto, setNomContacto] = useState('');
  // const [NumNit, setNumNit] = useState('');
  const [CodPais, setCodPais] = useState('');
  const [CodCiudad, setCodCiudad] = useState('');
  // const [Direccion, setDireccion] = useState('');
  const [NumTel1, setNumTel1] = useState('');
  // const [NumTel2, setNumTel2] = useState('');
  const [Mail, setMail] = useState('');
  // const [NomUsuario, setNomUsuario] = useState('');
  // const [LogUsuario, setLogUsuario] = useState('');
  // const [Contrasena, setContrasena] = useState('');
  const [logged, setLogged] = useState(false);
  const [NroCotizacion, setNroCotizacion] = useState('');
  const [codcliente, setCodcliente] = useState('');
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://www.wp.daxparts.com/api/pais/listado3/${props.country}`;
      const resp = await axios.get(url);
      setPaises(resp.data.dato);
    };
    fetchData();
  }, [props.country]);

  const optionsPais = paises.map((item, index) => {
    return (
      <option key={index} value={item.NomPais}>
        {item.NomPais}
      </option>
    );
  });

  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://www.wp.daxparts.com/api/cliente/guardarCliente';
    const data = {
      IdCliente: '0',
      NomCliente: NomCliente,
      NomContacto: NomContacto,
      NumNit: '',
      CodPais: CodPais,
      CodCiudad: CodCiudad,
      Direccion: '',
      NumTel1: NumTel1,
      NumTel2: '',
      Mail: Mail,
      NomUsuario: '',
      LogUsuario: '',
      Contrasena: '',
    };
    const resp = await axios.post(url, data);

    if (resp.data.estado === 'OK') {
      setCodcliente(resp.data.dato[0].IdCliente);
      const url2 = `http://www.wp.daxparts.com/api/cotizacion/CotSinCosto/${resp.data.dato[0].IdCliente}/${props.parte}/${props.itemMarca}`;
      const resp2 = await axios.get(url2);

      if (resp2.data.estado === 'OK') {
        setNroCotizacion(resp2.data.dato[0].NroCotizacion);
        setLogged(true);
      } else {
        swal({
          title: 'Upps!!!',
          text:
            'Lo siento, no logramos conectar con la base de datos. Intentalo de nuevo!',
          icon: 'error',
        });
      }
    } else {
      swal({
        title: 'REGISTRO INCORRECTO!',
        text:
          'Lo sentimos, no pudimos conectar con la base de datos. Intentalo de nuevo!',
        icon: 'error',
      });
    }
    closeModal();
  };

  return (
    <>
      {logged ? (
        window.location.replace(
          `http://www.demo.daxparts.com/Clientes/frmCliCotDet.aspx?numcot=${NroCotizacion}&blnnu=False&codcliente=${codcliente}`
        )
      ) : (
        <>
          <div className='modal-logo d-flex justify-content-center'>
            <img src={navLogo} alt='Dax Logo' />
          </div>

          <div className='modal-body'>
            <div className='modal-header'>
              <h6 className=''>{props.idioma.ingresar.titulo}</h6>
            </div>
            <form onSubmit={handleSubmit}>
              {/* <h4>{idioma.crear.titulo1}</h4> */}
              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.empresa}
                  onChange={(e) => setNomCliente(e.target.value)}
                  value={NomCliente}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.nombre}
                  onChange={(e) => setNomContacto(e.target.value)}
                  value={NomContacto}
                />
              </div>

              {/* <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.numero}
                  onChange={(e) => setNumNit(e.target.value)}
                  value={NumNit}
                />
              </div> */}

              <div className='form-group d-flex justify-content-center'>
                <select onChange={(e) => setCodPais(e.target.value)}>
                  {optionsPais}
                </select>
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.ciudad}
                  onChange={(e) => setCodCiudad(e.target.value)}
                  value={CodCiudad}
                />
              </div>

              {/* <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  value={Direccion}
                />
              </div> */}

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.telefono1}
                  onChange={(e) => setNumTel1(e.target.value)}
                  value={NumTel1}
                  required
                />
              </div>

              {/* <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.telefono2}
                  onChange={(e) => setNumTel2(e.target.value)}
                  value={NumTel2}
                />
              </div> */}

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='email'
                  className='form-control mr-sm-2'
                  placeholder='Email'
                  onChange={(e) => setMail(e.target.value)}
                  value={Mail}
                  required
                />
              </div>

              {/* <h4>{idioma.crear.titulo2}</h4> */}

              {/* <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.nomUsuario}
                  onChange={(e) => setNomUsuario(e.target.value)}
                  value={NomUsuario}
                />
              </div> */}

              {/* <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.usuario}
                  onChange={(e) => setLogUsuario(e.target.value)}
                  value={LogUsuario}
                  required
                />
              </div> */}

              {/* <div className='form-group d-flex justify-content-center'>
                <input
                  type='password'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.password1}
                  onChange={(e) => setContrasena(e.target.value)}
                  value={Contrasena}
                  required
                />
              </div> */}

              <div className='boton-form'>
                <button type='submit' className='btn'>
                  {idioma.datosBuscar.boton}
                </button>
              </div>
            </form>
          </div>

          <div className='modal-footer d-flex justify-content-center'>
            <div>
              {idioma.crear.cambiarModal}{' '}
              <span
                className='pointer'
                onClick={() => {
                  props.openModal(
                    'open',
                    <LoginInfo
                      idioma={props.idioma}
                      itemMarca={props.itemMarca}
                      parte={props.parte}
                    />
                  );
                }}
                style={{ color: '#fca728' }}>
                {idioma.crear.cambiarEnlace}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpInfo);
