import React from 'react';
import PropTypes from 'prop-types';
export default function Character({ character }){


  return (
    <section>
      <img src={character.photoUrl}/>
      <p> {character.name}</p>
    </section>
  );
}

Character.propTypes = {
  character:PropTypes.object.isRequired
}
;
