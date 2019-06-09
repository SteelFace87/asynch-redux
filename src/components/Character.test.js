import React from 'react';
import Character from './Character';
import { shallow } from 'enzyme';

describe('Character component', ()=>{

  const testObject = {
    image:'test image',
    name:'test name'
  };

  it('renders a character', ()=>{
    const wrapper = shallow(<Character image={testObject.image} name={testObject.name}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
