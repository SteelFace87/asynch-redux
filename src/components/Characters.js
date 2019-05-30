import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
export default function Characters({ characters }){

  const characterList = characters.map((character, i)=>{
    <li key={i}><Character character={character}/></li>;
  });

  return (
    <ul>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters:PropTypes.array.isRequired
}
;
