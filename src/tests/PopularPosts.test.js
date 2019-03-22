import React from 'react';
import PopularPosts from '../components/PopularPosts';
import { shallow } from 'enzyme';

fdescribe('PopularPosts', () => {
  it('renders', () => {
    let posts = [
      { title: 'ama', ups: 53299 },
      { title: 'movies', ups: 42000 }
    ];
    const component = shallow(<PopularPosts posts={posts}/>);
    expect(component.length).toBe(1);
  });
});