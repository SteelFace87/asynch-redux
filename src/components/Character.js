import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ name, image }){
  console.log(image);
  console.log('type of', typeof image);

  return (
    <section>
      <p>{name}</p>
      <img src={image}/>
    </section>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired
}
;
