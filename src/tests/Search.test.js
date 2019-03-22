import React from 'react';
import Search from '../components/Search';
import { shallow, mount } from 'enzyme';

describe('Search', () => {
  it('renders', () => {
    const component = shallow(<Search />);
    expect(component.length).toBe(1);
  });

  it('button\'s default state is disabled', () => {
    const component = shallow(<Search />);
    expect(component.find('button').props().disabled).toBe(true);
  });

  it('button\'s state is enabled upon user input', () => {
    const component = mount(<Search />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'Hello' } });
    expect(component.find('button').props().disabled).toBe(false);
  });
});