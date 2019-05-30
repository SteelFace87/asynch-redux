import React from 'react';
import Characters from './Characters';
import { shallow } from 'enzyme';

describe('Characters component', ()=>{

  it('renders all characters with a character array', ()=>{

    const characterArray = [
      {

        'name': 'Rick Sanchez',
        'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        'name': 'Morty Smith',
        'image': 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      }
    ];



    const wrapper = shallow(<Characters characters={characterArray}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
