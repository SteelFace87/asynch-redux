import Character from './Character';
import { shallow } from 'enzyme';
import React from 'react';

describe('character component', ()=>{
  it('renders a character', ()=>{
    const character = { name:'test name', photoUrl: 'test url' };
    const wrapper = shallow(<Character character={character}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
