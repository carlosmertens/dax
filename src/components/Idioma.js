import React from 'react';

const Idioma = (props) => {
  // console.log(props);
  return (
    <select
      className='btn btn-idioma'
      value={props.language}
      onChange={props.handleLanguage}>
      <option>Español</option>
      <option>English</option>
    </select>
  );
};

export default Idioma;