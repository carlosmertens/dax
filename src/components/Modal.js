import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import openModal from '../actions/openModal';

const Modal = () => {
  const dispatch = useDispatch();
  const siteModal = useSelector((state) => state.siteModal);

  // Conponent to close the modal
  const closeModal = () => {
    dispatch(openModal('closed', ''));
  };

  // Logic to visualize the modal
  let modalInlineStyle;
  if (siteModal.openClose === 'open') {
    modalInlineStyle = { display: 'block' };
  } else {
    modalInlineStyle = { display: 'none' };
  }

  return (
    <div
      className='site-modal'
      style={modalInlineStyle}
      tabIndex='-1'
      role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='col right'>
            <span onClick={closeModal} className='close'>
              &times;
            </span>
          </div>
          <div className='formulario-ingreso'>
            {/* Modal Content */}
            {siteModal.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
