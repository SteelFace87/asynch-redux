import React from 'react';
import PropTypes from 'prop-types';

export function Character({ image, name }){

  return (
    <section>
      <p>{name}</p>
      <img src={image}/>
    </section>
  );
}

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
;
