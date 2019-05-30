import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';


export default class Characters extends PureComponent{
  static propTypes ={
    characters:PropTypes.array.isRequired,
    loadCharacters:PropTypes.func.isRequired
  }
  
  componentDidMount(){
    this.props.loadCharacters();
  }
  
  
  render(){
    console.log('props in charactesr', this.props);
    const characterList = this.props.characters.map((character, i)=>{
      return <li key={i}><Character character={character}/></li>;
    });
    return (
      <ul>
        {characterList}
      </ul>
    );
  }
}
