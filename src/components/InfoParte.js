import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import openModal from '../actions/openModal';
import navLogo from '../img/logoNav.png';
import SignUpInfo from './SignUpInfo';

const InfoParte = (props) => {
  const dispatch = useDispatch();
  const parte = useSelector((state) => state.parte);
  const [infoMarcas, setInfoMarcas] = useState(['']);
  const [marca, setMarca] = useState('');
  const [selectMarca, setSelectMarca] = useState('');
  const [otherMarca, setOtherMarca] = useState('');
  const [otros, setOtros] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://www.wp.daxparts.com/api/marca/listado2';
      const resp = await axios.get(url);
      setInfoMarcas(resp.data.dato);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectMarca === '<<OTROS>>') {
      setOtros(true);
      setMarca(otherMarca);
    } else {
      setOtros(false);
      setMarca(selectMarca);
    }
  }, [selectMarca, otherMarca]);

  const optionsMarca = infoMarcas.map((item, index) => {
    return (
      <option key={index} value={item.NomMarca} required>
        {item.NomMarca}
      </option>
    );
  });

  return (
    <React.Fragment>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <div className='modal-body'>
        <div className='modal-header'>
          <h6 className=''>{props.idioma.infoParte.titulo}</h6>
        </div>
        <div className='modal-body'>
          <div className='form-group d-flex justify-content-center'>
            <select
              className='custom-select'
              onChange={(e) => setSelectMarca(e.target.value)}>
              {optionsMarca}
            </select>
          </div>
          {otros ? (
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={props.idioma.infoParte.holder}
                onChange={(e) => setOtherMarca(e.target.value)}
              />
            </div>
          ) : (
            <br />
          )}
          <div className='form-group d-flex justify-content-center'>
            <button
              type='button'
              className='btn'
              onClick={() => {
                dispatch(
                  openModal(
                    'open',
                    <SignUpInfo
                      idioma={props.idioma}
                      itemMarca={marca}
                      intCodRepuesto={0}
                      parte={parte}
                    />
                  )
                );
              }}>
              {props.idioma.infoParte.botonSiguiente}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoParte;
