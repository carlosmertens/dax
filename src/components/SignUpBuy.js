import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import LoginBuy from './LoginBuy';

const SignUpBuy = (props) => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const paises = useSelector((state) => state.paises);
  const parte = useSelector((state) => state.parte);
  const sesion = useSelector((state) => state.sesion);
  const idioma = props.idioma;
  const [NomCliente, setNomCliente] = useState('');
  const [NomContacto, setNomContacto] = useState('');
  const [CodPais, setCodPais] = useState(country);
  const [CodCiudad, setCodCiudad] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [NumTel1, setNumTel1] = useState('');
  const [NumTel2, setNumTel2] = useState('');
  const [Mail, setMail] = useState('');
  const [NomUsuario, setNomUsuario] = useState('');
  const [LogUsuario, setLogUsuario] = useState('');
  const [Contrasena, setContrasena] = useState('');
  const [logged, setLogged] = useState(false);
  const [NroCotizacion, setNroCotizacion] = useState('');
  const [codcliente, setCodcliente] = useState('');

  const closeModal = () => {
    dispatch(openModal('closed', ''));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://www.wp.daxparts.com/api/cliente/guardarCliente';
    const data = {
      IdCliente: '0',
      NomCliente: NomCliente,
      NomContacto: NomContacto,
      NumNit: '',
      CodPais: CodPais,
      CodCiudad: CodCiudad,
      Direccion: Direccion,
      NumTel1: NumTel1,
      NumTel2: NumTel2,
      Mail: Mail,
      NomUsuario: NomUsuario,
      LogUsuario: LogUsuario,
      Contrasena: Contrasena,
    };
    const resp = await axios.post(url, data);
    if (resp.data.estado === 'OK') {
      setCodcliente(resp.data.dato[0].IdCliente);
      const url2 = 'https://www.wp.daxparts.com/api/cotizacion/CrearCot2';
      const data2 = {
        codcliente: resp.data.dato[0].IdCliente,
        codrepuesto: props.intCodRepuesto,
        nroparte: `${parte}`,
      };
      const resp2 = await axios.post(url2, data2);
      if (resp2.data.estado === 'OK') {
        setNroCotizacion(resp2.data.dato[0].NroCotizacion);
        const url3 = `https://www.wp.daxparts.com/api/cotizacion/BitModVisita/${sesion}/${resp.data.dato[0].IdCliente}`;
        await axios.get(url3);
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
    <React.Fragment>
      {logged ? (
        window.location.replace(
          `https://www.dxc.daxparts.com/Clientes/frmCliCotDet.aspx?numcot=${NroCotizacion}&blnnu=False&codcliente=${codcliente}`
        )
      ) : (
        <>
          <div className='modal-logo d-flex justify-content-center'>
            <img src={navLogo} alt='Dax Logo' />
          </div>

          <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <h4>{idioma.crear.titulo1}</h4>
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
                  required
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <select
                  className='custom-select'
                  value={CodPais}
                  onChange={(e) => setCodPais(e.target.value)}>
                  {paises.map((option) => (
                    <option value={option.NomPais} key={option.CodPais}>
                      {option.NomPais}
                    </option>
                  ))}
                </select>
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.ciudad}
                  onChange={(e) => setCodCiudad(e.target.value)}
                  value={CodCiudad}
                  required
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  value={Direccion}
                />
              </div>

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

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.telefono2}
                  onChange={(e) => setNumTel2(e.target.value)}
                  value={NumTel2}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='email'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.email}
                  onChange={(e) => setMail(e.target.value)}
                  value={Mail}
                  required
                />
              </div>

              <h4>{idioma.crear.titulo2}</h4>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.nomUsuario}
                  onChange={(e) => setNomUsuario(e.target.value)}
                  value={NomUsuario}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.usuario}
                  onChange={(e) => setLogUsuario(e.target.value)}
                  value={LogUsuario}
                  required
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='password'
                  className='form-control mr-sm-2'
                  placeholder={idioma.crear.password1}
                  onChange={(e) => setContrasena(e.target.value)}
                  value={Contrasena}
                  required
                />
              </div>

              <div className='boton-form'>
                <button type='submit' className='crear-cuenta-comprar btn'>
                  {idioma.crear.botonCrear}
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
                  dispatch(
                    openModal(
                      'open',
                      <LoginBuy
                        idioma={idioma}
                        intCodRepuesto={props.intCodRepuesto}
                      />
                    )
                  );
                }}
                style={{ color: '#fca728' }}>
                {idioma.crear.cambiarEnlace}
              </span>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default SignUpBuy;
