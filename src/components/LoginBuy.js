import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import openModal from '../actions/openModal';
import axios from 'axios';
import swal from 'sweetalert';
import navLogo from '../img/logoNav.png';
import SignUpBuy from './SignUpBuy';

const LoginBuy = (props) => {
  const dispatch = useDispatch();
  const parte = useSelector((state) => state.parte);
  const sesion = useSelector((state) => state.sesion);
  const [logusuario, setLogusuario] = useState('');
  const [clausuario, setClausuario] = useState('');
  const [logged, setLogged] = useState(false);
  const [NroCotizacion, setNroCotizacion] = useState('');
  const [codcliente, setCodcliente] = useState('');

  const closeModal = () => {
    dispatch(openModal('closed', ''));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://www.wp.daxparts.com/api/sesion/validar';
    const data = { logusuario, clausuario };
    const resp = await axios.post(url, data);
    if (resp.data.estado === 'OK') {
      setCodcliente(resp.data.dato[0].logusuario);
      const url2 = 'https://www.wp.daxparts.com/api/cotizacion/CrearCot2';
      const data2 = {
        codcliente: resp.data.dato[0].logusuario,
        codrepuesto: props.intCodRepuesto,
        nroparte: `${parte}`,
      };
      const resp2 = await axios.post(url2, data2);
      if (resp2.data.estado === 'OK') {
        setNroCotizacion(resp2.data.dato[0].NroCotizacion);
        const url3 = `https://www.wp.daxparts.com/api/cotizacion/BitModVisita/${sesion}/${resp.data.dato[0].logusuario}`;
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
        title: `${props.idioma.ingresar.swalTitle}`,
        text: `${props.idioma.ingresar.swalText}`,
        icon: 'error',
      });
    }

    closeModal();
  };

  return (
    <>
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
              <div className='form-group d-flex justify-content-center'>
                <input
                  type='text'
                  className='form-control mr-sm-2'
                  placeholder={props.idioma.ingresar.nombre}
                  onChange={(e) => setLogusuario(e.target.value)}
                  value={logusuario}
                />
              </div>

              <div className='form-group d-flex justify-content-center'>
                <input
                  type='password'
                  className='form-control mr-sm-2'
                  placeholder={props.idioma.ingresar.password}
                  onChange={(e) => setClausuario(e.target.value)}
                  value={clausuario}
                />
              </div>

              <div className='boton-form'>
                <button type='submit' className='boton-ingresar-comprar btn'>
                  {props.idioma.ingresar.botonIngresar}
                </button>
              </div>
            </form>
          </div>

          <div className='modal-footer d-flex justify-content-center'>
            <div>
              {props.idioma.ingresar.cambiarModal}{' '}
              <span
                className='pointer'
                onClick={() => {
                  dispatch(
                    openModal(
                      'open',
                      <SignUpBuy
                        idioma={props.idioma}
                        intCodRepuesto={props.intCodRepuesto}
                      />
                    )
                  );
                }}
                style={{ color: '#fca728' }}>
                {props.idioma.ingresar.cambiarEnlace}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginBuy;
