import React from 'react';
import Card from '../components/Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let component, post;

  beforeEach(() => {
    post = {
      postedBy: 'mugen',
      postedAt: 1234894732,
      thumbnail: 'http://classictoonami.com/pics/mugen.jpg',
      title: 'war of the words',
      url: 'http://www.reddit.com/r/anime/posts/12345'
    };
    component = shallow(<Card {...post}/>);
  });

  it('displays user name and posted date', () => {
    const expectedResult = 'Posted by u/mugen @ 1234894732';
    expect(component.find('p').text()).toBe(expectedResult);
  });

  it('displays title', () => {
    const expectedResult = 'war of the words';
    expect(component.find('a').first().text()).toBe(expectedResult);
  });

  it('includes url link', () => {
    const expectedResult = 'http://www.reddit.com/r/anime/posts/12345';
    expect(component.find('a').last().props().href).toBe(expectedResult);
  });
});