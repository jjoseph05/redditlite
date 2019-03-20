import React from 'react';
import HomePage from '../components/HomePage';
import { shallow } from 'enzyme';

describe('Home Page', () => {
  it('renders', () => {
    const homePage = shallow(<HomePage />);
    expect(homePage.find('div').text()).toEqual('Loading...');
  });
  // Renders search field
  // Renders popular posts "Cards"
});
