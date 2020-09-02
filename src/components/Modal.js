import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../actions/openModal';

const Modal = (props) => {
  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  // Logic to visualize the modal
  let modalInlineStyle;
  if (props.siteModal.openClose === 'open') {
    modalInlineStyle = { display: 'block' };
  } else {
    modalInlineStyle = { display: 'none' };
  }

  return (
    <div className='site-modal' style={modalInlineStyle} tabIndex='-1' role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='col right'>
            <span onClick={closeModal} className='close'>
              &times;
            </span>
          </div>
          <div className='formulario-ingreso'>
            {/* Contenido del modal goes below... */}
            {props.siteModal.content}
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
  };
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispatcher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);