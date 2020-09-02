import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';
import { Link } from 'react-router-dom';
import logoCentro from '../img/logoCentro.png';
import iconVideos from '../img/IconVideos.png';
import Idioma from '../components/Idioma';
import Pais from '../components/Pais';
import Noparte from '../components/NoParte';



const Homepage = (props) => {
  // Logica cuando usuario no introduce numero de parte (no ir a cotizacion)
  // Logic to stay at home if not spare part number provided
  let buscarParte = '';
  if (props.strNroParte !== '') {
    buscarParte = 'cotizacion';
  }
    return ( 
        <div className="Homepage">
          <header className="Homepage-header">
            <div className='container-fluid'>
              <div className='container-fluid d-flex justify-content-between pais-idioma'>
                <Pais country={props.country} />
                <Idioma language={props.language} handleLanguage={props.handleLanguage} />
              </div>

              <div className='header-contenido'>
                <div className='container'>
                  <img className='logo-centro' src={logoCentro} alt='Dax Logo' />
                </div>

                <div className='container d-flex justify-content-center'>
                  <form className='form-inline d-flex justify-content-center'>
                    <label>{props.idioma.home.leyendaBuscar}</label>
                    <input
                      type='text'
                      placeholder={props.idioma.home.campoBuscar}
                      value={props.parte}
                      onChange={props.handleChange}
                    />
                    <Link to={`/${buscarParte}`} className='btn btn-buscar'>
                      {props.idioma.home.botonBuscar}
                    </Link>
                  </form>
                </div>

                <div className='container click-link'>
                  <button
                    type='button'
                    className='button-link'
                    onClick={() => {
                      props.openModal('open', <Noparte idioma={props.idioma} />);
                    }}>
                    <p className=''>{props.idioma.home.enlaceClick}</p>
                  </button>
                </div>

                <div className='container'>
                  <Link to='/tutorial'>
                    <img className='logo-tutorial' src={iconVideos} alt='Tutorial Logo' />
                    <p className='tutorial-text'>{props.idioma.home.leyendaTutorial}</p>
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </div>
     );
}

// Function para abrir modal
function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}
 
export default connect(null, mapDispatchToProps)(Homepage);