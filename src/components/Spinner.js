import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSpinner);

const Spinner = () => (
  <React.Fragment>
    <div className='spinner-wrapper'>
      <FontAwesomeIcon icon='spinner' size='10x' spin />
    </div>
    <style jsx='true'>
      {`
        .spinner-title h2 {
          text-transform: uppercase;
          font-size: 18px;
          text-align: center;
          margin-top: 60px;
        }
        .spinner-wrapper {
          color: #fca728;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 40%;
        }
      `}
    </style>
  </React.Fragment>
);

export default Spinner;
