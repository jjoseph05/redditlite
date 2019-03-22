import React from 'react';
import HomePage from '../components/HomePage';
import { shallow, mount } from 'enzyme';


describe('Home Page', () => {
  it('renders', () => {
    const homePage = shallow(<HomePage />);
    expect(homePage.length).toBe(1);
  });
  it('renders a search component', () => {
    const homePage = mount(<HomePage/>);
    expect(homePage.find('Search').length).toBe(1);
  });
});
