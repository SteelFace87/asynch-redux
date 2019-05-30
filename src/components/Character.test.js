import React from 'react';
import Character from './Character';
import { shallow } from 'enzyme';

describe('Character component', ()=>{
  console.log('character', Character);
  it('renders a character', ()=>{
    const wrapper = shallow(<Character image='test image' name='test name'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
