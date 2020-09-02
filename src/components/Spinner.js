import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSpinner);

const Spinner = ({ idioma }) => (
  <>
    <div className='spinner-wrapper'>
      <FontAwesomeIcon icon='spinner' size='10x' spin />
    </div>
    <div className='spinner-title'>
      <h2>{idioma.spinner}</h2>
    </div>
  </>
);

export default Spinner;